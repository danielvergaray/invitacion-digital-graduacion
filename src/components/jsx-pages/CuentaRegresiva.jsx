import React, {useContext} from "react";
import CuentaRegresivaLogica from "../contador/CuentaRegresivaLogica";
import InfoContext from "../infoContext/InfoContext";

const CuentaRegresiva = () => {
  const { infoContadorArray } = useContext(InfoContext);

  return (
    <>
      {infoContadorArray.map((info, index) => (
        <div key={index}>
          <div className="titulo-imagen-onda">
            <img src={info.imagenTitulo} alt="Imagen cuenta regresiva" />
          </div>

          <div className="cuentaRegresiva-titulo">
            <h1> {info.textoTitulo} </h1>
            <p>{info.textoSubtitulo}</p>
          </div>
        </div>
      ))}

      <CuentaRegresivaLogica />
    </>
  );
};

export default CuentaRegresiva;
