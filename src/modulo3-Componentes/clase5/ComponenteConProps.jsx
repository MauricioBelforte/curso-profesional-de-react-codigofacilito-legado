import React from "react";


const SaludarConProps = (props)=>{
    const saludo = props.idioma === 'es' ? 'Hola' : 'Hello'
    return (

    
    <div>
        <h1>{props.nombre} </h1>
        <h2>{saludo} estoy usando una prop</h2>
    </div>

    )
}


export { SaludarConProps }
