import React, { useContext, useEffect } from "react";
import CuentaRegresiva from "./CuentaRegresiva";
import SobreEvento from "./SobreEvento";
import InfoContext from "../infoContext/InfoContext";
import SeccionCarrusel from "./SeccionCarrusel";
import SeccionPlaylist from "./SeccionPlaylist";
import Footer from "./Footer";
import SeccionMesas from "./SeccionMesas";
import { GiSmartphone } from "react-icons/gi";
import { IoIosArrowDropdown } from "react-icons/io";
import AgregarAsistentes from "../agregarAsistentes/AgregarAsistentes";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const { infoHomeArray } = useContext(InfoContext);

  useEffect(() => {
    Aos.init();
  }, [{ duration: 500 }]);

  return (
    <>
      <section className="desktop-version">
        <div className="desktop-info">
          <GiSmartphone />
          <div>
            <p>¡Hola! Este sitio está optimizado sólo para sitios móviles.</p>
            <p>Visítanos desde tu télefono para una mejor experiencia.</p>
          </div>
        </div>
      </section>
      <section className="mobile-version">
        <div className="section-hero">
          <>
            {infoHomeArray.map((info, index) => (
              <>
                <div key={index}>
                  <div className="hero-titulo-container">
                    <div
                      className="hero-titulo-fecha"
                      data-aos-easing="linear"
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="2100"
                    >
                      <p>{info.fecha} </p>
                    </div>
                    <div
                      className="hero-titulo-imagen"
                      data-aos-easing="linear"
                      data-aos="fade-in"
                      data-aos-duration="1500"
                      data-aos-delay="100"
                    >
                      <img src={info.imagenEvento} alt="imagen prom" />
                    </div>

                    
                    <div className="hero-titulo-subtitulo"
                      data-aos-easing="linear"
                      data-aos="fade-in"
                      data-aos-duration="500"
                      data-aos-delay="1000"
                      data-aos-offset="0"
                    >
                      <img src={info.imagenProm} alt="" />
                    </div>

                    <div
                      className="hero-cabecera"
                      /* data-aos-easing="linear"
                      data-aos="fade-in"
                      data-aos-duration="500"
                      data-aos-offset="0"
                      data-aos-delay="1600" */
                    >
                      <div className="imagen-onda-container">
                        <img src={info.imagenOnda2} alt="imagen-onda" />
                      </div>

                      <div className="hero-cabera-titulo">
                        <p>sor querubina</p>
                        <p>de san pedro</p>
                      </div>
                      <div className="imagen-onda-container-derecha">
                        <img src={info.imagenOnda2} alt="imagen-onda" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
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
      </section>
    </>
  );
};

export default Home;
