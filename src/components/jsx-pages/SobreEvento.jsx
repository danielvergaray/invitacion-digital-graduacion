import React, { useContext } from "react";
import { Link } from "react-router-dom";
import InfoContext from "../infoContext/InfoContext";

const SobreEvento = () => {
  const { infoSobreEventoArray } = useContext(InfoContext);

  return (
    <>
      {infoSobreEventoArray.map((info, index) => (
        <div key={index}>
          <div className="titulo-imagen-letras">
            <img
              key={index}
              src={info.imagenTitulo}
              alt="titulo sobre el evento"
            />
          </div>

          <div className="sobreEvento-fecha-hora-container">
            <div className="sobreEvento-subtitulo">
              <p>fecha y hora</p>
            </div>

            <div key={index} className="sobreEvento-fecha-hora">
              <div className="sobreEvento-fecha">
                <p>{info.dia} </p>
                <p>{info.mes}</p>
              </div>
              <div className="sobreEvento-span">
                <span></span>
              </div>
              <div className="sobreEvento-hora">
                <p>{info.hora}</p>
                <p>{info.turno}</p>
              </div>
            </div>
          </div>

          <div className="informacion-boton-container">
            <div className="sobreEvento-subtitulo">
              <p>{info.textoLugar}</p>
            </div>
            <div className="lugar-titulo">
              <p>{info.textoDireccion}</p>
              <p>{info.textoDistrito} </p>
            </div>

            <div className="boton-container">
              <button>
                <Link
                  target="_blank"
                  to={info.linkUbicacion}
                >
                  {info.textoVermapa}
                </Link>
              </button>
            </div>
          </div>

          <div className="dresscode">
            <div className="titulo-imagen-letras">
              <img
                key={index}
                src={info.imagenTituloDressCode}
                alt="titulo sobre el evento"
              />
            </div>

            <div className="informacion-boton-container">
              <div className="lugar-titulo">
                <p>Etiqueta</p>
              </div>
              <div className="sobreEvento-subtitulo">
                <p>{info.vestimenta} </p>
              </div>

              <div className="boton-container">
                <button>
                  <Link
                    target="_blank"
                    to={info.linkDressCode}
                  >
                    {info.textoVerideas}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SobreEvento;
