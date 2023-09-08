import React, { useContext, useState } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { DataContext } from "../context/dataContext";
import CartEmpty from "./cartEmpty";
import { Toaster, toast } from "sonner";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import ItemCart from "./itemCart";

const CartItem = ({ cart, total, openCart, setOpenCart }) => {
  const { setCart } = useContext(DataContext);
  const [animationParent] = useAutoAnimate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const clearCart = () => {
    toast.error("Se vacio correctamente el carrito", {
      duration: 1000,
    });
    const updatedCart = [];
    setCart(updatedCart);
    handleClose();
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
    <>
      {cart.length > 0 ? (
        <div ref={animationParent} className="overflow-hidden absolute bg-white right-0 p-5 rounded-[10px] container-cart">
          <h4 className="font-bold text-red-400">Carrito</h4>
          {cart.map((card) => (
            <div key={card.id}>
              <ItemCart card={card} cart={cart} total={total} />
            </div>
          ))}
          <div className="flex items-center justify-end gap-4 mb-6">
            <h3 className="text-black"> Total: {total}</h3>
            <button
              style={{
                backgroundColor: "#F99999",
                padding: ".5rem ",
                borderRadius: "10px",
                color: "white",
                width: "95px",
              }}
              onClick={handleOpen}
            >
              <DeleteIcon style={{ marginTop: "-0.2rem" }} />
              Vaciar
            </button>
          </div>
          <Modal
            open={open}
            onClose={close}
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
                ¿Estas seguro que desea vaciar el carrito?
              </Typography>
              <div className="flex flex-wrap justify-center gap-8 ">
                <Button
                  onClick={clearCart}
                  variant="contained"
                  className="flex-wrap bg-red-400  hover:bg-red-500"
                >
                  SI
                </Button>
                <Button
                  onClick={handleClose}
                  variant="outlined"
                  className="flex-wrap text-red-400 border-red-400 border-solid border-1 hover:border-red-500 hover:bg-red-50"
                >
                  NO
                </Button>
              </div>
            </Box>
          </Modal>
        </div>
      ) : (
        <CartEmpty/>
      )}
    </>
  );
};

export default CartItem;
