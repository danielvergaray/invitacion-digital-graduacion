import React, { useContext, useEffect } from "react";
import CuentaRegresivaLogica from "../contador/CuentaRegresivaLogica";
import InfoContext from "../infoContext/InfoContext";
import Aos from "aos";
import "aos/dist/aos.css";

const CuentaRegresiva = () => {
  const { infoContadorArray } = useContext(InfoContext);

  useEffect(() => {
    Aos.init();
  }, [{ duration: 100 }]);

  return (
    <>
      {infoContadorArray.map((info, index) => (
        <div key={index}>
          <div
            className="titulo-imagen-onda"
            data-aos-easing="linear"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="0"
          >
            <img src={info.imagenTitulo} alt="Imagen cuenta regresiva" />
          </div>

          <div
            className="cuentaRegresiva-titulo"
            data-aos-easing="linear"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="250"
          >
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
