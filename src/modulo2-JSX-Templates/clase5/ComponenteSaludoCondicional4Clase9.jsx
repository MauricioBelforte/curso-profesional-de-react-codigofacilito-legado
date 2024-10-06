
import React from "react";


const SaludoCondicional4Clase9 = ()=>{
    const idioma="es"
    const nombre= 'Condicional 4'
    return (
    <div>
        <h1>Este es el último ejercicio de la Clase 9</h1>
        <h1>{nombre}</h1>
        {
            idioma==="es" ? <p>Hola Español</p>:<p>Hello English</p>
        }
    </div>
    )
}


export { SaludoCondicional4Clase9 }

