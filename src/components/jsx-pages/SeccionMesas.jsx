import React, { useContext, useEffect } from "react";
import InfoContext from "../infoContext/InfoContext";
import AcordionBootstrap from "../acordion/AcordionBootstrap";
import Aos from "aos";
import "aos/dist/aos.css";

const SeccionMesas = () => {
  const { infoMesasArray } = useContext(InfoContext);

  useEffect(() => {
    Aos.init();
  }, [{ duration: 100 }]);

  return (
    <>
      {infoMesasArray.map((info, index) => (
        <div key={index}>
          <div
            className="titulo-imagen-letras"
            data-aos-easing="linear"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="0"
          >
            <img
              key={index}
              src={info.imagenTitulo}
              alt="titulo sobre mesas"
            />
          </div>

          <div className="informacion-boton-container">
            <div
              className="seccion-titulo"
              data-aos-easing="linear"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="250"
            >
              {/* <h1> {info.textoTitulo} </h1> */} {/* DESCOMENTAR ESTA SECCION EL 5 DE NOVIEMBRE */}
              <h1 style={{padding: '0 0px 90px', color: '#e0e0e0'}}>Reservación de mesas momentáneamente cerrada</h1> {/* COMENTAR ESTA SECCION EL 5 DE NOVIEMBRE */}
            </div>


{/* DESCOMENTAR ESTA SECCION EL 5 DE NOVIEMBRE */}


           {/*  <div className="section-acordion">
              <AcordionBootstrap
                key={index}
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
