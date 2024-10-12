# Clase 9 Del curso completo

## Clase 5 del Módulo 2 JSX - Templates: Condiciones

Vamos a ver cómo se pueden poner condiciones. Adentro del return del componente no se puede poner un `if`, porque estamos en una expresión de retorno.

Por lo que crearemos 4 posibilidades:

```javascript
import './App.css';
import { SaludoCondicional1Clase9 } from './modulo2-JSX-Templates/clase5/ComponenteSaludoCondicional1Clase9';
import { SaludoCondicional2Clase9 } from './modulo2-JSX-Templates/clase5/ComponenteSaludoCondicional2Clase9';
import { SaludoCondicional3Clase9 } from './modulo2-JSX-Templates/clase5/ComponenteSaludoCondicional3Clase9';
import { SaludoCondicional4Clase9 } from './modulo2-JSX-Templates/clase5/ComponenteSaludoCondicional4Clase9';

function App() {
  return (
    <div>
      <SaludoCondicional4Clase9 />
      <SaludoCondicional3Clase9 />
      <SaludoCondicional2Clase9 />
      <SaludoCondicional1Clase9 />
    </div>
  );
}
```

### Solución 1: Crear una función con 2 returns

```javascript
import React from "react";

function SaludarEnIdiomas({ idioma }) {
  if (idioma === "es") return <p>Hola Español</p>;
  if (idioma === "en") return <p>Hello English</p>;
}

const SaludoCondicional1Clase9 = () => {
  return (
    <div>
      <h1>Condicional 1</h1>
      <SaludarEnIdiomas idioma="es" />
    </div>
  );
}

export { SaludoCondicional1Clase9 };
```

### Solución 2: Con un condicional en la función

```javascript
import React from "react";

function SaludarEnIdiomas({ idioma }) {
  if (idioma === "es") {
    return <p>Hola Español</p>;
  } else {
    return <p>Hello English</p>;
  }
}

const SaludoCondicional2Clase9 = () => {
  const nombre = "Condicional 2";
  return (
    <div>
      <h1>{nombre}</h1>
      <SaludarEnIdiomas idioma="es" />
    </div>
  );
}

export { SaludoCondicional2Clase9 };
```

### Solución 3: Con operadores booleanos

```javascript
import React from "react";

const SaludoCondicional3Clase9 = () => {
  const idioma = "es";
  const nombre = "Condicional 3";
  return (
    <div>
      <h1>{nombre}</h1>
      {idioma === "es" && <p>Hola Español</p>}
      {idioma === "en" && <p>Hello English</p>}
    </div>
  );
}

export { SaludoCondicional3Clase9 };
```

### Solución 4: Con un operador ternario

```javascript
import React from "react";

const SaludoCondicional4Clase9 = () => {
  const idioma = "es";
  const nombre = "Condicional 4";
  return (
    <div>
      <h1>Este es el último ejercicio de la Clase 9</h1>
      <h1>{nombre}</h1>
      {idioma === "es" ? <p>Hola Español</p> : <p>Hello English</p>}
    </div>
  );
}

export { SaludoCondicional4Clase9 };
```

