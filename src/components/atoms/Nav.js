import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Navbar } from "flowbite-react";
import CartItem from "../organisms/cartItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { DataContext } from "../context/dataContext";
import { Toaster, toast } from 'sonner'
import Image from "next/image";
import logonaranja from "../../../public/images/logo-naranja3.png"


const Nav = () => {
  const { cart } = useContext(DataContext);
  const [openCart, setOpenCart] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce(
      (acc, el) => acc + el.precio * el.quantity,
      0
    );
    setTotal(newTotal);
  }, [cart]);

  const formattedTotal = total.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleClick = () => {
    setOpenCart(!openCart);
  };

  const router = useRouter();

  return (
    <>
    <Toaster closeButton  richColors position='top-right'/>
      <Navbar
        className="bg-white/20 w-[100%] fixed z-30 backdrop-blur p-[5px] "
       
         fluid
      >
        <Navbar.Brand href="/#" >
          <Image
            src={logonaranja}
            border="0"
            alt="Gold-Sands-Tours"
            className=" ml-[5%] logogst"
          />
        </Navbar.Brand>
        <div className="flex gap-3 md:order-2   ">
          <div className="d-block">
            <button 
              onClick={handleClick}
              className=" bg-red-400 hover:bg-red-200 rounded-[10px] p-[7px] text-white btn-carrito " 
            >
              <ShoppingCartIcon style={{ transform: "scale(1.3)" }} />{" "}
              <span>{totalCartItems}</span>
            </button>
            <div></div>
            {openCart && (
              <div>
                <CartItem
                  cart={cart}
                  openCart={openCart}
                  setOpenCart={setOpenCart}
                  total={formattedTotal}
                />
                <div className="flex flex-col "></div>
              </div>
            )}
          </div>

          <Navbar.Toggle className='bg-transparent  border-none  ' />
        </div>
        <Navbar.Collapse className="bg-transparent  ">
          
            <ul className=" flex flex-row text-white font-bold text-[20px] menu-mobile" >
              <a href="/#"  className="p-[10px] link-mobile ">Inicio</a>
              <a href="/#destinos" className="p-[10px] link-mobile" >Destinos</a>
              <a href="/#about" className="p-[10px] link-mobile">Sobre Nosotros</a>
              <a href="/#proveedores" className="p-[10px] link-mobile">Proveedores</a>
              <a href="/#footer" className="p-[10px] link-mobile">Contacto</a>
              <a href="/Participantes" className="p-[10px] link-mobile">Parcipantes</a>
            </ul>
       
          

          {/* Enlace utilizando Link de next/link */}
         
          
         
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};



export default Nav;
