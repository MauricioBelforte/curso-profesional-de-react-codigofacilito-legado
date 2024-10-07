
import React from "react";


const SaludoCondicional3Clase9 = ()=>{
    const idioma="es"
    const nombre= 'Condicional 3'
    return (
    <div>
        <h2>{nombre}</h2>
        {
            idioma==="es" && <p>Hola Español</p>
        }
        {
            idioma==="en" && <p>Hello English</p>
        }
    </div>
    )
}


export { SaludoCondicional3Clase9 }

