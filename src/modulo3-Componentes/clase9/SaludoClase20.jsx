
import React from "react";
import { useState } from "react";

// Vamos a crear un componente que modifique el p cuando se escribe en el input
const SaludoClase20 = ()=>{
    const [nombre, setNombre]= useState("")
    return (
    <div>
        <h1>Clase 20 - Eventos</h1>
        <input type="text" onChange={(evento)=> setNombre(evento.target.value)}/>
        <p>Hola {nombre}</p>
    </div>
    )
}


export { SaludoClase20 }



