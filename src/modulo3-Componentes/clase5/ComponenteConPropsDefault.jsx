import React from "react";


const SaludarConPropsDefault = ({nombre , idioma})=>{
    const saludo = idioma === 'es' ? 'Hola' : 'Hello'
    return (

    
    <div>
        <h1>{nombre} </h1>
        <h2>{saludo} estoy usando una prop por default </h2>
    </div>

    )
}

SaludarConPropsDefault.defaultProps = {
    nombre : 'Clase 16',
    idioma : 'es'
}


export { SaludarConPropsDefault }
