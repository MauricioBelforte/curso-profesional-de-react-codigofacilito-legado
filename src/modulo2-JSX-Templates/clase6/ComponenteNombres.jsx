import React from "react";


const nombres = [
    'Mauri',
    'Ema',
    'Eduardo',
    'Juan'

]

function devolverliNombres(){
    const elementosLista = [];
    for (let i = 0; i < nombres.length; i++) {
        elementosLista.push(<li>{nombres[i]}</li>);
        
    }
    return elementosLista
}

const NombresClase10 = ()=>{

    return (

    <div>
        <h2>Ciclos con for</h2>
        <ul>{devolverliNombres()}</ul>
    </div>

    )
}


export { NombresClase10 }