import React, { useContext, useEffect } from "react";
import InfoContext from "../infoContext/InfoContext";
import Aos from "aos";
import "aos/dist/aos.css";

const SeccionCarrusel = () => {
  const { infoCarruselArray } = useContext(InfoContext);

  useEffect(() => {
    Aos.init();
  }, [{ duration: 100 }]);

  return (
    <>
      {infoCarruselArray.map((info, index) => (
        <div key={index}>
          <div className="titulo-imagen-onda"
          data-aos-easing="linear"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="0"
          >
            <img src={info.imagenTitulo} alt="imagen onda" />
          </div>
          <div className="seccion-titulo"
          data-aos-easing="linear"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="250"
          >
            <h1>{info.textoTitulo} </h1>
          </div>

          <div className="slider">
            <div className="slider-track">
              {info.carruselImagenes.map((imagen, index) => (
                <div className="slide" key={index}>
                  <img src={imagen.imagenCarrusel} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SeccionCarrusel;
