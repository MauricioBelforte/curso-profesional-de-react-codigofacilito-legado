# Clase 20 Del curso completo

## Clase 9 del Módulo 3 Componentes: Eventos

---

### Eventos

Los eventos son acciones que ocurren en la interfaz de usuario, como clics de botones (`onClick`), cambios en campos de texto (`onChange`), movimientos del ratón, etc. Vamos a ver cómo ejecutar una función cuando un evento de la interfaz suceda.

### Diferencias clave con JavaScript vanilla 

- **JavaScript y HTML**: Usas el atributo `onclick` (todo en minúsculas) en el botón directamente dentro de una cadena de texto. Menos similitudes tiene con `addEventListener` para emparejar.

- **React**: Usas `onClick` (notación camelCase) y pasas la función como una referencia, no como una cadena de texto.

### En JavaScript y HTML:

```html
<button onclick="miFuncion()">Hacer clic</button>

<script>
  function miFuncion() {
    alert("¡Hola desde JavaScript!");
  }
</script>
```

### En React:

```javascript
import React from 'react';

function MiComponente() {
  const miFuncion = () => {
    alert("¡Hola desde React!");
  };

  return (
    <button onClick={miFuncion}>Hacer clic</button>
  );
}

export default MiComponente;
```

### onChange

Vemos `onChange` en la clase. Desglosando esta línea:

```html
<input type="text" onChange={() => console.log("Se produjo un evento")} />
```

Esta es la función que se va a ejecutar `() => console.log("Se produjo un evento")` cuando el evento `onChange` suceda sobre este elemento `<input type="text" onChange={() => console.log("Se produjo un evento")} />`.

### Código final de la clase

```javascript
import React from "react";
import { useState } from "react";

// Vamos a crear un componente que modifique el <p> cuando se escribe en el <input>
const SaludoClase20 = () => {
  const [nombre, setNombre] = useState("");
  return (
    <div>
      <h1>Clase 20 - Eventos</h1>
      <input type="text" onChange={(ev) => setNombre(ev.target.value)} />
      <p>Hola {nombre}</p>
    </div>
  );
};

export { SaludoClase20 };
```

### Explicación

- **ev (abreviatura de "event", puede tener cualquier nombre)**:
  Este es el objeto del evento que se pasa automáticamente a la función cuando se activa el evento `onChange`. Contiene información sobre el evento y el elemento que lo disparó.

- **ev.target.value**:
  `ev.target` se refiere al elemento del DOM que disparó el evento, que en este caso es el campo de texto (`input`). `.value` es una propiedad de ese elemento que contiene el texto actualmente ingresado en el campo de texto.

- **setNombre(ev.target.value)**:
  Esta es la función que actualiza el estado `nombre` con el valor del campo de texto.

### Resumen

Cuando escribes en el `input`, el evento `onChange` se dispara, y la función que has definido se ejecuta. En ese momento, el objeto `event` (o como decidas llamarlo) se llena con toda la información relevante sobre el evento que acaba de ocurrir, como el valor del `input` (`event.target.value`).

---
