
import React from "react";


function SaludarEnIdiomas({idioma}) {
    if(idioma==="es"){  
       return <p>Hola Español</p>
    
    }else {
         return <p>Hello English</p>
    }
}


const SaludoCondicional2Clase9 = ()=>{
    const nombre= 'Condicional 2'
    return (
    <div>
        <h2>{nombre}</h2>
        <SaludarEnIdiomas idioma="es" />
    </div>
    )
}


export { SaludoCondicional2Clase9 }

