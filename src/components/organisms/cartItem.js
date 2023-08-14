import React, { useContext, useState } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { DataContext } from "../context/dataContext"; 
import { motion, AnimatePresence } from "framer-motion"
import Modal from "react-modal"; 

const CartItem = ({ cart, total }) => {
  const { setCart } = useContext(DataContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleIncrement = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const openModal = (itemId) => {
    setItemToDelete(itemId);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setItemToDelete(null);
  };

  const handleDecrement = (itemId) => {
  const itemToDelete = cart.find((item) => item.id === itemId);

  if (itemToDelete && itemToDelete.quantity === 1) {
    openModal(itemId);
  } else {
    decrementItem(itemId);
  }
};

const decrementItem = (itemId) => {
  const updatedCart = cart.map((item) =>
    item.id === itemId
      ? { ...item, quantity: item.quantity - 1 }
      : item
  )
  setCart(updatedCart);
};

const handleDeleteConfirmed = (itemId) => {
  const updatedCart = cart.filter((item) =>
  item.id !== itemToDelete
  );
  console.log(itemToDelete)
  setCart(updatedCart);
  closeModal();
};
  
  
  
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      color: "black",
      width: "600px",
      height: "200px",
      zIndex: 99999,
      marginTop: "2rem",
    },
  };

  return (


<div
  style={{
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: ".6rem",
    maxHeight:"600px",
    overflowY:"scroll",
    position: "absolute",
    right: "0",
  }}
>
  <h4 className="text-black">Carrito</h4>

  {cart.map((card) => (
    <AnimatePresence key={card.id}>
      <motion.div
      
        className="text-black flex items-center mb-6 gap-4"
        initial={{ opacity: 0, y: 100 }} 
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: 100 }} 
        transition={{ duration: 0.3 }}
      >
        <img
          className="w-20 h-20 rounded"
          src={card.imgfondo}
          alt={card.titulo}
        />
        <p className="text-black w-[150px]">{card.titulo}</p>
        <button onClick={() => handleIncrement(card.id)}>
          <AddCircleOutlineIcon />
        </button>
        <span className="text-black">{card.quantity}</span>
        <button onClick={() => handleDecrement(card.id)}>
          <RemoveCircleOutlineIcon />
        </button>
        <span className="text-black">${card.precio * card.quantity}</span>
      </motion.div>
    </AnimatePresence>
  ))}
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Eliminar artículo"
      >
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-black">¿Eliminar este artículo?</h2>
          <div className="flex gap-2 justify-center mt-5">
            <button
              style={{
                backgroundColor: "#F99999",
                padding: ".5rem ",
                borderRadius: "10px",
                color: "white",
              }}
              onClick={handleDeleteConfirmed}
            >
              Eliminar
            </button>
            <button
              style={{
                border: "1px solid #F99999",
                padding: ".5rem ",
                borderRadius: "10px",
              }}
              onClick={closeModal}
            >
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
      <div>
        <h3 className="text-black text-right">Total: {total}</h3>
      </div>
    </div>
  );
};

export default CartItem;
