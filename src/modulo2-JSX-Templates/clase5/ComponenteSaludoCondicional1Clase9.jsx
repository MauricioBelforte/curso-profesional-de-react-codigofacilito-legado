
import React from "react";


function SaludarEnIdiomas({idioma}) {
    if(idioma==="es") return <p>Hola Español</p>
    
    if(idioma==="en") return <p>Hello English</p>
}


const SaludoCondicional1Clase9 = ()=>{
    
    return (
    <div>
        <h1>Condicional 1</h1>
        <SaludarEnIdiomas idioma="es" />
    </div>
    )
}


export { SaludoCondicional1Clase9 }

