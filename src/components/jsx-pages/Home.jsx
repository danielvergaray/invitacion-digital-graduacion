import React from "react";
import imagenHero from "../../assets/imagenes/NOMBREEVENTO.png";
import imagenProm from "../../assets/imagenes/NOMBREPROM.png";

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-textos-container">
        <div className="una">
          <p>21.12.24</p>
        </div>
        <div className="dos">
          <img src={imagenHero} alt="" />
        </div>
        <div className="tres">
          <img src={imagenProm} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
