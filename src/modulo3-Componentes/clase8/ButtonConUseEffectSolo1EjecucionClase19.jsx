import React, { useEffect , useState } from "react";


/* Si queremos que useEffect se ejecute solo al inicializar el componente, debemos pasarle un arreglo vacio [] como segundo argumento , luego de la funcion . Es decir useEffect(funcion,array) */

const ButtonConUseEffectSolo1Clase19 = ()=>{
    const [conteoEstado , actualizarConteoEstadoFuncion] = useState(0);
    useEffect(()=>{
        console.log("Me ejecute")
        } , [])  // Si queremos que se ejecute una sola vez solo al iniciar el componente,se agrega un segundo argumento a useEffect(funcion,array) con un array vacio
    return (
    <div>

        <h1>2) Clase 19 - Ciclo de vida de un componente </h1>
        <p>El useEffect se ejecuta solo al iniciar el componente</p>
        <p>Presionando:{conteoEstado}</p>
        <button onClick={()=> actualizarConteoEstadoFuncion(conteoEstado + 1)}> Contador </button>
    </div>
    
    )
}


export { ButtonConUseEffectSolo1Clase19 }