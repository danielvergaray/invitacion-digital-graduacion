import React, { useContext, useEffect } from "react";
import InfoContext from "../infoContext/InfoContext";
import { Link } from "react-router-dom";
import AcordionBootstrap from "../acordion/AcordionBootstrap";
import Aos from "aos";
import "aos/dist/aos.css";

const SeccionMesas = () => {
  const { infoMesasArray, cantidadMesas } = useContext(InfoContext);

  useEffect(() => {
    Aos.init();
  }, [{ duration: 100 }]);

  return (
    <>
      {infoMesasArray.map((info, index) => (
        <div key={index}>
          <div className="titulo-imagen-letras"
          data-aos-easing="linear"
          data-aos="fade-up"
          data-aos-duration="250"
          data-aos-delay="0"
          >
            <img
              key={index}
              src={info.imagenTitulo}
              alt="titulo sobre el playlist"
            />
          </div>

          <div className="informacion-boton-container">
            <div className="seccion-titulo"
            data-aos-easing="linear"
            data-aos="fade-up"
            data-aos-duration="250"
            data-aos-delay="0"
            >
              <h1> {info.textoTitulo} </h1>
            </div>

            {/* <div className="section-acordion">
              {cantidadMesas.map((mesa, index) => (
                <AcordionBootstrap key={index}
                  titulo={`Mesa ${mesa}`}
                  disponibles="3"
                  textoDisponibles="Asientos disponibles:"
                  index = {index}
                />
              ))} */}

            <div className="section-acordion">
          
                <AcordionBootstrap
                  key={index}
                  textoDisponibles="Asientos disponibles:"
                  
                />
        

              {/* <AcordionBootstrap
                
                titulo={`Mesa `}
                disponibles="3"
                textoDisponibles="Asientos disponibles:"
              
              /> */}
            </div>

            {/* <div className="section-acordion">
              <AcordionBootstrap
                titulo= "Hola"
                disponibles="3"
                textoDisponibles="Asientos disponibles:" 
                 />
              
            
            </div> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default SeccionMesas;
