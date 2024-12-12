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
                  {textoDisponibles} {espaciosRestantes[index] >=0 ?  espaciosRestantes[index] : 0} {/* {espaciosRestantes[index]} */} {/* Se modifica ya que hay una mesa que da -1 porque se agregó un invitado de ultima hora y no quiero modificar la logica */}
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
                          /* funcionAbrirPopUp(); */  /* Se oculta la funcion ya que se han cerrado las mesas */
                          setUserData((prevUserData) => ({
                            ...prevUserData,
                            mesa: mesa,
                          }));
                        }}
                        disabled={espaciosRestantes[index] <= 0} // Desactivar si no hay espacios /* Antes habia solamente ===0 pero se ha modificado porque un valro da -1 debido a un invitado agregado a ultima hora */
                        className={
                          espaciosRestantes[index] <= 0 || espaciosRestantes[index] ===2 /* Se agrega la condicion del OR ya que hay una mesa con 2 espacios disponibles */
                            ? "boton-sin-espacio"
                            : ""
                        }
                      >
                        {espaciosRestantes[index] <= 0 || espaciosRestantes[index] ===2  /* Se agrega la condicion del OR ya que hay una mesa con 2 espacios disponibles */
                          ? "MESA CERRADA" /* Se muestra MESA CERRADA ya que la mesa esta cerrada pero antes decia "SIN CUPOS DISPONIBLES" */
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
