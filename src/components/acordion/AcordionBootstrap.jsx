import React, { useState, useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import { PiArrowCircleDownRightLight } from "react-icons/pi";
import { PiArrowCircleUpLeftLight } from "react-icons/pi";
import PopUpModal from "../modal/PopUpModal";
import InfoContext from "../infoContext/InfoContext";

const AcordionBootstrap = ({ disponibles, textoDisponibles }) => {
  const { cantidadMesas } = useContext(InfoContext);

  // Cambié el estado para que solo uno se abra a la vez
  const [cardColapsado, setCardColapsado] = useState(
    Array(cantidadMesas.length).fill(false)
  );

  const ocultarInfo = (index) => {
    // Actualiza el estado para que solo el acordeón clicado esté abierto
    const updatedState = Array(cantidadMesas.length).fill(false);
    updatedState[index] = !cardColapsado[index];
    setCardColapsado(updatedState);
  };

  const [abrirPopUp, setAbrirPopUp] = useState(false);

  const funcionAbrirPopUp = () => {
    setAbrirPopUp(true);
  };

  return (
    <>
      <Accordion>
        {cantidadMesas.map((mesa, index) => (
          <Accordion.Item eventKey={index} key={index}>
            <Accordion.Header onClick={() => ocultarInfo(index)}>
              <div className="acordion-header">
                <p>Mesa {mesa} </p>
                <p>
                  {textoDisponibles} {disponibles}
                </p>
              </div>

              {/* Mostrar la flecha correcta dependiendo del estado */}
              <div className="acordion-header-flecha">
                {!cardColapsado[index] ? (
                  <PiArrowCircleDownRightLight /> // Flecha hacia abajo cuando está cerrado
                ) : null}
              </div>
            </Accordion.Header>

            {cardColapsado[index] && (
              <>
                <Accordion.Body className="acordion-expandido-container">
                  <div className="acordion-expandido-asistentes">
                    <div className="acordion-expandido-asistentes-1">
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
                    </div>
                  </div>

                  <div className="acordion-expandido-boton">
                    <div className="boton-container">
                      <button onClick={funcionAbrirPopUp}>
                        <Link>REGISTRARSE</Link>
                      </button>
                    </div>
                  </div>

                  {abrirPopUp ? (
                    <PopUpModal
                      abrirPopUp={abrirPopUp}
                      setAbrirPopUp={setAbrirPopUp}
                    />
                  ) : null}
                </Accordion.Body>

                <div className="accordion-footer">
                  {cardColapsado[index] ? (
                    <Accordion.Header onClick={ocultarInfo}>
                      {cardColapsado[index] ? (
                        <div className="acordion-header-flecha">
                          <PiArrowCircleUpLeftLight />
                        </div>
                      ) : null}
                    </Accordion.Header>
                  ) : null}
                </div>
              </>
            )}
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default AcordionBootstrap;
