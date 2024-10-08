# Clase 13 Del curso completo

## Clase 2 del Módulo 3: Definiendo componentes

---

Ya venía creando componentes por decisión propia para tener toda la información ordenada.

### Puntos a tener en cuenta:

**Importar React:** Esto se debe a que es necesario para transformar el JSX en JavaScript válido.
```javascript
import React from "react";
```

**Debe tener un return, que devuelve un solo elemento** `<></>` o `<div></div>`.

Yo venía creando componentes funcionales por ejemplo el último del módulo anterior.

```javascript
import React from "react";

const nombres = [
  'Mauri',
  'Ema',
  'Eduardo',
  'Juan'
];

const NombresClase11 = () => {
  return (
    <div>
      <h1>Clase 11 - Listas</h1>
      <h2>Corregido los de la Clase 10</h2>
      <ul>
        {nombres.map((cadaNombre, index) => <li key={index}>{cadaNombre}</li>)}
      </ul>
    </div>
  );
}

export { NombresClase11 };
```

---

Una alternativa es definir componentes con clases de JavaScript.
Debemos heredar componentes, pero para ello hay que importar Component.

```javascript
import React, { Component } from "react";
```

Además, debe tener un método render() que retorne elementos de React. 

En resumen, debe ser una clase que herede de Component, que implementa un método render y que retorna elementos de React en el return.

```javascript
import React, { Component } from "react";

class UnComponenteDeClase extends Component {
  render() {
    return (
      <div>
        <h1>Clase 12 - Componentes </h1>
        <h2>Este es el primer componente de clases del curso</h2>
      </div>
    );
  }
}

export { UnComponenteDeClase };
```

---


