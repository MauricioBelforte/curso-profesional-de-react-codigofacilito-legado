
import React from "react";


const SaludoClase8 = ()=>{
    const unTexto = 'Esta parte debe ir entre  {} dos veces ya que para entender los backtikcs tiene que entender js';
    const otroTexto = 'Pero entre {} lo entiende sin usar ${}'
    return (
    <div>
        <h1>Este es un título de la Clase {3 + 5} {`${unTexto}`}</h1>
        <p>Hola Mundo Clase 8 {otroTexto}</p>
    </div>
    )
}


export { SaludoClase8 }



