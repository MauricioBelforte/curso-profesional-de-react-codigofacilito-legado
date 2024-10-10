import React, { useState } from "react";
import { ButtonConUseEffectEnLaEliminacionClase19 } from "./ButtonConUseEffectEnLaEliminacionClase19";

/* Este componente va a llamar al componente ButtonConUseEffectEnLaEliminacionClase19 para mostrarlo o no */

const ButtonEliminarClase19 = ()=>{
    // Le asigno un estado para que se muestre, si mas adelante en el && el estado cambia a false el botton no se muestra
    const [showButton , setShowButton] = useState(true);
   
    return (
    <div>


        <h1>3) Clase 19 - Boton que elimina otro componente </h1>
        <p>Cuando este boton se presiona se elimina el componente ButtonConUseEffectEnLaEliminacionClase19 - Ver con f12</p>
        <button onClick={()=> setShowButton(false)}> Eliminar </button>
        <div>
            {/* Aca para que se muestre el otro componente los 2 tienen que ser verdadero */}
            {showButton && <ButtonConUseEffectEnLaEliminacionClase19 />}
        </div>

    </div>
    
    )
}


export { ButtonEliminarClase19 }