
# Clase 19 Del curso completo

## Clase 8 del Módulo 3 Componentes: Ciclo de vida de un componente

---

Podemos definir varias etapas de un ciclo de vida de un componente: desde que inicia, cuando se muestra en la interfaz, cuando se actualiza, hasta cuando se elimina de la interfaz, etc.

A veces, vamos a querer realizar una tarea una vez finalizada alguna de las etapas.

Por ejemplo, si creamos un chat, es probable que una vez que se muestre en pantalla queramos que se establezca una conexión con el servidor y cerrar la conexión cuando el componente no esté en la interfaz.

Existen 2 formas para definir tareas en el ciclo de vida, dependiendo si estamos usando componentes funcionales o componentes de clase: vía métodos de la clase o vía hooks.

Como usamos componentes funcionales, vamos a usar hooks para definir funcionalidades en las distintas etapas.

### Métodos en componentes de clase

Se definían en la clase del componente y React mandaba a llamar estos métodos, por ejemplo:

- `componentDidMount()` // Cuando se montaba
- `componentDidUpdate()` // Cuando se actualizaba
- `componentWillUnmount()` // Cuando se desmontaba

Los vemos para tener un conocimiento general.

Con la introducción de los Hooks en React, se buscó unificar todo esto en una sola API.

En React, un componente funcional no debería producir efectos secundarios. Entendiendo efectos secundarios como cualquier afectación fuera del componente.

```javascript
const Button = () => {
    // Si colocamos código aquí, no debería haber efectos secundarios
    return <button>Enviar</button>;
}

export { Button };
```

### Uso del hook useEffect

Para ejecutar las funciones que pueden producir un efecto secundario, existe un hook que se debe importar de React: `useEffect`.

```javascript
import React, { useEffect } from "react";
```

Vamos a ver cómo utilizar este hook para definir funcionalidad en el ciclo de vida de un componente.

La sintaxis es la siguiente:

```javascript
useEffect(() => {
    // Adentro hay que definir una función
});
```
### Ejecutar useEffect en cada actualización del componente 

`useEffect` se ejecuta luego de cada render del componente, se podría decir que se ejecutará luego de cada actualización, y además podría tener efectos secundarios.

```javascript
import React, { useEffect, useState } from "react";

const ButtonConUseEffectClase19 = () => {
    const [conteoEstado, actualizarConteoEstadoFuncion] = useState(0);
    
    // Adentro del useEffect() hay que definir una función
    // useEffect se ejecuta luego de cada actualización del estado conteoEstado
    useEffect(() => {
        console.log("Me ejecuté");
    });

    return (
        <div>
            <h1>Clase 19 - Ciclo de vida de un componente</h1>
            <p>Presionando: {conteoEstado}</p>
            <button onClick={() => actualizarConteoEstadoFuncion(conteoEstado + 1)}>Contador</button>
        </div>
    );
}
```

### Ejecutar useEffect solo al inicializar el componente

Si queremos que `useEffect` se ejecute solo al inicializar el componente, debemos pasarle un arreglo vacío `[]` como segundo argumento, luego de la función. Es decir, `useEffect(función, array)`.

```javascript
import React, { useEffect, useState } from "react";

const ButtonConUseEffectClase19 = () => {
    const [conteoEstado, actualizarConteoEstadoFuncion] = useState(0);

    // Adentro del useEffect() hay que definir una función
    // useEffect se ejecuta luego de cada actualización del estado conteoEstado
    useEffect(() => {
        console.log("Me ejecuté");
    }, []);

    return (
        <div>
            <h1>Clase 19 - Ciclo de vida de un componente</h1>
            <p>Presionando: {conteoEstado}</p>
            <button onClick={() => actualizarConteoEstadoFuncion(conteoEstado + 1)}>Contador</button>
        </div>
    );
}
```

---

### Ejecutar useEffect al inicializar el componente y cuando se lo elimina

Si la función que se pasa como primer argumento a `useEffect` retorna una función, esta se ejecutará cuando el componente vaya a ser eliminado.

Así:

```javascript
useEffect(() => {
  console.log("Me ejecuté, aquí puede haber un poco de código y después hacer el return");
  return () => { console.log("Estoy retornando una función con un console log y que se ejecutará cuando se elimine este componente") } 
}, []);
```

Quedando el código así, con un componente `ButtonEliminarClase19` que elimina el otro componente `ButtonConUseEffectEnLaEliminacionClase19`:

```javascript
import React, { useState } from "react";
import { ButtonConUseEffectEnLaEliminacionClase19 } from "./ButtonConUseEffectEnLaEliminacionClase19";

/* Este componente va a llamar al componente ButtonConUseEffectEnLaEliminacionClase19 para mostrarlo o no */
const ButtonEliminarClase19 = () => {
  // Le asigno un estado para que se muestre, si más adelante en el && el estado cambia a false el botón no se muestra
  const [showButton, setShowButton] = useState(true);

  return (
    <div>
      <h1>3) Clase 19 - Botón que elimina otro componente</h1>
      <p>Cuando este botón se presiona se elimina el componente ButtonConUseEffectEnLaEliminacionClase19 - Ver con F12</p>
      <button onClick={() => setShowButton(false)}>Eliminar</button>
      <div>
        {/* Para que se muestre el otro componente, los 2 tienen que ser verdaderos */}
        {showButton && <ButtonConUseEffectEnLaEliminacionClase19 />}
      </div>
    </div>
  );
}

export { ButtonEliminarClase19 };
```

Que elimina este:

```javascript
import React, { useEffect, useState } from "react";

/* Si la función que se pasa como primer argumento a useEffect retorna una función, esta se ejecutará cuando el componente vaya a ser eliminado */
const ButtonConUseEffectEnLaEliminacionClase19 = () => {
  const [conteoEstado, actualizarConteoEstadoFuncion] = useState(0);

  useEffect(() => {
    console.log("Me ejecuté, aquí puede haber un poco de código y después hacer el return");
    return () => { console.log("Estoy retornando una función con un console log y que se ejecutará cuando se elimine este componente") };
  }, []);  // Si queremos que se ejecute solo una vez al iniciar el componente, se agrega un segundo argumento a useEffect(función, array) con un array vacío

  return (
    <div>
      <h1>Clase 19 - Ciclo de vida de ButtonConUseEffectEnLaEliminacionClase19</h1>
      <p>El useEffect se ejecuta solo al iniciar el componente y se vuelve a ejecutar cuando se elimina</p>
      <p>Presionando: {conteoEstado}</p>
      <button onClick={() => actualizarConteoEstadoFuncion(conteoEstado + 1)}>Contador</button>
    </div>
  );
}

export { ButtonConUseEffectEnLaEliminacionClase19 };
```
