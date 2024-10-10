import React, { useEffect , useState } from "react";

/* Si la funcion que se pasa como primer argumento a useEffect retorna una funcion, esta se ejecutara cuando el componente vaya a ser eliminado */

const ButtonConUseEffectEnLaEliminacionClase19 = ()=>{
    const [conteoEstado , actualizarConteoEstadoFuncion] = useState(0);
    useEffect(()=>{
        console.log("Me ejecute, aca puede haber un poco de codigo y despues hacer el return");
        return ()=>{console.log("Aca estoy retornando una funcion con un console log y que se ejecutara cuando se elimine este componente")} 
        } , [])  // Si queremos que se ejecute una sola vez solo al iniciar el componente,se agrega un segundo argumento a useEffect(funcion,array) con un array vacio
    return (
    <div>

        <h1>Clase 19 - Ciclo de vida de ButtonConUseEffectEnLaEliminacionClase19 </h1>
        <p>El useEffect se ejecuta solo al iniciar el componente y se vuelve a ejecutar cuando se elimina </p>
        <p>Presionando:{conteoEstado}</p>
        <button onClick={()=> actualizarConteoEstadoFuncion(conteoEstado + 1)}> Contador </button>
    </div>
    
    )
}


export { ButtonConUseEffectEnLaEliminacionClase19 }