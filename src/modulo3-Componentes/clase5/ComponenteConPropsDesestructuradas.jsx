import React from "react";


const SaludarConPropsDesestructuradas = ({nombre , idioma})=>{
    const saludo = idioma === 'es' ? 'Hola' : 'Hello'
    return (

    
    <div>
        <h1>{nombre} </h1>
        <h2>{saludo} estoy usando una prop desestructurada </h2>
    </div>

    )
}


export { SaludarConPropsDesestructuradas }
