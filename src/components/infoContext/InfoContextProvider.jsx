import React from "react";
import InfoContext from "./InfoContext";
import imagenEvento from "../../assets/imagenes/NOMBREEVENTO.png";
import imagenProm from "../../assets/imagenes/NOMBREPROM.png";
import imagenTituloSobreEvento from "../../assets/imagenes/EVENTO.png";
import imagenTituloDressCode from "../../assets/imagenes/DRESSCODE.png";
import imagenOnda from "../../assets/imagenes/ONDA.png";
import imagen1 from "../../assets/imagenes/carrusel/imagenAmigos.jpg";
import imagenTituloPlaylist from "../../assets/imagenes/PLAYLIST.png";
import imagenTituloMesas from "../../assets/imagenes/MESA.png";

const InfoContextProvider = ({ children }) => {
  const informacion = [
    {
      seccionHome: [
        {
          imagenEvento: imagenEvento,
          imagenProm: imagenProm,
          fecha: "21.12.24",
        },
      ],

      seccionSobreEvento: [
        {
          imagenTitulo: imagenTituloSobreEvento,
          imagenTituloDressCode: imagenTituloDressCode,
          dia: 21,
          mes: "de Diciembre",
          hora: "7.00",
          turno: "de la noche",
          textoLugar: "lugar",
          textoDireccion: "Insertar direccion del evento",
          textoDistrito: "Distrito del evento",
          textoVermapa: "Ver mapa",
          textoVerideas: "Ver ideas",
          vestimenta: "usar negro, blanco y dorado",
          linkUbicacion: "https://maps.app.goo.gl/KBWfrP3hXLg3M3ty5",
          linkDressCode: "https://maps.app.goo.gl/KBWfrP3hXLg3M3ty5",
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
            {
              imagenCarrusel: imagen1,
            },
            {
              imagenCarrusel: imagen1,
            },
            {
              imagenCarrusel: imagen1,
            },
            {
              imagenCarrusel: imagen1,
            },
            /*  {
                    imagenCarrusel: imagen1,
                },
                {
                    imagenCarrusel: imagen1,
                },
                {
                    imagenCarrusel: imagen1,
                },
                {
                    imagenCarrusel: imagen1,
                },
                {
                    imagenCarrusel: imagen1,
                },
                {
                    imagenCarrusel: imagen1,
                }, */
          ],
        },
      ],

      seccionMesas: [
        {
          imagenTitulo: imagenTituloMesas,
          textoTitulo: "Selecciona tu mesa ideal y regístrate",
          textoBoton: "Regístrate",
          link: "",
          cantidadMesas: 8
        },
      ],

      seccionPlaylist: [
        {
          imagenTitulo: imagenTituloPlaylist,
          textoTitulo:
            "Sube las canciones que más te gusten, para crear juntos una noche inolvidable",
          textoBoton: "Ir al Playlist",
          link: "https://maps.app.goo.gl/KBWfrP3hXLg3M3ty5",
        },
      ],

      footer: [
        {
          texto: "Designed by",
          empresa: "Studiocode",
          link: "",
        },
      ],

      
    },
  ];
  const cantidadMesas = [1,2,3,4,5,6,7,8]

  const infoHomeArray = Object.values(informacion[0].seccionHome);
  const infoSobreEventoArray = Object.values(informacion[0].seccionSobreEvento);
  const infoContadorArray = Object.values(informacion[0].seccionContador);
  const infoCarruselArray = Object.values(informacion[0].seccionCarrusel);
  const infoMesasArray = Object.values(informacion[0].seccionMesas);
  const infoPlaylistArray = Object.values(informacion[0].seccionPlaylist);
  const infoFooterArray = Object.values(informacion[0].footer);
 
  
  /* ANIMACIONES */

  const animacionEntrada = "fade-in";
  const duracionAnimacion1 = "3000";

  /******************  OBTENCION DE INVITADOS DESDE FIREBASE */
 // const invitadosFirebase = collection(db, "invitados");

 /*  getDocs(invitadosFirebase).then((querySnapshot) => {
    if (!querySnapshot.empty) {
      // Si el nombre ya está registrado
      const docRef = querySnapshot.docs[0].ref; //accede al primer documento devuelto en la consulta y devuelve una referencia del documento.
      const existingData = querySnapshot.docs[0].data(); //evuelve los datos del documento en forma de objeto

      if (existingData.respuesta) {
        //Verifica que el invitado ya haya respondido anteriormente
        console.log("Este invitado ya ha respondido anteriormente");
        setInvitadoRegistrado("repetido");
        // Aquí podrías mostrar un mensaje al usuario indicando que ya ha respondido
        return updateDoc(docRef, {
          respuesta: userData.respuesta,
          mensaje: userData.mensaje,
        });
      } else {
        // Actualizar la respuesta del invitado
        console.log("Respuesta actualizada correctamente en Firebase");
        setInvitadoRegistrado("si");
        return updateDoc(docRef, {
          respuesta: userData.respuesta,
          mensaje: userData.mensaje,
        });
      }
    } else {
      // Si el nombre no está registrado
      setInvitadoRegistrado("no");
      console.log(
        "Lo siento, su nombre no se encuentra en la lista de invitados"
      );
      // Aquí podrías mostrar un mensaje al usuario indicando que su nombre no está en la lista
    }
  }); */

  const values = {
    infoHomeArray,
    infoSobreEventoArray,
    infoContadorArray,
    infoCarruselArray,
    infoMesasArray,
    infoPlaylistArray,
    infoFooterArray,
    cantidadMesas
  };

  return (
    <InfoContext.Provider value={values}> {children} </InfoContext.Provider>
  );
};

export default InfoContextProvider;
