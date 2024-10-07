import React from "react";


const nombres = [
    'Mauri',
    'Ema',
    'Eduardo',
    'Juan'

]


const Nombres2Clase10 = ()=>{

    return (

    <div>
        <h1>Clase 10 - Ciclos</h1>
        <h2>Ciclos con map</h2>
        <ul>{
            nombres.map( cadaNombre =>  <li>{cadaNombre}</li>)
        }</ul>

    </div>

    )
}


export { Nombres2Clase10 }