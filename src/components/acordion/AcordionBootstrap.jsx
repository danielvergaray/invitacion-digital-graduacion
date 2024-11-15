import React, { useState, useContext, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import {PiArrowCircleDownRightLight, PiArrowCircleUpLeftLight} from "react-icons/pi";
import { FaRegCheckCircle } from "react-icons/fa";
import PopUpModal from "../modal/PopUpModal";
import InfoContext from "../infoContext/InfoContext";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const AcordionBootstrap = ({ textoDisponibles }) => {
  const {
    cantidadMesas,
    abrirPopUp,
    setAbrirPopUp,
    funcionAbrirPopUp,
    setUserData,
  } = useContext(InfoContext);

  const [cardColapsado, setCardColapsado] = useState(
    Array(cantidadMesas.length).fill(false)
  );
  const [asistentesPorMesa, setAsistentesPorMesa] = useState(
    Array(cantidadMesas.length).fill([])
  );
  const [espaciosRestantes, setEspaciosRestantes] = useState(
    Array(cantidadMesas.length).fill(10)
  ); // Máximo 10 asientos por mesa

  const ocultarInfo = (index) => {
    const updatedState = Array(cantidadMesas.length).fill(false);
    updatedState[index] = !cardColapsado[index];
    setCardColapsado(updatedState);
  };

  useEffect(() => {
    const fetchAsistentes = async () => {
      const db = getFirestore();
      const mesasRef = collection(db, "mesas");
      const querySnapshot = await getDocs(mesasRef);

      const asistentes = Array(cantidadMesas.length).fill([]);
      const espacios = Array(cantidadMesas.length).fill(10); // Inicializamos con 10 espacios

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const mesaIndex = parseInt(doc.id.split("_")[1]) - 1; // Suponiendo que los IDs son mesa_1, mesa_2, etc.
        if (data.invitados) {
          asistentes[mesaIndex] = data.invitados;
          espacios[mesaIndex] = 10 - data.invitados.length; // Calculamos espacios restantes
        }
      });

      setAsistentesPorMesa(asistentes);
      setEspaciosRestantes(espacios);
    };

    fetchAsistentes();
  }, [cantidadMesas]);

  return (
    <>
      <Accordion>
        {cantidadMesas.map((mesa, index) => (
          <Accordion.Item eventKey={index} key={index}>
            <Accordion.Header onClick={() => ocultarInfo(index)}>
              <div className="acordion-header">
                <p>Mesa {mesa}</p>
                <p>
                  {textoDisponibles} {espaciosRestantes[index]}
                </p>
              </div>

              <div className="acordion-header-flecha">
                {!cardColapsado[index] ? <PiArrowCircleDownRightLight /> : null}
              </div>
            </Accordion.Header>

            {cardColapsado[index] && (
              <>
                <Accordion.Body className="acordion-expandido-container">
                  <div>
                    {espaciosRestantes[index] === 10 ? (
                      <p style={{ color: "white", margin: "auto" }}>
                        No hay personas registradas
                      </p>
                    ) : (
                      <div className="acordion-expandido-asistentes">
                        <p style={{ color: "white" }}>Personas registradas</p>
                        <div className="acordion-expandido-asistentes-1">
                          {asistentesPorMesa[index].map((nombre, i) => {
                            // Separar el nombre en palabras
                            const nombreSeparado = nombre
                              .split(/(?=[A-Z])/) // Divide el nombre donde hay letras mayúsculas
                              .map(
                                (word) =>
                                  word.charAt(0).toUpperCase() +
                                  word.slice(1).toLowerCase()
                              ) // Capitaliza la primera letra de cada parte y convierte el resto a minúsculas
                              .join(" "); // Une las palabras con un espacio

                            return (
                              <>
                                <div>
                                  <FaRegCheckCircle />
                                  <p key={i}>{nombreSeparado}</p>
                                </div>
                                <span></span>
                              </>
                            ); // Devuelve el nombre separado
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="acordion-expandido-boton">
                    <div className="boton-container">
                      <button
                        onClick={() => {
                          funcionAbrirPopUp();
                          setUserData((prevUserData) => ({
                            ...prevUserData,
                            mesa: mesa,
                          }));
                        }}
                        disabled={espaciosRestantes[index] === 0} // Desactivar si no hay espacios
                        className={
                          espaciosRestantes[index] === 0
                            ? "boton-sin-espacio"
                            : ""
                        }
                      >
                        {espaciosRestantes[index] === 0
                          ? "SIN CUPOS DISPONIBLES"
                          : "REGISTRARSE"}
                      </button>
                    </div>
                  </div>

                  {abrirPopUp ? (
                    <PopUpModal
                      abrirPopUp={abrirPopUp}
                      setAbrirPopUp={setAbrirPopUp}
                      espaciosRestantes={espaciosRestantes[index]}
                    />
                  ) : null}
                </Accordion.Body>

                <div className="accordion-footer">
                  {cardColapsado[index] ? (
                    <Accordion.Header onClick={ocultarInfo}>
                      <div className="acordion-header-flecha">
                        <PiArrowCircleUpLeftLight />
                      </div>
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
