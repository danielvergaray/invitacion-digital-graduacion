import React from "react";
import CuentaRegresivaLogica from "../contador/CuentaRegresivaLogica";
import imagenCuentaRegresiva from "../../assets/imagenes/ONDA.png";

const CuentaRegresiva = () => {
  return (
    <div>
      <div className="cuentaRegresiva-imagen">
        <img src={imagenCuentaRegresiva} alt="Imagen cuenta regresiva" />
      </div>

      <div className="cuentaRegresiva-titulo">
        <h1>
          ¡La cuenta atrás <br /> ha comenzado!
        </h1>
        <p>
          Prepárate para una noche mágica llena de baile, risas y recuerdos
          inolvidables
        </p>
      </div>

      <CuentaRegresivaLogica />
    </div>
  );
};

export default CuentaRegresiva;
