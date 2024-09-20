import { useState, useContext } from "react";
import InfoContext from "../infoContext/InfoContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
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
            {seccionActual === "pantalla1"
              ? "Hola"
              : `Bienvenido ${nombreOriginal}`}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {seccionActual === "pantalla1" && invitadoRegistrado === "" ? (
            <form
              className="inputs-container"
              onSubmit={(e) => handleEnviar(e)}
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
              <button type="submit" disabled={loading}>
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </form>
          ) : null}

          {/* Pantalla 1: Usuario no encontrado */}
          {seccionActual === "pantalla1" && invitadoRegistrado === "no" ? (
            <form
              className="inputs-container"
              onSubmit={(e) => handleEnviar(e)}
            >
              <p>Usuario no encontrado, intente nuevamente</p>
              <label htmlFor="nombre"></label>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre y Apellido"
                value={userData.nombre}
                onChange={getUserDataName}
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </form>
          ) : null}

          {/* Pantalla 2: Opciones menu invitado */}

          {seccionActual === "pantalla2" && (
            <>
              <p>Escoge tu menu</p>
              <button
                onClick={() => {
                  setSeccionActual("pantalla3");
                  setUserData({ ...userData, menu: "asado" });
                }}
              >
                Asado
              </button>
              <button
                onClick={() => {
                  setSeccionActual("pantalla3");
                  setUserData({ ...userData, menu: "milanesa" });
                }}
              >
                Milanesa
              </button>
            </>
          )}

          {/* Pantalla 3: Confirmar si viene con acompañante */}
          {seccionActual === "pantalla3" && (
            <>
              <p>Vienes con acompañante</p>
              <button
                onClick={() => {
                  setSeccionActual("conAcompaniante");
                  setUserData({
                    ...userData,
                    tieneAcompaniante: "Si",
                  });
                }}
              >
                SI
              </button>
              <button
                onClick={() => {
                  setSeccionActual("pantalla5");
                  setUserData({
                    ...userData,
                    tieneAcompaniante: "No",
                  });
                }}
              >
                NO
              </button>
            </>
          )}

          {seccionActual === "conAcompaniante" && (
            <form
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
                placeholder="Ingrese nombre y apellido"
                value={userData.nombreAcompaniante || ""}
                onChange={getUserDataName}
              />
              <button type="submit" disabled={loading}>
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </form>
          )}

          {/* Pantalla 4: Opciones menu acompañante */}
          {seccionActual === "pantalla4" && (
            <>
              <p>Escoge el menu de tu acompañante</p>
              <button
                onClick={() => {
                  setSeccionActual("pantalla5");
                  setUserData({ ...userData, menuAcompaniante: "asado" });
                }}
              >
                Asado
              </button>
              <button
                onClick={() => {
                  setSeccionActual("pantalla5");
                  setUserData({ ...userData, menuAcompaniante: "milanesa" });
                }}
              >
                Milanesas
              </button>
            </>
          )}

          {/* Pantalla 5: pantalla resumen */}
          {seccionActual === "pantalla5" && (
            /* Convertir el objeto userData en array de arrays */
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

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              setSeccionActual("pantalla1");
              handleClose();
            }}
          >
            Cerrar Sesión
          </Button>
          {seccionActual === "pantalla5" && (
            <Button
              variant="primary"
              onClick={() => {
                setSeccionActual("pantalla1");
                handleClose();
              }}
            >
              ENVIAR PEDIDO
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUpModal;
