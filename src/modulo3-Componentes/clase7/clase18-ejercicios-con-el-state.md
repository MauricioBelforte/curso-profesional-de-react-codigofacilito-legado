# Clase 18 Del curso completo

## Clase 7 del Módulo 3: Ejercicios con el State

---

Vamos a crear un componente funcional que realice sumas con un botón.

Necesitamos hacer uso del **estado**.

El estado es lo que se actualiza para que React sepa que se tiene que actualizar la interfaz.

Debemos hacer uso de un **Hook useState**, por lo que hay que importarlo de React.

```javascript
import React, { useState } from "react";
```

Y para usarlo:

```javascript
const [] = useState(0);
```

`useState(0)` retorna un arreglo con 2 datos:
1. La primera es la **variable** que contiene el valor del estado.
2. La segunda es una **función** para actualizar el estado.

Si como argumento pasamos, por ejemplo, el número 1, ese sería el número con el que arranca a contar. Es decir, el estado inicial `useState(acaAdentro)` es la inicialización de la variable izquierda del arreglo.

```javascript
const [conteoEstado, actualizarConteoEstadoFuncion] = useState(0);
```

Internamente, `useState(0)` podría imaginarse algo así, retornando un arreglo con un valor y una función:

```javascript
const [conteoEstado, actualizarConteoEstadoFuncion] = [0, () => {}];
```

---

Quedando así:

```javascript
import React, { useState } from "react";

const ButtonClase18 = () => {
    const [conteoEstado, actualizarConteoEstadoFuncion] = useState(0);

    return (
        <div>
            <h1>Clase 18 - Ejercicios con el state</h1>
            <p>Presionando: {conteoEstado}</p>
            <button onClick={() => actualizarConteoEstadoFuncion(conteoEstado + 1)}>Contador</button>
        </div>
    );
}

export { ButtonClase18 };
```

A la función `actualizarConteoEstadoFuncion` le pasamos como parámetro el estado `conteoEstado` para que la función actualice el estado. Esta función hace dos cosas:
1. Actualiza el estado.
2. Le dice a React que actualice la interfaz.

Si vemos con F12, lo único que se actualiza es el número, ni siquiera el párrafo completo que dice "Presionando: ...".

Por lo que React actualiza lo mínimo indispensable para poder actualizar la interfaz.

---
