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
            {seccionActual === "pantalla1"
              ? "Hola"
              : `Bienvenido ${nombreOriginal}`}
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
                placeholder="Nombre y Apellido"
                value={userData.nombre}
                onChange={getUserDataName}
                required
              />
              <button
                type="submit"
                disabled={loading}
                onClick={verificarInvitado}
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
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
          )}

          {seccionActual === "pantalla2" && (
            <>
              <p>Escoge tu menu</p>
              <button
                onClick={() => {
                  setSeccionActual("pantalla3");
                  setUserData({ ...userData, menu: "lasagna" });
                }}
              >
                Lasagna
              </button>
              <button
                onClick={() => {
                  setSeccionActual("pantalla3");
                  setUserData({ ...userData, menu: "asado" });
                }}
              >
                Asado
              </button>
            </>
          )}

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
              Cerrar Sesión
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

{
  /* <>
      <Modal show={abrirPopUp} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            {seccionActual === "pantalla1"
              ? "Hola"
              : `Bienvenido ${nombreOriginal}`}
          </Modal.Title>
        </Modal.Header>

        <form className="inputs-container" onSubmit={(e) => e.preventDefault()}>
          {invitadoRegistrado === "" || invitadoRegistrado === "no" ? (
            <Modal.Body>
              <>
                {invitadoRegistrado === "no" && <p>Usuario no encontrado</p>}
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
              </>
            </Modal.Body>
          ) : (
            <>
              <Modal.Body>
                <>
                  <p>Escoge tu menu</p>
                  <button
                    onClick={() => {
                      setUserData({ ...userData, menu: "asado" });
                      setSeccionActual("pantalla3");
                    }}
                  >
                    Asado
                  </button>
                  <button
                    onClick={() => {
                      setUserData({ ...userData, menu: "milanesa" });
                      setSeccionActual("pantalla3");
                    }}
                  >
                    Milanesa
                  </button>
                </>
              </Modal.Body>

              {seccionActual === "pantalla3" ? (
                <Modal.Body>
                  <p>Vienes con acompañante</p>
                  <button
                    onClick={() => {
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
                      setUserData({
                        ...userData,
                        tieneAcompaniante: "No",
                      });
                    }}
                  >
                    NO
                  </button>

                  {userData.tieneAcompaniante === "Si" ? (
                    <>
                      <label htmlFor="nombreInvitado"></label>
                      <input
                        type="text"
                        name="nombreInvitado"
                        placeholder="Nombre y Apellido"
                        value={userData.nombre}
                        onChange={getUserDataName}
                        required
                      />

                      <>
                        <p>Escoge tu menu</p>
                        <button
                          onClick={() => {
                            setUserData({ ...userData, menu: "asado" });
                          }}
                        >
                          Asado
                        </button>
                        <button
                          onClick={() => {
                            setUserData({ ...userData, menu: "milanesa" });
                          }}
                        >
                          Milanesa
                        </button>

                        <p>Escoge el menu de tu acompañante</p>
                        <button
                          onClick={() => {
                            setUserData({ ...userData, menuAcompaniante: "asado" });
                          }}
                        >
                          Asado
                        </button>
                        <button
                          onClick={() => {
                            setUserData({ ...userData, menu: "milanesa" });
                          }}
                        >
                          Milanesa
                        </button>
                      </>
                    </>
                  ) : (
                    <>
                      <p>Escoge tu menu</p>
                      <button
                        onClick={() => {
                          setUserData({ ...userData, menu: "asado" });
                        }}
                      >
                        Asado
                      </button>
                      <button
                        onClick={() => {
                          setUserData({ ...userData, menu: "milanesa" });
                        }}
                      >
                        Milanesa
                      </button>
                    </>
                  )}
                </Modal.Body>
              ) : null}
            </>
          )}
        </form>

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
              onClick={(event) => {
                setSeccionActual("pantalla1");
                handleClose();
                handleEnviar(event);
              }}
            >
              ENVIAR PEDIDO
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </> */
}
