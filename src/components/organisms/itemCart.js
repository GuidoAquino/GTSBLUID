import React, { useContext, useState } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { DataContext } from "../context/dataContext";
import { Toaster, toast } from "sonner";


const ItemCart = ({ card, cart }) => {
    const { setCart } = useContext(DataContext);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const handleIncrement = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const handleDecrement = (itemId) => {
    const itemToDelete = cart.find((item) => item.id === itemId);

    if (itemToDelete && itemToDelete.quantity === 1) {
      handleOpen2();
    } else {
      decrementItem(itemId);
    }
  };

  const decrementItem = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
  };

  const handleDeleteProduct = (itemId) => {
    toast.error("Producto eliminado del carrito", {
      duration: 1000,
    });
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    handleClose2();
  };

  const handleDeleteAllProducts = (itemId) => {
    toast.error("Producto eliminado correctamente");
    const updatedCart = cart.filter((item) => item.id !== itemToDelete);
    setCart(updatedCart);
    handleClose3();
  };

  const style = {
    position: "absolute",
    borderRadius: "10px",
    color: "black",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    "@media (max-width: 768px)": {
      width: "80%",
      boxShadow: 12,
      p: 3,
    },
  };
  return (
    <div>
      <div className="flex items-center gap-4 mb-6 text-black">
        <div className="imagencarrito w-[80px] h-[80px] min-w-[40px] rounded-[10px]">
          <img
            className="w-[100%] h-[100%] rounded-[10px] object-cover "
            src={card.imgfondo}
            alt={card.titulo}
          />
        </div>
        <p className="text-black w-[150px] ">{card.titulo}</p>
        <div className=" flex flex-row m-[10px] justify-center items-center max-w-[70px]">
          <button onClick={() => handleIncrement(card.id)}>
            <AddCircleOutlineIcon className="m-[3px]" />
          </button>
          <span className="text-black">{card.quantity}</span>
          <button
            onClick={() => {
              setItemToDelete(card.id);
              handleDecrement(card.id);
            }}
          >
            <RemoveCircleOutlineIcon className="m-[3px]" />
          </button>
        </div>

        <Modal
          open={open2 && itemToDelete === card.id} // Abre el modal solo si open2 es true y el itemToDelete coincide con el producto actual
          onClose={handleClose2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="mb-5 text-center"
            >
              ¿Estas seguro que deseas eliminar el producto?
            </Typography>
            <div className="flex flex-wrap justify-center gap-8 ">
              <Button
                onClick={() =>
                  handleDeleteProduct(card.id, setItemToDelete(card.id))
                }
                variant="contained"
                className="flex-wrap bg-red-400  hover:bg-red-500"
              >
                SI
              </Button>
              <Button
                onClick={handleClose2}
                variant="outlined"
                className="flex-wrap text-red-400 border-red-400 border-solid border-1 hover:border-red-500 hover:bg-red-50"
              >
                NO
              </Button>
            </div>
          </Box>
        </Modal>

        <span className="text-black">${card.precio * card.quantity}</span>
        <button
          className="bottonEliminarCarrito"
          style={{
            backgroundColor: "#F99999",
            padding: ".5rem ",
            borderRadius: "10px",
            color: "white",
            flexWrap: "nowrap",
            flexDirection: "row",
            width: "100px",
            minWidth: "50px",
          }}
          onClick={() => {
            setItemToDelete(card.id);
            handleOpen3(true);
          }}
        >
          <DeleteIcon
            className="tachoeleminarcarrito"
            style={{ marginTop: "-0.2rem" }}
          />
          <span className="eliminartexto">Eliminar</span>
        </button>
        <Modal
          open={open3}
          onClose={handleClose3}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="mb-5 text-center"
            >
              ¿Estas seguro que deseas eliminar el producto sin importar la
              cantidad?
            </Typography>
            <div className="flex flex-wrap justify-center gap-8 ">
              <Button
                onClick={() => {
                  handleDeleteAllProducts(card.id), setItemToDelete(card.id);
                }}
                variant="contained"
                className="flex-wrap bg-red-400  hover:bg-red-500"
              >
                SI
              </Button>
              <Button
                onClick={handleClose3}
                variant="outlined"
                className="flex-wrap text-red-400 border-red-400 border-solid border-1 hover:border-red-500 hover:bg-red-50"
              >
                NO
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default ItemCart;
