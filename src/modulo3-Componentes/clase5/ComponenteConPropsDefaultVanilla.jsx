import React from "react";


const SaludarConPropsDefaultVanilla = ({nombre = 'Clase 16' , idioma = 'es'})=>{
    const saludo = idioma === 'es' ? 'Hola' : 'Hello'
    return (

    
    <div>
        <h1>{nombre} </h1>
        <h2>{saludo} estoy usando una prop por default vanilla usando js EMC6</h2>
    </div>

    )
}




export { SaludarConPropsDefaultVanilla }
