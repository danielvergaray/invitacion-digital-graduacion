import React, { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";

const SeccionCarrusel = () => {
  const { infoCarruselArray } = useContext(InfoContext);

  return (
    <>
      {infoCarruselArray.map((info, index) => (
        <div key={index}>
          <div className="titulo-imagen-onda">
            <img src={info.imagenTitulo} alt="imagen onda" />
          </div>
          <div>
            <p>{info.textoTitulo} </p>
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
