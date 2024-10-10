import React, { useEffect , useState } from "react";


/* useEffect se ejecuta luego de cada render del componente, se podria decir que se ejecutara luego de cada actualizacion */

const ButtonConUseEffectClase19 = ()=>{
    const [conteoEstado , actualizarConteoEstadoFuncion] = useState(0);
    // Adentro del useEffect() hay que definir una funcion
    // useEffect se ejecuta luego de cada actualizacion del estado conteoEstado
    useEffect(()=>{
        console.log("Me ejecute")
        })
    return (
    <div>

        <h1>1) Clase 19 - Ver con f12 </h1>
        <p>El useEffect se ejecuta luego de cada actualizacion del componente</p>
        <p>Presionando:{conteoEstado}</p>
        <button onClick={()=> actualizarConteoEstadoFuncion(conteoEstado + 1)}> Contador </button>
    </div>
    
    )
}


export { ButtonConUseEffectClase19 }