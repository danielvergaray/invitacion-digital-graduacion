import React, { useContext } from "react";
import CuentaRegresiva from "./CuentaRegresiva";
import SobreEvento from "./SobreEvento";
import InfoContext from "../infoContext/infoContext";

const Home = () => {
  const { infoHomeArray } = useContext(InfoContext);
  return (
    <>
      <div className="section-hero">
        {infoHomeArray.map((info, index) => (
          <div key={index}>
            <div className="hero-cabecera">
              <p>sor querubina de san pedro</p>
            </div>
            <div className="hero-titulo-container">
              <div className="una">
                <p>{info.fecha} </p>
              </div>
              <div className="dos">
                <img src={info.imagenEvento} alt="" />
              </div>
              <div className="tres">
                <img src={info.imagenProm} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="section-cuentaRegresiva">
        <CuentaRegresiva />
      </div>

      <div className="section-sobreEvento">
        <SobreEvento />
      </div>
    </>
  );
};

export default Home;
