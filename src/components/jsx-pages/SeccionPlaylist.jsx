import React, { useContext, useEffect } from "react";
import InfoContext from "../infoContext/InfoContext";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const SeccionPlaylist = () => {
  const { infoPlaylistArray } = useContext(InfoContext);

  useEffect(() => {
    Aos.init();
  }, [{ duration: 100 }]);

  return (
    <>
      {infoPlaylistArray.map((info, index) => (
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
              alt="titulo sobre el playlist"
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
              <h1> {info.textoTitulo} </h1>
            </div>

            <div className="boton-container">
              <button>
                <Link target="_blank" to={info.link}>
                  {info.textoBoton}
                </Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SeccionPlaylist;
