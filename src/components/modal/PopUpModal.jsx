import { useState, useContext } from "react";
import InfoContext from "../infoContext/InfoContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";

function PopUpModal({ abrirPopUp, espaciosRestantes }) {
  const {
    handleEnviar,
    userData,
    setUserData,
    invitadoRegistrado,
    seccionActual,
    getUserDataName,
    loading,
    setSeccionActual,
    nombreOriginal,
    handleClose,
    verificarInvitado,
    cerrarSesion,
    mensajeSinEspacio,
    setMensajeSinEspacio,
  } = useContext(InfoContext);

  const nombreAcompanianteMinuscula = userData.nombreAcompaniante
    ? userData.nombreAcompaniante.toLowerCase()
    : ""; // Si no existe, se asigna una cadena vacía o puedes manejarlo de otra manera

  const nombreAcompanianteCapitalizado = nombreAcompanianteMinuscula
    ? nombreAcompanianteMinuscula.charAt(0).toUpperCase() +
      nombreAcompanianteMinuscula.slice(1)
    : ""; // Si no hay acompañante, se asigna una cadena vacía

  const userDataResumenPedido = {
    Mesa: userData.mesa,
    Nombre: nombreOriginal,
    Menú: userData.menu,
    "Tiene acompañante": userData.tieneAcompaniante,
    "Nombre del acompañante": nombreAcompanianteCapitalizado,
    "Menú del acompañante": userData.menuAcompaniante,
  };

  const userDataResumenPedidoSinAcompaniante = {
    Mesa: userData.mesa,
    Nombre: nombreOriginal,
    Menú: userData.menu,
    "Tiene acompañante": userData.tieneAcompaniante,
  };

  return (
    <>
      <Modal centered show={abrirPopUp} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="Xcerrar-container">
              <IoIosCloseCircleOutline
                onClick={() => {
                  cerrarSesion();
                  handleClose();
                }}
              />
            </div>
            <>
              {seccionActual === "pantalla1"
                ? "Sigue los pasos para registrarte en esta mesa"
                : seccionActual === "pantalla5"
                ? "Resumen de tu selección"
                : seccionActual === "pantalla6"
                ? "Hola"
                : `Hola ${nombreOriginal}`}
            </>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {seccionActual === "pantalla1" && invitadoRegistrado === "" && (
            <>
              <p>Ingresa tu nombre y apellido</p>

              <form
                className="inputs-container"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="nombre"></label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre y Apellido"
                  value={userData.nombre}
                  onChange={getUserDataName}
                  required
                />
                <div className="boton-container">
                  <button
                    type="submit"
                    disabled={loading}
                    onClick={verificarInvitado}
                  >
                    {loading ? "Enviando..." : "Enviar"}
                  </button>
                </div>
              </form>
            </>
          )}

          {seccionActual === "pantalla1" && invitadoRegistrado === "no" && (
            <form
              className="inputs-container"
              onSubmit={(e) => handleEnviar(e)}
            >
              {invitadoRegistrado === "no" ? (
                <p
                  style={{
                    padding: "0",
                    position: "absolute",
                    top: "80%",
                    left: "7%",
                    transform: "translate(-50%, -50%);",
                  }}
                >
                  Usuario no encontrado, intente nuevamente
                </p>
              ) : null}
            </form>
          )}

          {seccionActual === "pantalla2" && (
            <>
              <p>Escoge tu menú</p>
              <div className="menus-opciones-container">
                <div className="menu-container">
                  <button
                    onClick={() => {
                      setSeccionActual("pantalla3");
                      setUserData({ ...userData, menu: "Lasagna" });
                    }}
                  >
                    <div className="menu-textos">
                      <p>Menú 1</p>
                      <p>
                        Lasagna de carne con salsa bolognesa y salsa bechamel,
                        acompañado de 3 panes al ajo
                      </p>
                    </div>
                    <div className="menu-circulo">
                      <span></span>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setSeccionActual("pantalla3");
                      setUserData({ ...userData, menu: "Asado" });
                    }}
                  >
                    <div className="menu-textos">
                      <p>Menú 2</p>
                      <p>
                        Asado en su jugo con puré de papa amarilla y arroz con
                        alverjas
                      </p>
                    </div>
                    <div className="menu-circulo">
                      <span></span>
                    </div>
                  </button>
                </div>
              </div>
            </>
          )}

          {seccionActual === "pantalla3" && (
            <div className="acompaniantes-seccion">
              <p>¿Vienes con acompañante?</p>

              <div className="acompaniantes-preguntas">
                <div className="pregunta-acompaniante-container">
                  <input
                    type="radio"
                    onClick={() =>
                      espaciosRestantes > 1
                        ? (setSeccionActual("conAcompaniante"),
                          setUserData({
                            ...userData,
                            tieneAcompaniante: "Si",
                          }))
                        : setMensajeSinEspacio(true)
                    }
                  />
                  <p>Sí</p>
                </div>

                <div className="pregunta-acompaniante-container">
                  <input
                    type="radio"
                    onClick={() => {
                      setSeccionActual("pantalla5");
                      setUserData({
                        ...userData,
                        tieneAcompaniante: "No",
                      });
                    }}
                  />
                  <p>No</p>
                </div>
              </div>

              {mensajeSinEspacio && (
                <p>Solamente queda un espacio disponible en la mesa</p>
              )}
            </div>
          )}

          {seccionActual === "conAcompaniante" && (
            <>
              <p>Ingresa el nombre de tu acompañante</p>
              <form
                className="inputs-container "
                onSubmit={(e) => {
                  e.preventDefault();
                  setSeccionActual("pantalla4");
                }}
              >
                <label htmlFor="nombreAcompaniante"></label>

                <input
                  type="text"
                  name="nombreAcompaniante"
                  placeholder="Nombre y Apellido"
                  value={userData.nombreAcompaniante || ""}
                  onChange={getUserDataName}
                />
                <div className="boton-container">
                  <button type="submit" disabled={loading}>
                    {loading ? "Enviando..." : "Enviar"}
                  </button>
                </div>
              </form>
            </>
          )}

          {seccionActual === "pantalla4" && (
            <>
              <p>Escoge el menú de tu acompañante</p>

              <div className="menus-opciones-container">
                <div className="menu-container">
                  <button
                    onClick={() => {
                      setSeccionActual("pantalla5");
                      setUserData({ ...userData, menuAcompaniante: "Lasagna" });
                    }}
                  >
                    <div className="menu-textos">
                      <p>Menú 1</p>
                      <p>
                        Lasagna de carne con salsa bolognesa y salsa bechamel,
                        acompañado de 3 panes al ajo
                      </p>
                    </div>
                    <div className="menu-circulo">
                      <span></span>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setSeccionActual("pantalla5");
                      setUserData({ ...userData, menuAcompaniante: "Asado" });
                    }}
                  >
                    <div className="menu-textos">
                      <p>Menú 2</p>
                      <p>
                        Asado en su jugo con puré de papa amarilla y arroz con
                        alverjas
                      </p>
                    </div>
                    <div className="menu-circulo">
                      <span></span>
                    </div>
                  </button>
                </div>
              </div>
            </>
          )}

          {seccionActual === "pantalla5" && (
            <>
              {userData.tieneAcompaniante === "Si" ? (
                <>
                  {Object.entries(userDataResumenPedido).map(([key, value]) => (
                    <p key={key}>
                      {key}: {value}
                    </p>
                  ))}
                </>
              ) : (
                <>
                  {Object.entries(userDataResumenPedidoSinAcompaniante).map(
                    ([key, value]) => (
                      <p key={key}>
                        {key}: {value}
                      </p>
                    )
                  )}
                </>
              )}

              <div className="boton-container">
                <button
                  variant="primary"
                  onClick={(event) => {
                    handleEnviar(event);
                  }}
                >
                  CONFIRMAR
                </button>
              </div>
            </>
          )}
        </Modal.Body>

        <Modal.Body>
          {seccionActual === "pantalla6" && (
            <p>Datos registrados correctamente</p>
          )}
        </Modal.Body>

        <Modal.Footer>
          <div className="barras-indicadores">
            <span
              className={
                seccionActual === "pantalla1" ? "indicador-actual" : ""
              }
            ></span>
            <span
              className={
                seccionActual === "pantalla2" ? "indicador-actual" : ""
              }
            ></span>
            <span
              className={
                seccionActual === "pantalla3" ||
                seccionActual === "conAcompaniante" ||
                seccionActual === "pantalla4"
                  ? "indicador-actual"
                  : ""
              }
            ></span>
            <span
              className={
                seccionActual === "pantalla5" ? "indicador-actual" : ""
              }
            ></span>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUpModal;
