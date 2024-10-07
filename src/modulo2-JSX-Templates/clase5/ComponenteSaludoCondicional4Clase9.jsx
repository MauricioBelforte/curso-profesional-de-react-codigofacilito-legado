
import React from "react";


const SaludoCondicional4Clase9 = ()=>{
    const idioma="es"
    const nombre= 'Condicional 4'
    return (
    <div>
        <h1>Clase 9 - Condicionales </h1>
        <h2>{nombre}</h2>
        {
            idioma==="es" ? <p>Hola Español</p>:<p>Hello English</p>
        }
    </div>
    )
}


export { SaludoCondicional4Clase9 }

