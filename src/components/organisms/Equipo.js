import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { red } from "@mui/material/colors";
import ariel from "../../../public/images/ariel.png";
import vani from "../../../public/images/vani.png";
import andre from "../../../public/images/andre.png";
import guido from "../../../public/images/guido.png";
import gaston from "../../../public/images/gaston.png";
import alan from "../../../public/images/alan.png";
import Image from "next/image";
import Link from 'next/link';

const Equipo = () => {
  return (
    <section className=" h-auto w-full p-6 bg-gradient-to-b from-[#03c3ec] to-red-200">
        <h1 className="text-center font-bold  mb-0 text-3xl mb-[50px">Participantes</h1>
     
       <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-[100px] mb-[100px]"> 
       <div className="mt-12 md:mt-12 lg:mt-0 relative flex flex-col items-center text-black bg-gradient-to-r from-stone-300 to-stone-200 border-2 border-slate-500 rounded-lg max-h-screen w-90 h-[270px]  hover:border-red-400 shadow-red-400/50 ease-in-out">
          <div className="absolute -top-10">
            <Image
              className="object-cover w-24 h-24 rounded-full"
              src={ariel}
              alt="Vanina"
            />
          </div>
          <div className="flex flex-col items-center justify-center mt-16">
            <h2 className="mt-2 text-2xl font-bold lg:ml-2 lg:text-center">
              Vanina Flores
            </h2>
            <p className="mt-2 text-center">
              Estudiante de Desarrollo Web en Academia Numen. 
            </p>
          </div>
          <div className="flex flex-row space-x-4 mt-11 lg:mt-4">
            <a href="https://www.linkedin.com/in/vanina-flores-9768b9288/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="transition ease-in-out hover:opacity-75" fontSize="large" sx={{ color: red[300] }} />
            </a>
            <a href="https://github.com/VaniFlow" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="transition ease-in-out hover:opacity-75" fontSize="large" sx={{ color: red[300] }} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 md:mt-12 lg:mt-0 relative flex flex-col items-center text-black bg-gradient-to-r from-stone-300 to-stone-200 border-2 border-slate-500 rounded-lg max-h-screen w-90 h-[270px]  hover:border-red-400 shadow-red-400/50 ease-in-out">
          <div className="absolute -top-10">
            <Image
              className="object-cover w-24 h-24 rounded-full"
              src={vani}
              alt="Vanina"
            />
          </div>
          <div className="flex flex-col items-center justify-center mt-16">
            <h2 className="mt-2 text-2xl font-bold lg:ml-2 lg:text-center">
              Vanina Flores
            </h2>
            <p className="mt-2 text-center">
              Estudiante de Desarrollo Web en Academia Numen. 
            </p>
          </div>
          <div className="flex flex-row space-x-4 mt-11 lg:mt-4">
            <a href="https://www.linkedin.com/in/vanina-flores-9768b9288/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="transition ease-in-out hover:opacity-75" fontSize="large" sx={{ color: red[300] }} />
            </a>
            <a href="https://github.com/VaniFlow" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="transition ease-in-out hover:opacity-75" fontSize="large" sx={{ color: red[300] }} />
            </a>
          </div>
        </div>
        <div className="mt-12 md:mt-16 lg:mt-0 relative flex flex-col items-center text-black bg-gradient-to-r from-stone-300 to-stone-200 border-2 border-slate-500 rounded-lg max-h-screen w-90 h-[270px] hover:border-red-400 shadow-red-400/50 ease-in-out">
          <div className="absolute -top-10">
            <Image
              className="w-24 h-24 rounded-full object-fit"
              src={alan}
              alt="Alan"
            />
          </div>
          <div className="flex flex-col items-center justify-center mt-16 h-[150px]">
            <h2 className="mt-2 text-2xl font-bold lg:ml-2 lg:text-center">
              Alan Opresnik
            </h2>
            <p className="mt-2 text-center">
            Joven desarrollador con experiencia en React, Next.js, Sass, Tailwind CSS, Node.js y MongoDB.
            </p>
          </div>
          <div className="flex flex-row space-x-4 mt-11 lg:mt-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="transition ease-in-out hover:opacity-75" fontSize="large" sx={{ color: red[300] }} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="transition ease-in-out hover:opacity-75" fontSize="large" sx={{ color: red[300] }} />
            </a>
          </div>
        </div>
        <div className="mt-12 md:mt-16 lg:mt-10 relative flex flex-col items-center text-black bg-gradient-to-r from-stone-300 to-stone-200 border-2 border-slate-500 rounded-lg max-h-screen w-90 h-[270px]  hover:border-red-400 shadow-red-400/50 ease-in-out">
          <div className="absolute -top-10">
            <Image
              className="w-24 h-24 rounded-full object-fit"
              src={gaston}
              alt="Gaston"
            />
          </div>
          <div className="flex flex-col items-center justify-center mt-16">
            <h2 className="mt-2 text-2xl font-bold lg:ml-2 lg:text-center">
              Gastón Herrera
            </h2>
            <p className="mt-2 text-center">
              Estudiante de Desarrollo Web en Academia Numen.
            </p>
          </div>
          <div className="flex flex-row space-x-4 mt-11 lg:mt-4">
            <a href="https://www.linkedin.com/in/gaston-herrera-45ba23270" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="transition ease-in-out hover:opacity-75" fontSize="large" sx={{ color: red[300] }} />
            </a>
            <a href="https://github.com/GastonH92" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="transition ease-in-out hover:opacity-75" fontSize="large" sx={{ color: red[300] }} />
            </a>
          </div>
        </div> 
          <div className="mt-10 relative flex flex-col items-center text-black bg-gradient-to-r from-stone-300 to-stone-200 border-2 border-slate-500 rounded-lg max-h-screen w-90 h-[270px] hover:border-red-400 shadow-red-400/50 ease-in-out">
          <div className="absolute -top-10">
            <Image
              className="w-24 h-24 rounded-full object-fit"
              src={guido}
              alt="Guido"
            />
          </div>
          <div className="flex flex-col items-center justify-center mt-16">
            <h2 className="mt-2 text-2xl font-bold lg:ml-2 lg:text-center">
              Guido Aquino
            </h2>
            <p className="mt-2 text-center">
              Estudiante de Desarrollo Web en Academia Numen.
            </p>
          </div>
          <div className="flex flex-row space-x-4 mt-11 lg:mt-4">
            <a href="https://www.linkedin.com/in/guido-aquino-7b918a116/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="transition ease-in-out hover:opacity-75" fontSize="large" sx={{ color: red[300] }} />
            </a>
            <a href="https://github.com/GuidoAquino" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="transition ease-in-out hover:opacity-75" fontSize="large" sx={{ color: red[300] }} />
            </a>
          </div>
        </div>  
         <div className="mt-10 relative flex flex-col items-center text-black bg-gradient-to-r from-stone-300 to-stone-200 border-2 border-slate-500 rounded-lg max-h-screen w-90 h-[270px]  hover:border-red-400 transition-all shadow-red-400/50 ease-in-out">
          <div className="absolute -top-10">
            <Image
              className="w-24 h-24 rounded-full object-fit"
              src={andre}
              alt="Andrea"
            />
          </div>
          <div className="flex flex-col items-center justify-center mt-16">
            <h2 className="mt-2 text-2xl font-bold lg:ml-2 lg:text-center">
              Andrea Aguirre
            </h2>
            <p className="mt-2 text-center">
              Estudiante de Desarrollo Web en Academia Numen.
            </p>
          </div>
          <div className="flex flex-row space-x-4 mt-11 lg:mt-4">
            <a href="https://www.linkedin.com/in/andrea-aguirre-317284288/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="transition ease-in-out hover:opacity-75" fontSize="large" sx={{ color: red[300] }} />
            </a>
            <a href="https://github.com/andguirre" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="transition ease-in-out hover:opacity-75" fontSize="large" sx={{ color: red[300] }} />
            </a>
          </div>
        </div> 


       </div> 

      {/* <div className="flex flex-row justify-center items-center w-[80%] m-auto gap-5">
      <div className="card-container h-[450px] w-[320px] rounded-[10px] ">
        <div className="w-full h-[70%] rounded-t-[10px] relative">
        <div className="bg-black opacity-20 w-full h-full absolute z-[10] rounded-t-[10px]"></div>
            <h2 className=" text-xl  font-bold lg:ml-2 lg:text-center absolute z-10 bottom-3 ">
              Guido Aquino
            </h2>
        <Image
              className="w-full h-full object-cover absolute rounded-t-[10px]"
              src={guido}
              alt="Andrea"
            />
        </div>

        <div className="w-full h-[30%] bg-blue-800 rounded-[10px] text-center px-3 mt-[-10px] z-50 relative " >
          <div className="w-full h-[65%] rounded-t-[10px] pt-3">
          <span className="text-white">Estudiante de Desarrollo web en Academia Numen</span>
          </div>
          <div className="flex flex-row space-x-4 items-center justify-center h-[35%] border-t-[2px] border-white">
            <a href="https://www.linkedin.com/in/andrea-aguirre-317284288/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="transition ease-in-out text-white " fontSize="large"  />
            </a>
            <a href="https://github.com/andguirre" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="transition ease-in-out text-white " fontSize="large"  />
            </a>
          </div>
        </div>
        
      </div>
      <div className="card-container h-[450px] w-[320px] rounded-[10px]">
        <div className="w-full h-[70%] rounded-t-[10px] relative">
        <div className="bg-black opacity-20 w-full h-full absolute z-[10] rounded-t-[10px]"></div>
            <h2 className=" text-xl  font-bold lg:ml-2 lg:text-center absolute z-10 bottom-3 ">
              Alan
            </h2>
        <Image
              className="w-full h-full  object-cover absolute rounded-t-[10px]"
              src={alan}
              alt="Andrea"
            />
        </div>

        <div className="w-full h-[30%] bg-blue-800 rounded-[10px] text-center px-3 mt-[-10px] z-50 relative " >
          <div className="w-full h-[65%] rounded-t-[10px] pt-3">
          <span>Estudiante de Desarrollo web en Academia Numen</span>
          </div>
          <div className="flex flex-row space-x-4 items-center justify-center h-[35%] border-t-[2px] border-white">
            <a href="https://www.linkedin.com/in/andrea-aguirre-317284288/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="transition ease-in-out hover:opacity-75 text-white" fontSize="large"  />
            </a>
            <a href="https://github.com/andguirre" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="transition ease-in-out hover:opacity-75" fontSize="large"  />
            </a>
          </div>
        </div>
        
      </div>
      <div className="card-container h-[450px] w-[320px] rounded-[10px]">
        <div className="w-full h-[70%] rounded-t-[10px] relative">
        <div className="bg-black opacity-20 w-full h-full absolute z-[10] rounded-t-[10px]"></div>
            <h2 className=" text-xl  font-bold lg:ml-2 lg:text-center absolute z-10 bottom-3 ">
              Vanina Flores
            </h2>
        <Image
              className="w-full h-full  object-cover absolute rounded-t-[10px]"
              src={vani}
              alt="Andrea"
            />
        </div>

        <div className="w-full h-[30%] bg-blue-800 rounded-[10px] text-center px-3 mt-[-10px] z-50 relative " >
          <div className="w-full h-[65%] rounded-t-[10px] pt-3">
          <span>Estudiante de Desarrollo web en Academia Numen</span>
          </div>
          <div className="flex flex-row space-x-4 items-center justify-center h-[35%] border-t-[2px] border-white">
            <a href="https://www.linkedin.com/in/andrea-aguirre-317284288/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="transition ease-in-out hover:opacity-75 text-white" fontSize="large"  />
            </a>
            <a href="https://github.com/andguirre" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="transition ease-in-out hover:opacity-75" fontSize="large"  />
            </a>
          </div>
        </div>
        
      </div>
      <div className="card-container h-[450px] w-[320px] rounded-[10px]">
        <div className="w-full h-[70%] rounded-t-[10px] relative">
        <div className="bg-black opacity-20 w-full h-full absolute z-[10] rounded-t-[10px]"></div>
            <h2 className=" text-xl  font-bold lg:ml-2 lg:text-center absolute z-10 bottom-3 ">
              Ariel Calfin
            </h2>
        <Image
              className="w-full h-full  object-cover absolute rounded-t-[10px]"
              src={ariel}
              alt="Andrea"
            />
        </div>

        <div className="w-full h-[30%] bg-blue-800 rounded-[10px] text-center px-3 mt-[-10px] z-50 relative " >
          <div className="w-full h-[65%] rounded-t-[10px] pt-3">
          <span>Estudiante de Desarrollo web en Academia Numen</span>
          </div>
          <div className="flex flex-row space-x-4 items-center justify-center h-[35%] border-t-[2px] border-white">
            <a href="https://www.linkedin.com/in/andrea-aguirre-317284288/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="transition ease-in-out hover:opacity-75 text-white" fontSize="large"  />
            </a>
            <a href="https://github.com/andguirre" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="transition ease-in-out hover:opacity-75" fontSize="large"  />
            </a>
          </div>
        </div>
        
      </div>
      <div className="card-container h-[450px] w-[320px] rounded-[10px]">
        <div className="w-full h-[70%] rounded-t-[10px] relative">
        <div className="bg-black opacity-20 w-full h-full absolute z-[10] rounded-t-[10px]"></div>
            <h2 className=" text-xl  font-bold lg:ml-2 lg:text-center absolute z-10 bottom-3 ">
              Gaston Herrera
            </h2>
        <Image
              className="w-full h-full  object-cover absolute rounded-t-[10px]"
              src={gaston}
              alt="Andrea"
            />
        </div>

        <div className="w-full h-[30%] bg-blue-800 rounded-[10px] text-center px-3 mt-[-10px] z-50 relative " >
          <div className="w-full h-[65%] rounded-t-[10px] pt-3">
          <span>Estudiante de Desarrollo web en Academia Numen</span>
          </div>
          <div className="flex flex-row space-x-4 items-center justify-center h-[35%] border-t-[2px] border-white">
            <a href="https://www.linkedin.com/in/andrea-aguirre-317284288/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="transition ease-in-out hover:opacity-75 text-white" fontSize="large"  />
            </a>
            <a href="https://github.com/andguirre" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="transition ease-in-out hover:opacity-75" fontSize="large"  />
            </a>
          </div>
        </div>
        
      </div>
      <div className="card-container h-[450px] w-[320px] rounded-[10px]">
        <div className="w-full h-[70%] rounded-t-[10px] relative">
        <div className="bg-black opacity-20 w-full h-full absolute z-[10] rounded-t-[10px]"></div>
            <h2 className=" text-xl  font-bold lg:ml-2 lg:text-center absolute z-10 bottom-3 ">
              Andrea
            </h2>
        <Image
              className="w-full h-full  object-cover absolute rounded-t-[10px]"
              src={andre}
              alt="Andrea"
            />
        </div>

        <div className="w-full h-[30%] bg-blue-800 rounded-[10px] text-center px-3 mt-[-10px] z-50 relative " >
          <div className="w-full h-[65%] rounded-t-[10px] pt-3">
          <span>Estudiante de Desarrollo web en Academia Numen</span>
          </div>
          <div className="flex flex-row space-x-4 items-center justify-center h-[35%] border-t-[2px] border-white">
            <a href="https://www.linkedin.com/in/andrea-aguirre-317284288/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="transition ease-in-out hover:opacity-75 text-white" fontSize="large"  />
            </a>
            <a href="https://github.com/andguirre" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="transition ease-in-out hover:opacity-75" fontSize="large"  />
            </a>
          </div>
        </div>
        
      </div>
      
      
      </div> */}
      



        {/* Boton de volver al inicio */}
        <div className="w-full flex justify-center ">
          <a 
            href="/"
            className='rounded-[10px] bg-customRed text-1em text-white hover:bg-red-400 text-decoration-none px-5 py-2 border-radius background-transition shadow-md'>
              Volver al Inicio
          </a>
        </div>
    </section>
  );
};

export default Equipo;
