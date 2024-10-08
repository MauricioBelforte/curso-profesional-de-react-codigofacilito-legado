
import './App.css';

/* 
import { SaludoClase3 } from './modulo1-Introduccion/clase3/ComponenteSaludoClase3';
import { SaludoClase7 } from './modulo2-JSX-Templates/clase3/SaludoClase7';
import { SaludoClase8 } from './modulo2-JSX-Templates/clase4/ComponenteSaludoClase8';
import { SaludoCondicional1Clase9 } from './modulo2-JSX-Templates/clase5/ComponenteSaludoCondicional1Clase9';
import { SaludoCondicional2Clase9 } from './modulo2-JSX-Templates/clase5/ComponenteSaludoCondicional2Clase9';
import { SaludoCondicional3Clase9 } from './modulo2-JSX-Templates/clase5/ComponenteSaludoCondicional3Clase9';
import { SaludoCondicional4Clase9 } from './modulo2-JSX-Templates/clase5/ComponenteSaludoCondicional4Clase9';
import { NombresClase10 } from './modulo2-JSX-Templates/clase6/ComponenteNombres';
import { Nombres2Clase10 } from './modulo2-JSX-Templates/clase6/ComponenteNombres2'; 
import { NombresClase11 } from './modulo2-JSX-Templates/clase7/ComponenteNombresCorregido';
import { UnComponenteDeClase } from './modulo3-Componentes/clase2/PrimerComponenteConClass';
*/


import { SaludarConProps } from './modulo3-Componentes/clase5/ComponenteConProps';
import { SaludarConPropsDefault } from './modulo3-Componentes/clase5/ComponenteConPropsDefault';
import { SaludarConPropsDefaultVanilla } from './modulo3-Componentes/clase5/ComponenteConPropsDefaultVanilla';
import { SaludarConPropsDesestructuradas } from './modulo3-Componentes/clase5/ComponenteConPropsDesestructuradas';

function App() {

  return (

    <div>
      <SaludarConPropsDefaultVanilla />
      <SaludarConPropsDefault />
      <SaludarConPropsDesestructuradas nombre="Clase 16 - Props en practica"  idioma="es" />
      <SaludarConProps nombre="Clase 16 - Props en practica"  idioma="es"/>
     
     {/*  <UnComponenteDeClase />
      <NombresClase11 /> 
      <Nombres2Clase10 />
      <NombresClase10 />
      <SaludoCondicional4Clase9 />
      <SaludoCondicional3Clase9 />
      <SaludoCondicional2Clase9 />
      <SaludoCondicional1Clase9 />
      <SaludoClase8 />
      <SaludoClase7 />
      <SaludoClase3 />  
      */}


    </div>

  );
}

export default App;
