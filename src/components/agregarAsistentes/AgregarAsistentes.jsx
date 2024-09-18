import React from 'react'
import { getFirestore, collection, addDoc } from "firebase/firestore";

const AgregarAsistentes = () => {

    const invitados = [
        {
          mesa: "mesa 1",
          asistentes: [
            {nombre: "daniel"},
            {nombre: "daniel"},
            {nombre: "daniel"},
            {nombre: "daniel"},
            {nombre: "daniel"},
            {nombre: "daniel"},
            {nombre: "daniel"},
            {nombre: "daniel"},
          ]
        },
        
      ];

      const addDataToFirebase = () => {
        const db = getFirestore();
    
        const collectionRef = collection(db, "invitados");
    
        for (let item of invitados) {
          addDoc(collectionRef, item)
            .then((res) => console.log(res.id))
            .catch((err) => console.log(err));
        }
    
        /* ASI SE HA CREADO LOS PRODUCTOS EN LA BASE DE DATOS */
      };
     /*  return <button onClick={addDataToFirebase}>agregar asistentes</button>; */
}

export default AgregarAsistentes