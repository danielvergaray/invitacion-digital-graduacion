import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

const AcordionBootstrap = ({ titulo, disponibles, textoDisponibles }) => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <div className="acordion-header">
            <p>{titulo} </p>
            <p>{textoDisponibles} {disponibles} </p>
          </div>
        </Accordion.Header>
        <Accordion.Body className="acordion-expandido-container">
          <div className="acordion-expandido-boton">
            <div className="boton-container">
              <button>
                <Link target="_blank" /* to={info.link} */>
                  {/* {info.textoBoton} */} hola
                </Link>
              </button>
            </div>
          </div>

          <div className="acordion-expandido-asistentes">
            <p>Daniel Vergaray</p>
            <span></span>
            <p>Daniel Vergaray</p>
            <span></span>
            <p>Daniel Vergaray</p>
            <span></span>
            <p>Daniel Vergaray</p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AcordionBootstrap;
