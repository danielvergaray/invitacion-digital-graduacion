import React, { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";
import { Link } from "react-router-dom";

const SeccionPlaylist = () => {
  const { infoPlaylistArray } = useContext(InfoContext);

  return (
    <>
      {infoPlaylistArray.map((info, index) => (
        <div key={index}>
          <div className="titulo-imagen-letras">
            <img
              key={index}
              src={info.imagenTitulo}
              alt="titulo sobre el playlist"
            />
          </div>

          <div className="informacion-boton-container">
            <div className="seccion-titulo">
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
