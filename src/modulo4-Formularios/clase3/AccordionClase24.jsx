import React from "react";
import { useState } from "react";
import { FormularioClase24 } from "../clase3/FormularioClase24";


const AccordionClase24 = ()=>{
    const [show,setshow]= useState(false);
    return (
        <div>
            <button onClick={()=>setshow(true)}>
                Mostrar formulario 
            </button>
            {show && <FormularioClase24 showed={show}/>} {/* // Aca es una instruccion javascript , como FormularioClase24 es verdadera si show es verdadera, entonces se ejecuta la instruccion  */}
        </div>
    )


}


export {AccordionClase24}