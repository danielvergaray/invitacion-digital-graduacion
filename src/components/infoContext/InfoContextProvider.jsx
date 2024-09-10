import React from 'react'
import InfoContext from './infoContext'
import imagenEvento from "../../assets/imagenes/NOMBREEVENTO.png";
import imagenProm from "../../assets/imagenes/NOMBREPROM.png";
import imagenTItulo from "../../assets/imagenes/EVENTO.png";
import imagenTItuloDressCode from "../../assets/imagenes/DRESSCODE.png";

const InfoContextProvider = ({ children }) => {

    const informacion = [
        {
            seccionHome: [
                {
                    imagenEvento:imagenEvento,
                    imagenProm: imagenProm,
                    fecha: '21.12.24',
                },
            ],
            
            seccionSobreEvento: [
                {
                    imagenTItulo: imagenTItulo,
                    imagenTItuloDressCode: imagenTItuloDressCode,
                    dia: 21,
                    mes: 'de Diciembre',
                    hora: '7.00',
                    turno: 'de la noche',
                    textoLugar: 'lugar',
                    textoDireccion: 'Insertar direccion del evento',
                    textoDistrito: 'Distrito del evento',
                    textoVermapa: 'Ver mapa',
                    textoVerideas: 'Ver ideas',
                    vestimenta: 'usar negro, blanco y dorado'
                }
            ]
        }
    ]

    const infoHomeArray = Object.values(informacion[0].seccionHome);
    const infoSobreEventoArray = Object.values(informacion[0].seccionSobreEvento);

    const values = {
        infoHomeArray,
        infoSobreEventoArray
    }
    
  return (
    <InfoContext.Provider value={values}> {children} </InfoContext.Provider>
  )
}

export default InfoContextProvider