import React from "react";
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';

const Proveedores = () => {
  return (

    <div
      id="provedores"
      className="bg-gradient-to-r font-bold from-red-400 to-red-200 p-4 dark:bg-gray-900"
      style={{ boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" }}
    >
      <section className="pb-32 pt-24 text-center">
        <h2 className="mb-16 text-3xl font-bold">Nuestros Proveedores</h2>

        <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
          <div className="mb-12 md:mb-0">
            <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h5 className="mb-4 text-lg font-bold">Marriott International</h5>
            <p className="text-white-900">
              Con 31 marcas y más de 8.500 hoteles en 138 países y territorios
              brindan a las personas más formas de conectarse, disfrutar y
              ampliar su mundo. Destacan por su atención al detalle, variedad de
              opciones, y un enfoque en la satisfacción del cliente.
            </p>
          </div>

          <div className="mb-12 md:mb-0">
            <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
              <svg
                className="h-8 w-8 text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path
                  d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z"
                  transform="rotate(-15 12 12) translate(0 -1)"
                />{" "}
                <line x1="3" y1="21" x2="21" y2="21" />
              </svg>
            </div>
            <h5 className="mb-4 text-lg font-bold">Etihad Airways</h5>
            <p className="text-white-900">
              Referente en la industria, ofreciendo conexiones aéreas globales
              de alta calidad. Con una experiencia contrastada, son la elección
              ideal para viajeros que buscan conexiones aéreas confiables y
              satisfactorias.
            </p>
          </div>

          <div className="mb-12 md:mb-0">
            <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
              <svg
                className="h-8 w-8 text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <circle cx="12" cy="12" r="9" />{" "}
                <line x1="3.6" y1="9" x2="20.4" y2="9" />{" "}
                <line x1="3.6" y1="15" x2="20.4" y2="15" />{" "}
                <path d="M11.5 3a17 17 0 0 0 0 18" />{" "}
                <path d="M12.5 3a17 17 0 0 1 0 18" />
              </svg>
            </div>
            <h5 className="mb-4 text-lg font-bold">Assist Card</h5>
            <p className="text-white-900">
              Empresa Lider en ofrecer servicios de protección y apoyo durante
              los desplazamientos. Destacan por su amplia gama de coberturas,
              atención al cliente las 24 horas y respuesta efectiva ante
              emergencias.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

    <section id="proveedores">
    <div 
   
    className="font-bold h-auto flex items-center  bg-gradient-to-b from-[#03c3ec] to-red-200"
>

      <section className="pb-[2%] pt-[3%] pr-[6rem] pl-[6rem] text-center">
        <h2 className="mb-16 text-3xl font-bold">
          Nuestros Proveedores
        </h2>
        
    <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
      <div className="mb-12 md:mb-0">
        <div className="inline-block p-4 mb-6 rounded-md bg-primary-100 text-primary">
        <DirectionsCarFilledOutlinedIcon fontSize="large" className="text-5xl"/>
     </div>
        <h5 className="mb-4 text-lg font-bold">Marriott International</h5>
        <p className="text-white-900">
          Con 31 marcas y más de 8.500 hoteles en 138 países y territorios brindan a las personas más formas de conectarse, disfrutar y ampliar su mundo. Destacan por su atención al detalle, variedad de opciones, y un enfoque en la satisfacción del cliente.
        </p>
      </div>

      <div className="mb-12 md:mb-0">
      <div className="inline-block p-4 mb-6 rounded-md bg-primary-100 text-primary">
     <FlightTakeoffOutlinedIcon fontSize="large" className="text-5xl "/>
     </div>
        <h5 className="mb-4 text-lg font-bold">Etihad Airways</h5>
        <p className="text-white-900">
        Referente en la industria, ofreciendo conexiones aéreas globales de alta calidad. Con una experiencia contrastada, son la elección ideal para viajeros que buscan conexiones aéreas confiables y satisfactorias.
        </p>
      </div>

      <div className="mb-12 md:mb-0">
      <div className="inline-block p-4 mb-6 rounded-md bg-primary-100 text-primary">
     <HotelOutlinedIcon fontSize="large" className="text-5xl "/>
     </div>
        <h5 className="mb-4 text-lg font-bold">Assist Card</h5>
        <p className="text-white-900">
          Empresa Lider en ofrecer servicios de protección y apoyo durante los desplazamientos. Destacan por su amplia gama de coberturas, atención al cliente las 24 horas y respuesta efectiva ante emergencias.
        </p>
      </div>
    </div>
  </section>
  
</div>
</section>
  )
}


export default Proveedores;
