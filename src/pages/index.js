import React, { useState, useEffect } from 'react';
import CardList from "@/components/organisms/CardList";
import Head from "next/head";
import Footer from "@/components/organisms/Footer";
import Homepart from "@/components/organisms/Homepart";
import About from "@/components/organisms/About";
import Nav from "@/components/atoms/Nav";
import Proveedores from "@/components/organisms/Provedores";
import { DataContextProvider } from "@/components/context/dataContext";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  const subirpagina = () => {    
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  return (
    <DataContextProvider>
      <Head>
        <title>Gold Sands Tours</title>
        <link
          rel="shortcut icon"
          href="https://i.postimg.cc/MZjWxcmK/palmerita.png"
        />
      </Head>

      <Nav />

      <Homepart />

      <CardList />
      <About />
      <Proveedores />
      <Footer />

      {showButton && (
        <button

          className="scale-[1.2] fixed bottom-0 right-0 bg-blue-400 m-1 rounded-[2px]  "

          onClick={subirpagina}
        >
          <KeyboardArrowUpIcon />
        </button>
      )}
    </DataContextProvider>
  );
}