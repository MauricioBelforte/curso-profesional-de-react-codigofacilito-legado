# Clase 10 Del curso completo

## Clase 6 del Módulo 2 JSX - Templates: Ciclos

---

Usamos JavaScript convencional para crear varios elementos `li` usando un `for`.
Creamos una función dentro del componente `Nombres` y la usamos.

```javascript
import React from "react";

const nombres = [
  'Mauri',
  'Ema',
  'Eduardo',
  'Juan'
];

function devolverliNombres() {
  const elementosLista = [];
  for (let i = 0; i < nombres.length; i++) {
    elementosLista.push(<li>{nombres[i]}</li>);
  }
  return elementosLista;
}

const NombresClase10 = () => {
  return (
    <div>
      <h1>Clase 10 - Ciclos</h1>
      <ul>{devolverliNombres()}</ul>
    </div>
  );
}

export { NombresClase10 };
```

---

```javascript
import './App.css';
import { NombresClase10 } from './modulo2-JSX-Templates/clase6/ComponenteNombres';

function App() {
  return (
    <div>
      <NombresClase10 />
    </div>
  );
}

export default App;
```

---

Ahora hacemos el `for` con una función `map` de arreglos que aplica lo que está dentro a cada elemento del arreglo.

```javascript
import React from "react";

const nombres = [
  'Mauri',
  'Ema',
  'Eduardo',
  'Juan'
];

const Nombres2Clase10 = () => {
  return (
    <div>
      <h1>Clase 10 - Ciclos</h1>
      <h2>Ciclos con map</h2>
      <ul>
        {nombres.map(cadaNombre => <li>{cadaNombre}</li>)}
      </ul>
    </div>
  );
}

export { Nombres2Clase10 };
```

---

```javascript
import './App.css';
import { NombresClase10 } from './modulo2-JSX-Templates/clase6/ComponenteNombres';
import { Nombres2Clase10 } from './modulo2-JSX-Templates/clase6/ComponenteNombres2';

function App() {
  return (
    <div>
      <Nombres2Clase10 />
      <NombresClase10 />
    </div>
  );
}

export default App;
```

---

