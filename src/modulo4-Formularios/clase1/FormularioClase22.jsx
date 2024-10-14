
import React from "react";
import { useState } from "react";

// Vamos a crear un componente que modifique el p cuando se escribe en el input
const FormularioClase22 = ()=>{
    const [titulo, setTitulo]= useState("")
    const [body, setBody]= useState("")
    return (
    <div>
        <h1>Clase 22 - Formularios: Leyendo el valor de los controles</h1>
        <form action="">
            <div>
                <label type="text"> Título </label>
                <input type="text" id= "title" onChange={(evento)=> setTitulo (evento.target.value)}/>   
                <p>Capturando el titulo {titulo}</p>
            </div>
            <div>
                <label type="text"> Publicación </label>
                <textarea name="" id="body" onChange={(evento)=> setBody(evento.target.value)}>  </textarea> 
                <p>Capturando el body {body}</p>
            </div>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
    )
}


export { FormularioClase22 }



