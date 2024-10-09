import React, { useState } from "react";


const ButtonClase18 = ()=>{
    const [conteoEstado , actualizarConteoEstadoFuncion] = useState(0);
   
    return (
    <div>
        <h1>Clase 18 - Ejercicios con el state </h1>
        <p>Presionando:{conteoEstado}</p>
        <button onClick={()=> actualizarConteoEstadoFuncion(conteoEstado + 1)}> Contador </button>
    </div>
    
    )
}


export { ButtonClase18 }