import { useEffect, useState, useContext } from "react";
import Slider from "react-slick";
import Cards from "./Cards";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DataContext } from "../context/dataContext";

const CardList = () => {
  const Data = useContext(DataContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },

      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="destinos">
      <div className="py-20 px-2 bg-gradient-to-b from-[#03c3ec] to-red-200 font-sans">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold">Elige tu destino favorito</h2>
        </div>
        <Slider {...settings}>
          {Data.data.map((card) => (
            <Cards key={card.id} card={card} />
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default CardList;
