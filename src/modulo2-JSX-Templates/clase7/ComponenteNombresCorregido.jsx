import React from "react";


const nombres = [
    'Mauri',
    'Ema',
    'Eduardo',
    'Juan'

]


const NombresClase11 = ()=>{

    return (

    <div>
        <h1>Clase 11 - Listas</h1>
        <h2>Corregido los de la Clase 10</h2>
        <ul>{
            nombres.map( (cadaNombre,index) =>  <li key={index}>{cadaNombre}</li>)
        }</ul>

    </div>

    )
}


export { NombresClase11 }
