import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import { useContext, useEffect, useState} from 'react';
import { DataContext } from '../context/dataContext';
import { Toaster, toast } from 'sonner'


const Cards = ({card}) => {

  const { data, cart, setCart, total, setTotal, setInCart, InCart } = useContext(DataContext);

  const BuyProduct = (card) => {
    toast.success('Producto agregado al carrito',{
      duration: 1000
    })
    const existingCartItem = cart.find(item => item.id === card.id);
    setTotal(total)
    if (existingCartItem) {
      
      const updatedCart = cart.map(item =>
        item.id === card.id ? { ...item, quantity: item.quantity + 1, } : item
        );
        setCart(updatedCart);

    } else {
      setCart([...cart, { ...card, quantity: 1 }]);
    }
  };
  
  useEffect(() => {
    console.log("tio mauricio");

  }, [cart]);

  return (
    <>
    <div className="relative w-80 h-[450px] rounded-[10px] overflow-hidden  mb-[5px] text-left">
  <div className="opacity-80">
  <div className="bg-black opacity-40 w-full h-full absolute z-[10]"></div>
  <img
    src={card.imgfondo}
    className="absolute object-cover w-full h-full"
    alt="Fondo"
  />
</div>
  <div className="w-full z-[20] transition-[0.5s] p-5 left-0 -bottom-2.5">
    <img
      src={card.imglogo}
      className="max-w-[100px] max-h-[102px] z-[300] relative"
      alt="Logo"
    />
    <h3 className="text-[1.2em] font-bold text-white font-[bold] z-[321] relative opacity-100">
      {card.titulo}
    </h3>
    <div className="relative h-[170px] ">
      <p className="text-white rounded ml-0 mr-[5px] my-0 p-[5px] font-bold">
        {card.textodescripcion}
      </p>
    </div>
    <div className="h-[80px] w-full relative z-[327]">
      <h4 className="text-white mt-2.5 z-[329] text-[1.3em no-underline]">
        Comodidades
      </h4>
      <ul className="relative flex gap-[5px] py-1 ">
      <HotelOutlinedIcon/>
      <FlightTakeoffOutlinedIcon/>
      <DirectionsCarFilledOutlinedIcon/>
      </ul>
      <div className='relative bottom-0 '>
      <div className="bottom-0 left-0 flex items-center justify-between w-full ">
      
        <button
          onClick={(e) => BuyProduct(card) }
          className="rounded-[10px] bg-customRed text-1em text-white text-decoration-none px-5 py-2 border-radius background-transition"
        >
        
          Agregar a carrito
        </button>
        <a
          className="text-[1em] no-underline text-white transition-all duration-[0.3s] p-2"
          href="#"
        >
          ${card.precio}
        </a>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Cards;

