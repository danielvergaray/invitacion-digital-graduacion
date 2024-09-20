import React, { useState } from "react";
import InfoContext from "./InfoContext";
import imagenEvento from "../../assets/imagenes/NOMBREEVENTO.png";
import imagenProm from "../../assets/imagenes/NOMBREPROM.png";
import imagenTituloSobreEvento from "../../assets/imagenes/EVENTO.png";
import imagenTituloDressCode from "../../assets/imagenes/DRESSCODE.png";
import imagenOnda from "../../assets/imagenes/ONDA.png";
import imagen1 from "../../assets/imagenes/carrusel/imagenAmigos.jpg";
import imagenTituloPlaylist from "../../assets/imagenes/PLAYLIST.png";
import imagenTituloMesas from "../../assets/imagenes/MESA.png";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
} from "firebase/firestore";

const InfoContextProvider = ({ children }) => {
  const informacion = [
    {
      seccionHome: [{ imagenEvento, imagenProm, fecha: "21.12.24" }],
      seccionSobreEvento: [
        {
          imagenTitulo: imagenTituloSobreEvento,
          imagenTituloDressCode: imagenTituloDressCode,
          dia: 21,
          mes: "de Diciembre",
          hora: "7.00",
          turno: "de la noche",
          textoLugar: "lugar",
          textoDireccion: "Local Cocos Villa Club",
          textoDistrito: "Chorrillos",
          textoVermapa: "Ver mapa",
          textoVerideas: "Ver ideas",
          vestimenta: "usar negro, blanco y dorado",
          linkUbicacion:
            "https://www.google.com/maps/place/12%C2%B012'36.5%22S+76%C2%B058'40.2%22W/@-12.2101316,-76.9804191,17z/data=!3m1!4b1",
          linkDressCode: "https://pin.it/NpTAelzaf",
        },
      ],
      seccionContador: [
        {
          imagenTitulo: imagenOnda,
          textoTitulo: "¡La cuenta atrás ha comenzado!",
          textoSubtitulo:
            "Prepárate para una noche mágica llena de baile, risas y recuerdos inolvidables",
        },
      ],
      seccionCarrusel: [
        {
          imagenTitulo: imagenOnda,
          textoTitulo:
            "Cada momento guarda la emoción, la complicidad y los recuerdos que quedarán para siempre en nuestros corazones",
          carruselImagenes: Array(4).fill({ imagenCarrusel: imagen1 }),
        },
      ],
      seccionMesas: [
        {
          imagenTitulo: imagenTituloMesas,
          textoTitulo: "Selecciona tu mesa ideal y regístrate",
          cantidadMesas: 8,
        },
      ],
      seccionPlaylist: [
        {
          imagenTitulo: imagenTituloPlaylist,
          textoTitulo:
            "Sube las canciones que más te gusten, para crear juntos una noche inolvidable",
          link: "https://maps.app.goo.gl/KBWfrP3hXLg3M3ty5",
        },
      ],
      footer: [
        {
          texto: "Designed by",
          empresa: "Studiocode",
          link: "www.devdanielvergaray.com",
        },
      ],
    },
  ];

  const cantidadMesas = Array.from({ length: 8 }, (_, i) => i + 1);

  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({ 
    mesa: "",
    nombre: "",
    menu: "",
    tieneAcompaniante: "",
    nombreAcompaniante: "", 
    menuAcompaniante: "",
  });

  
  const [invitadoRegistrado, setInvitadoRegistrado] = useState("");
  const [seccionActual, setSeccionActual] = useState("pantalla1");
  //const [acompanianteNombre, setAcompanianteNombre] = useState("");

  const getUserDataName = (event) => {
    const { name, value } = event.target;
    const sanitizedValue = value
      .replace(/[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g, "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    setUserData({ ...userData, [name]: sanitizedValue });
  };

  const [nombreOriginal, setNombreOriginal] = useState(""); // Nuevo estado para el nombre original

  function capitalizeWords(str) {
    return str
      .split(" ") // Divide la cadena en palabras
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitaliza la primera letra
      .join(" "); // Une las palabras de nuevo en una cadena
  }

  const handleEnviar = async (event) => {
    event.preventDefault();
    setLoading(true);

    const db = getFirestore();
    const nombreMinusculas = userData.nombre.toLowerCase().split(" ").join("");

    try {
      const invitadosFirebase = collection(db, "invitados");
      const buscarInvitado = query(
        invitadosFirebase,
        where("nombre", "==", nombreMinusculas)
      );
      const querySnapshot = await getDocs(buscarInvitado);

      if (!querySnapshot.empty) {
        const existingData = querySnapshot.docs[0].data();
        setNombreOriginal(capitalizeWords(userData.nombre)); // Guarda el nombre original
        setUserData({ ...userData, nombre: existingData.nombre, nombreAcompaniante:userData.nombreAcompaniante });
        setInvitadoRegistrado("si");
        cambiarSeccion("pantalla2");
      } else {
        setInvitadoRegistrado("no");
        console.log(
          "Lo siento, su nombre no se encuentra en la lista de invitados"
        );
      }
    } catch (error) {
      console.error("Error al verificar el invitado en Firebase:", error);
    } finally {
      setLoading(false);
      /* setUserData({ nombre: "" }); */
    }
  };

  const cambiarSeccion = (seccionADirigir) => {
    setSeccionActual(seccionADirigir);
  };

  const [abrirPopUp, setAbrirPopUp] = useState(false);

  const funcionAbrirPopUp = () => {
    setAbrirPopUp(true);
  };

  const handleClose = () => {
    setAbrirPopUp(false);
    setUserData({ nombre: "" });
    setInvitadoRegistrado("");
  };
console.log(userData)
  const values = {
    infoHomeArray: Object.values(informacion[0].seccionHome),
    infoSobreEventoArray: Object.values(informacion[0].seccionSobreEvento),
    infoContadorArray: Object.values(informacion[0].seccionContador),
    infoCarruselArray: Object.values(informacion[0].seccionCarrusel),
    infoMesasArray: Object.values(informacion[0].seccionMesas),
    infoPlaylistArray: Object.values(informacion[0].seccionPlaylist),
    infoFooterArray: Object.values(informacion[0].footer),
    cantidadMesas,
    handleEnviar,
    invitadoRegistrado,
    setInvitadoRegistrado,
    getUserDataName,
    userData,
    setUserData,
    cambiarSeccion,
    seccionActual,
    setSeccionActual,
    //acompanianteNombre,
    //setAcompanianteNombre,
    loading,
    nombreOriginal,
    handleClose,
    abrirPopUp,
    setAbrirPopUp,
    funcionAbrirPopUp,

  };

  return <InfoContext.Provider value={values}>{children}</InfoContext.Provider>;
};

export default InfoContextProvider;
