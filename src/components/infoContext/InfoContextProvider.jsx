import React, { useState, useEffect } from "react";
import InfoContext from "./InfoContext";
import imagenEvento from "../../assets/imagenes/NOMBREEVENTO.png";
import imagenProm from "../../assets/imagenes/NOMBREPROM.png";
import imagenTituloSobreEvento from "../../assets/imagenes/EVENTO.png";
import imagenTituloDressCode from "../../assets/imagenes/DRESSCODE.png";
import imagenOnda from "../../assets/imagenes/ONDA.png";
import imagen1 from "../../assets/imagenes/carrusel/1.jpg";
import imagen2 from "../../assets/imagenes/carrusel/2.jpg";
import imagen3 from "../../assets/imagenes/carrusel/3.jpg";
import imagen4 from "../../assets/imagenes/carrusel/4.jpg";
import imagen5 from "../../assets/imagenes/carrusel/5.jpg";
import imagen6 from "../../assets/imagenes/carrusel/6.jpg";
import imagen7 from "../../assets/imagenes/carrusel/7.jpg";
import imagen8 from "../../assets/imagenes/carrusel/8.jpg";
import imagen9 from "../../assets/imagenes/carrusel/9.jpg";
import imagen10 from "../../assets/imagenes/carrusel/10.jpg";
import imagenTituloPlaylist from "../../assets/imagenes/PLAYLIST.png";
import imagenTituloMesas from "../../assets/imagenes/MESA.png";
import {
  getFirestore,
  collection,
  query,
  updateDoc,
  getDocs,
  where,
  setDoc,
  doc,
  arrayUnion,
  arrayRemove,
  increment,
  getDoc,
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
            carruselImagenes: [
              { imagenCarrusel: imagen1 },
              { imagenCarrusel: imagen2 },
              { imagenCarrusel: imagen3 },
              { imagenCarrusel: imagen4 },
              { imagenCarrusel: imagen5 },
              { imagenCarrusel: imagen6 },
              { imagenCarrusel: imagen7 },
              { imagenCarrusel: imagen8 },
              { imagenCarrusel: imagen9 },
              { imagenCarrusel: imagen10 },
            ],
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

  // Estados para los datos de mesas y menús
  const [datosMesas, setDatosMesas] = useState([]);
  const [datosMenus, setDatosMenus] = useState({});
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

  const cambiarSeccion = (seccionADirigir) => {
    setSeccionActual(seccionADirigir);
  };

  const [abrirPopUp, setAbrirPopUp] = useState(false);

  const funcionAbrirPopUp = () => {
    setAbrirPopUp(true);
  };

  const handleClose = () => {
    setAbrirPopUp(false);
    /*  setUserData({
      nombre: "",
      mesa: "",
      menu: "",
      tieneAcompaniante: "",
      nombreAcompaniante: "",
      menuAcompaniante: "",
    });
    setNombreOriginal("");
    setInvitadoRegistrado("");
    console.log(invitadoRegistrado);
    console.log(userData);
    console.log(nombreOriginal); */
  };

  const cerrarSesion = () => {
    setAbrirPopUp(false);
    setUserData({
      mesa: "",
      nombre: "",
      menu: "",
      tieneAcompaniante: "",
      nombreAcompaniante: "",
      menuAcompaniante: "",
    });
    setInvitadoRegistrado("");
    console.log(userData);
  };

  const verificarInvitado = () => {
    const db = getFirestore();
    const nombreMinusculas = userData.nombre.toLowerCase().split(" ").join("");

    const invitadosFirebase = collection(db, "invitados");
    const buscarInvitado = query(
      invitadosFirebase,
      where("nombre", "==", nombreMinusculas)
    );

    getDocs(buscarInvitado)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const existingData = querySnapshot.docs[0].data();
          const docRef = querySnapshot.docs[0].ref;

          setNombreOriginal(capitalizeWords(userData.nombre)); // Guarda el nombre original
          setUserData({
            ...userData,
            nombre: existingData.nombre,
            nombreAcompaniante: userData.nombreAcompaniante,
          });
          setInvitadoRegistrado("si");
          cambiarSeccion("pantalla2");
        } else {
          setInvitadoRegistrado("no");
          console.log(
            "Lo siento, su nombre no se encuentra en la lista de invitados"
          );
          return Promise.reject("No se encontró el invitado");
        }
      })
      .then(() => {})
      .catch((error) => {
        console.error("Error al verificar el invitado en Firebase:", error);
      })
      .finally(() => {
        setLoading(false);
        //setInvitadoRegistrado("");
      });

    console.log(userData);
  };

  const handleEnviar = async (event) => {
    event.preventDefault();
    setLoading(true);

    const db = getFirestore();
    const nombreMinusculas = userData.nombre.toLowerCase().split(" ").join("");

    const invitadosFirebase = collection(db, "invitados");
    const buscarInvitado = query(
      invitadosFirebase,
      where("nombre", "==", nombreMinusculas)
    );

    try {
      const querySnapshot = await getDocs(buscarInvitado);
      if (!querySnapshot.empty) {
        const existingData = querySnapshot.docs[0].data();
        const docRef = querySnapshot.docs[0].ref;

        // Primero, actualiza la mesa y el menú de la mesa anterior
        if (existingData.mesa) {
          const previousMesaRef = doc(db, "mesas", `mesa_${existingData.mesa}`);

          // Remover el usuario de la mesa anterior
          await updateDoc(previousMesaRef, {
            invitados: arrayRemove(existingData.nombre),
          });

          // Remover el acompañante de la mesa anterior si tenía uno
          if (
            existingData.tieneAcompaniante &&
            existingData.nombreAcompaniante
          ) {
            await updateDoc(previousMesaRef, {
              invitados: arrayRemove(existingData.nombreAcompaniante),
            });
          }

          // Restar el menú anterior
          await actualizarConteoMenus(existingData.menu, -1);
        }

        // Añadir el nombre a la nueva mesa
        const newMesaRef = doc(db, "mesas", `mesa_${userData.mesa}`);
        const invitadosArray = [userData.nombre]; // Nombre del usuario

         // Verificar si el acompañante tiene un nombre válido
      if (userData.tieneAcompaniante && userData.nombreAcompaniante.trim() !== "") {
        invitadosArray.push(userData.nombreAcompaniante.trim()); // Añadir acompañante solo si no está vacío
      }

        console.log("Invitados a agregar:", invitadosArray); // Verifica los nombres que se intentan agregar

        // Actualizar mesa con ambos nombres
        await updateDoc(newMesaRef, {
          invitados: arrayUnion(...invitadosArray),
        });

        // Actualizar el registro del usuario
        await updateDoc(docRef, {
          mesa: userData.mesa,
          menu: userData.menu,
          tieneAcompaniante: userData.tieneAcompaniante,
          nombreAcompaniante: userData.nombreAcompaniante,
          menuAcompaniante: userData.menuAcompaniante,
        });

        // Actualizar el conteo del menú del acompañante si aplica
        if (userData.tieneAcompaniante && userData.menuAcompaniante) {
          await actualizarConteoMenus(userData.menuAcompaniante, 1);
        }

        // Reiniciar el estado
        setUserData({
          nombre: "",
          mesa: "",
          menu: "",
          tieneAcompaniante: "",
          nombreAcompaniante: "",
          menuAcompaniante: "",
        });
        actualizarMesasYMenus(); // Actualiza las mesas en Firebase
      } else {
        setInvitadoRegistrado("no");
        console.log(
          "Lo siento, su nombre no se encuentra en la lista de invitados"
        );
        return;
      }
    } catch (error) {
      console.error("Error al verificar el invitado en Firebase:", error);
    } finally {
      setLoading(false);
      cambiarSeccion("pantalla6");
      setInvitadoRegistrado("");
    }
  };

  const actualizarMesasYMenus = async () => {
    const db = getFirestore();
    const invitadosCollection = collection(db, "invitados");

    try {
      // Obtener todos los documentos de invitados
      const invitadosSnapshot = await getDocs(invitadosCollection);

      // Inicializar objetos para almacenar la información
      const mesasData = {};
      const menusData = { asado: 0, lasagna: 0 };

      // Recorrer los invitados y organizar la información
      invitadosSnapshot.forEach((doc) => {
        const data = doc.data();
        const {
          mesa,
          menu,
          nombre,
          tieneAcompaniante,
          menuAcompaniante,
          nombreAcompaniante,
        } = data;

        // Actualizar la información de las mesas
        if (mesa) {
          if (!mesasData[mesa]) {
            mesasData[mesa] = []; // Inicializa una nueva mesa
          }
          mesasData[mesa].push(nombre); // Añade el nombre del invitado a la mesa
          mesasData[mesa].push(nombreAcompaniante);
        }

        // Contar los menús seleccionados
        if (menu === "asado") {
          menusData.asado++;
        } else if (menu === "lasagna") {
          menusData.lasagna++;
        }

        // Considerar el acompañante si tiene
        if (tieneAcompaniante && menuAcompaniante) {
          if (menuAcompaniante === "asado") {
            menusData.asado++;
          } else if (menuAcompaniante === "lasagna") {
            menusData.lasagna++;
          }
        }
      });

      // Guardar la información de mesas en la colección "mesas"
      for (const [mesa, invitados] of Object.entries(mesasData)) {
        await setDoc(doc(db, "mesas", `mesa_${mesa}`), { invitados });
      }

      // Guardar la información de menús en la colección "menus"
      await setDoc(doc(db, "menus", "totalMenus"), menusData);

      console.log("Mesas y menús actualizados correctamente.");
    } catch (error) {
      console.error("Error al actualizar mesas y menús:", error);
    }
  };

  const actualizarConteoMenus = async (menu, cantidad) => {
    const db = getFirestore();
    const menuDocRef = doc(db, "menus", "totalMenus");

    try {
      // Actualizar el conteo de menús
      await updateDoc(menuDocRef, {
        [menu]: increment(cantidad), // Sumar o restar según la cantidad
      });
      console.log(`Conteo de ${menu} actualizado correctamente.`);
    } catch (error) {
      console.error("Error al actualizar el conteo de menús:", error);
    }
  };

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
    verificarInvitado,
    cerrarSesion,
  };

  return <InfoContext.Provider value={values}>{children}</InfoContext.Provider>;
};

export default InfoContextProvider;
