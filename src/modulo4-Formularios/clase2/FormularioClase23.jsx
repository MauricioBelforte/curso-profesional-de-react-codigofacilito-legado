
import React from "react";
import { useState } from "react";

// Vamos a crear un componente que modifique el p cuando se escribe en el input
const FormularioClase23 = ()=>{
    const [titulo, setTitulo]= useState("")
    const [body, setBody]= useState("")

    const enviarFormulario = (ev)=>{
        ev.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: titulo,
              body: body,
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => {
                // Limpiar los campos del formulario
                setTitulo("");
                setBody("");
                console.log(json);
            });

            
    }

    return (
    <div>
        <h1>Clase 23 - Formularios: Enviando formularios</h1>
        <form onSubmit={(ev)=> enviarFormulario(ev)}>
            <div>
                <label htmlFor="title" type="text"> Título </label>
                <input type="text" value={titulo} id= "title" onChange={(evento)=> setTitulo (evento.target.value)}/>   
                <p>Capturando el titulo {titulo}</p>
            </div>
            <div>
                <label htmlFor="body" type="text"> Publicación </label>
                <textarea name="" value={body} id="body" onChange={(evento)=> setBody(evento.target.value)}>  </textarea> 
                <p>Capturando el body {body}</p>
            </div>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
    )
}


export { FormularioClase23 }



