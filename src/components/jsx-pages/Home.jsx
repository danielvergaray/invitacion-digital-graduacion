import React, { useContext, useEffect } from "react";
import CuentaRegresiva from "./CuentaRegresiva";
import SobreEvento from "./SobreEvento";
import InfoContext from "../infoContext/InfoContext";
import SeccionCarrusel from "./SeccionCarrusel";
import SeccionPlaylist from "./SeccionPlaylist";
import Footer from "./Footer";
import SeccionMesas from "./SeccionMesas";
import { IoIosArrowDropdown } from "react-icons/io";
import AgregarAsistentes from "../agregarAsistentes/AgregarAsistentes";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const { infoHomeArray } = useContext(InfoContext);

  useEffect(() => {
    Aos.init();
  }, [{ duration: 100 }]);

  return (
    <>
      <div className="section-hero">
        <>
          {infoHomeArray.map((info, index) => (
            <div key={index}>
              <div className="hero-cabecera">
                <div className="imagen-onda-container">
                  <img src={info.imagenOnda2} alt="imagen-onda" />
                </div>

                <div className="hero-cabera-titulo">
                  <p>sor querubina de san pedro</p>
                </div>
                <div className="imagen-onda-container imagen-onda-container-derecha">
                  <img src={info.imagenOnda2} alt="imagen-onda" />
                </div>
              </div>
              <div className="hero-titulo-container">
                <div
                  className="hero-titulo-fecha"
                  data-aos-easing="linear"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="2000"
                >
                  <p>{info.fecha} </p>
                </div>
                <div
                  className="hero-titulo-imagen"
                  data-aos-easing="linear"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                >
                  <img src={info.imagenEvento} alt="" />
                </div>
                <div
                  className="hero-titulo-subtitulo"
                  data-aos-easing="linear"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                >
                  <img src={info.imagenProm} alt="" />
                </div>
              </div>
            </div>
          ))}
        </>
        <div className="hero-flecha-mobile">
          <IoIosArrowDropdown />
        </div>
      </div>

      <div className="section-cuentaRegresiva">
        <CuentaRegresiva />
      </div>

      <div className="section-sobreEvento">
        <SobreEvento />
      </div>
      <div className="section-carrusel">
        <SeccionCarrusel />
      </div>
      <div className="section-mesas">
        <SeccionMesas />
      </div>
      <div className="section-playlist">
        <SeccionPlaylist />
      </div>
      <div className="section-footer">
        <Footer />
      </div>

      {/*  <AgregarAsistentes/> */}
    </>
  );
};

export default Home;
