import { useState, useContext } from "react";
import InfoContext from "../infoContext/InfoContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";

function PopUpModal({ abrirPopUp, setAbrirPopUp, mesa }) {
  const {
    handleEnviar,
    userData,
    setUserData,
    invitadoRegistrado,
    //setInvitadoRegistrado,
    seccionActual,
    getUserDataName,
    loading,
    setSeccionActual,
    /* acompanianteNombre,
    setAcompanianteNombre, */
    nombreOriginal,
    handleClose,
    verificarInvitado,
    cerrarSesion,
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
      <Modal show={abrirPopUp} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="Xcerrar-container">
              <IoIosCloseCircleOutline onClick={handleClose} />
            </div>
            <>
              {seccionActual === "pantalla1"
                ? "Hola"
                : `Hola ${nombreOriginal}`}
            </>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {seccionActual === "pantalla1" && invitadoRegistrado === "" && (
            <form
              className="inputs-container"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="nombre"></label>
              <input
                type="text"
                name="nombre"
                placeholder="Ingrese Nombre y Apellido"
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
          )}

          {seccionActual === "pantalla1" && invitadoRegistrado === "no" && (
            <form
              className="inputs-container"
              onSubmit={(e) => handleEnviar(e)}
            >
              {invitadoRegistrado === "no" ? (
                <p>Usuario no encontrado, intente nuevamente</p>
              ) : null}
            </form>
          )}

          {seccionActual === "pantalla2" && (
            <>
              <p>Escoge tu menu</p>
              <div className="menus-opciones-container">
                {/* <button
                  onClick={() => {
                    setSeccionActual("pantalla3");
                    setUserData({ ...userData, menu: "lasagna" });
                  }}
                >
                  <p>Menú 1</p>
                  <p>
                    Lasagna de carne con salsa bolognesa y salsa bechamel,
                    acompañado de 3 panes al ajoa
                  </p>
                </button> */}

                <div className="menu1-container">
                  <div className="menu1-textos">
                    <p>Menú 1</p>
                    <p>
                      Lasagna de carne con salsa bolognesa y salsa bechamel,
                      acompañado de 3 panes al ajo
                    </p>
                  </div>
                  <input
                    type="radio"
                    onClick={() => {
                      setSeccionActual("pantalla3");
                      setUserData({ ...userData, menu: "lasagna" });
                    }}
                  />
                </div>

                <div className="menu2-container">
                  <div className="menu1-textos">
                    <p>Menú 2</p>
                    <p>
                      Asado en su jugo con pure de papa amarilla y arroz con
                      alverjas
                    </p>
                  </div>
                  <input
                    type="radio"
                    onClick={() => {
                      setSeccionActual("pantalla3");
                      setUserData({ ...userData, menu: "asado" });
                    }}
                  />
                </div>

                {/*  <button
                  onClick={() => {
                    setSeccionActual("pantalla3");
                    setUserData({ ...userData, menu: "asado" });
                  }}
                >
                  Asado
                </button> */}
              </div>
            </>
          )}

          {seccionActual === "pantalla3" && (
            <div className="acompaniantes-seccion">
              <p>¿Vienes con acompañante?</p>
              {/* <button
                onClick={() => {
                  setSeccionActual("conAcompaniante");
                  setUserData({
                    ...userData,
                    tieneAcompaniante: "Si",
                  });
                }}
              >
                SI
              </button> */}

              <div className="acompaniantes-preguntas">
                <div className="pregunta-acompaniante-container">
                  <input
                    type="radio"
                    onClick={() => {
                      setSeccionActual("conAcompaniante");
                      setUserData({
                        ...userData,
                        tieneAcompaniante: "Si",
                      });
                    }}
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

              {/* <button
                onClick={() => {
                  setSeccionActual("pantalla5");
                  setUserData({
                    ...userData,
                    tieneAcompaniante: "No",
                  });
                }}
              >
                NO
              </button> */}
            </div>
          )}

          {seccionActual === "conAcompaniante" && (
            <form className="inputs-container"
              onSubmit={(e) => {
                e.preventDefault();
                setSeccionActual("pantalla4");
              }}
            >
              <label htmlFor="nombreAcompaniante"></label>
              <p>Ingresa el nombre de tu acompañante</p>
              <input
                type="text"
                name="nombreAcompaniante"
                placeholder="Ingrese Nombre y Apellido"
                value={userData.nombreAcompaniante || ""}
                onChange={getUserDataName}
              />
              <div className="boton-container">
                <button
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Enviando..." : "Enviar"}
                </button>
              </div>
            </form>
          )}

          {seccionActual === "pantalla4" && (
            <>
              <p>Escoge el menu de tu acompañante</p>
              <button
                onClick={() => {
                  setSeccionActual("pantalla5");
                  setUserData({ ...userData, menuAcompaniante: "lasagna" });
                }}
              >
                Lasagna
              </button>
              <button
                onClick={() => {
                  setSeccionActual("pantalla5");
                  setUserData({ ...userData, menuAcompaniante: "asado" });
                }}
              >
                Asado
              </button>
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
            </>
          )}
        </Modal.Body>

        <Modal.Body>
          {seccionActual === "pantalla6" && (
            <p>Datos registrados correctamente</p>
          )}
        </Modal.Body>

        <Modal.Footer>
          {seccionActual !== "pantalla6" && (
            <Button
              variant="primary"
              onClick={() => {
                setSeccionActual("pantalla1");
                cerrarSesion();
              }}
            >
              Empezar de nuevo
            </Button>
          )}

          {seccionActual === "pantalla5" && (
            <Button
              variant="primary"
              onClick={(event) => {
                handleEnviar(event);
                //handleClose();
              }}
            >
              ENVIAR PEDIDO
            </Button>
          )}

          {seccionActual === "pantalla6" && (
            <Button
              variant="primary"
              onClick={() => {
                setSeccionActual("pantalla1");
                cerrarSesion();
              }}
            >
              Cerrar
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUpModal;
