import React, { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";
import { Link } from "react-router-dom";
import AcordionBootstrap from "../acordion/AcordionBootstrap";

const SeccionMesas = () => {
  const { infoMesasArray } = useContext(InfoContext);
  return (
    <>
      {infoMesasArray.map((info, index) => (
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

            <div className="section-acordion">
              <AcordionBootstrap
                titulo="Mesa 1"
                disponibles="3"
                textoDisponibles="Asientos disponibles:"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SeccionMesas;
