import React, { useContext, useState } from "react";
import InfoContext from "../infoContext/InfoContext";

const SeccionFormulario = () => {
  const {
    handleEnviar,
    userData,
    getUserDataName,
    loading,
    cambiarSeccion,
    invitadoRegistrado,
  } = useContext(InfoContext);

  const [setInvitadoAsistente] = useState("");
  const preguntarPorInvitadoFuncion = (respuesta) => {
    setInvitadoAsistente(respuesta);
  };

  return (
    <>
      {invitadoRegistrado === "" ? (
        <form
          className="inputs-container"
          onSubmit={(event) => handleEnviar(event)}
        >
          <label htmlFor="nombre"></label>
          <input
            type="text"
            name="nombre"
            pattern="^[a-zA-Z ]*$" // Acepta solo letras (mayúsculas y minúsculas) y espacios
            title="Solo se permiten letras (mayúsculas y minúsculas) y espacios"
            placeholder="Nombre y Apellido"
            value={userData.nombre}
            onChange={getUserDataName}
            required
          />

          <button
            onClick={() =>
              invitadoRegistrado === "si"
                ? cambiarSeccion("preguntarPorInvitado")
                : null
            }
            type="submit"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      ) : invitadoRegistrado === "no" ? (
        <form
          className="inputs-container"
          onSubmit={(event) => handleEnviar(event)}
        >
          <p>Usuario no registrado, intente nuevamente</p>
          <label htmlFor="nombre"></label>
          <input
            type="text"
            name="nombre"
            pattern="^[a-zA-Z ]*$" // Acepta solo letras (mayúsculas y minúsculas) y espacios
            title="Solo se permiten letras (mayúsculas y minúsculas) y espacios"
            placeholder="Nombre y Apellido"
            value={userData.nombre}
            onChange={getUserDataName}
            required
          />

          <button
            onClick={() =>
              invitadoRegistrado === "si"
                ? cambiarSeccion("preguntarPorInvitado")
                : null
            }
            type="submit"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      ) : (
        "registrado"
      )}
    </>
  );
};

export default SeccionFormulario;
