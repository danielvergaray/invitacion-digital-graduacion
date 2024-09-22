import React from 'react'
import { getFirestore, collection, addDoc } from "firebase/firestore";

const AgregarAsistentes = () => {

    const invitados = [
      {
        nombre: "fiorellaacevedo",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "omarallca",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "solangebarrera",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "leslybautista",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "camilabueno",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "adrianacabell",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "adriancampos",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "sophiacardenas",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "nicolettachichizola",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "nicolaschocano",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "cielocollazos",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "sofiacontreras",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "luisacortez",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "boriscotrina",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "dharmadesouza",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "samanthadesouza",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "alejandradiaz",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "sofiadurango",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "alexandrafalconi",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "mateogallegos",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "eduardogarcia",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "adrianogil",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "josegomez",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "mariabelen gonzales",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "gabrielgrandez",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "benjaminhananel",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "lucianaherrada",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "marianahuarcaya",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "danielaiglesias",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "fabianiglesias",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "mariamartinez",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "percymiranda",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "aaronmudarra",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "alejandranarvaez",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "italonavarrete",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "ivananavarrete",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "diananavarro",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "marianugent",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "cieloparedes",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "aldaparedes",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "juanpevez",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "adrianapoma",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "joseriega",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "camilarodriguez",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "valeriasanchez",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "nicolassialer",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "franciscosotero",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "fridasuclupe",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "pablotasayco",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "anatorres",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "brendavalencia",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "dianavalladares",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "aithanavera",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "marianavillavicencio",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "gretelwinkelried",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
      },
      {
        nombre: "jeanyauli",
        mesa: "",
        menu: "",
        tieneAcompaniante: "",
        nombreAcompaniante: "", 
        menuAcompaniante: "",
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
      return <button onClick={addDataToFirebase}>agregar asistentes</button>;
}

export default AgregarAsistentes