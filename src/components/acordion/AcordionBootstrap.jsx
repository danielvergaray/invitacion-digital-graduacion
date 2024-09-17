import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import { PiArrowCircleDownRightLight } from "react-icons/pi";
import { PiArrowCircleUpLeftLight } from "react-icons/pi";

const AcordionBootstrap = ({ titulo, disponibles, textoDisponibles }) => {
  const [cardColapsado, setCardColapsado] = useState(false);

  const ocultarInfo = () => {
    setCardColapsado(!cardColapsado);
  };

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header onClick={ocultarInfo}>
          <div className="acordion-header">
            <p>{titulo} </p>
            {!cardColapsado ? (
              <p>
                {textoDisponibles} {disponibles}{" "}
              </p>
            ) : (
              <br></br>
            )}
          </div>
          {!cardColapsado ? (
            <div className="acordion-header-flecha">
              <PiArrowCircleDownRightLight />
            </div>
          ) : null}
        </Accordion.Header>
        <Accordion.Body className="acordion-expandido-container">
          <div className="acordion-expandido-boton">
            <div className="boton-container">
              <button>
                <Link target="_blank" /* to={info.link} */>
                  {/* {info.textoBoton} */} REGISTRARSE
                </Link>
              </button>
            </div>
          </div>

          <div className="acordion-expandido-asistentes">
            {/* <div className="acordion-expandido-asistentes-1">
              <p>Daniel Vergaray</p>
              <span></span>
              <p>Daniel Vergaray</p>
              <span></span>
              <p>Daniel Vergaray</p>
              <span></span>
              <p>Daniel Vergaray</p>
            </div>
            <div className="acordion-expandido-asistentes-2">
              <p>Daniel Vergaray</p>
              <span></span>
              <p>Daniel Vergaray</p>
              <span></span>
              <p>Daniel Vergaray</p>
              <span></span>
              <p>Daniel Vergaray</p>
            </div> */}

            <div>
              <p>Daniel Vergaray</p>
              <span></span>
            </div>
            <div>
              <p>Daniel Vergaray</p>
              <span></span>
            </div>
            <div>
              <p>Daniel Vergaray</p>
              <span></span>
            </div>
            <div>
              <p>Daniel Vergaray</p>
              <span></span>
            </div>
            <div>
              <p>Daniel Vergaray</p>
              <span></span>
            </div>
            <div>
              <p>Daniel Vergaray</p>
              <span></span>
            </div>
            <div>
              <p>Daniel Vergaray</p>
              <span></span>
            </div>
            <div>
              <p>Daniel Vergaray</p>
            </div>
          </div>
        </Accordion.Body>
        {cardColapsado ? (
          <div className="accordion-footer">
            <Accordion.Header onClick={ocultarInfo}>
              <div className="acordion-header-flecha">
                <PiArrowCircleUpLeftLight />
              </div>
            </Accordion.Header>
          </div>
        ) : null}
      </Accordion.Item>
    </Accordion>
  );
};

export default AcordionBootstrap;
