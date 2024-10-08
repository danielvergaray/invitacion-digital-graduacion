import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const CuentaRegresivaLogica = () => {
  useEffect(() => {
    Aos.init();
  }, [{ duration: 100 }]);

  const [year] = useState(new Date().getFullYear()); /* nos da el año actual */
  /* se usa [year]  porque solamente nos importa el estado y no la funcion de actualizacion*/
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft()
  ); /* Inicia timeLeft con el valor devuelto por la funcion */

  useEffect(() => {
    /* ejecuta la funcion calculateTimeLeft cada segundo, para calcular el tiempo restante cada seungo que pasa */
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer); /* Desmonta la funcion cada que termina */
  });

  function calculateTimeLeft() {
    let difference =
      +new Date(`12/21/${year}`) -
      +new Date(); /* calcula el tiempo restante entre 2 fechas */
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        /* Math.floor redonde al nro mas cercano */
        días: Math.floor(
          difference / (1000 * 60 * 60 * 24)
        ) /* 1000 milisegundos, 60 segundos, 60 minutos, 24 horas */,
        horas: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutos: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0"
        ),
        segundos: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  }

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    /* bject.keys(timeLeft) obtiene un array con todas las claves (propiedades) del objeto timeLeft */
    if (!timeLeft[interval]) {
      /* verifica si el valor asociado a la clave actual (interval) en el objeto timeLeft es cero o undefined. Si es así, no se hace nada y se pasa a la siguiente iteración del bucle. */
      return;
    }

    timerComponents.push(
      /* almacena los valores obtenidos de timeleft */
      <div className="contador-recuadro" key={interval}>
        <div className="contador-recuadro-numero">
          <div className="contador-recuadro-digito">
            <p>
              {" "}
              {/* se crean etiquetas span */}
              {timeLeft[interval]}{" "}
              {/* interval es days, hours, minutes
        entonces, busca el interval dentro del objeto timeleft y lo muestra */}
            </p>
          </div>

          <div className="contador-recuadro-span">
            <span></span>
          </div>
        </div>

        <div className="contador-texto">
          <p>{interval}</p>
        </div>
      </div>
    );
  });

  return (
    <div
      className="conteo"
      data-aos-easing="linear"
      data-aos="fade-down"
      data-aos-duration="500"
      data-aos-delay="250"
    >
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

export default CuentaRegresivaLogica;
