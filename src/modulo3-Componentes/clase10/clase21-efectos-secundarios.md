# Clase 21 Del curso completo

## Clase 10 del Módulo 3 Componentes: Efectos Secundarios

---

### Efectos Secundarios

En programación, llamamos efectos secundarios a las modificaciones que alteran el estado de nuestro programa. Vamos a verlo en términos prácticos comparando dos funciones:

```javascript
(x, y) => x + y 

nombre = "";
(value) => nombre = value;
```

Decimos que la primera función no produce efectos secundarios, porque la ejecución de la misma no altera nada fuera del alcance de esta función. Podemos ejecutar esta función cuantas veces queramos, y nada cambiará.

Por otro lado, la segunda función cambia una variable fuera de la ejecución de la función, alterando el estado de la app. Este es un efecto secundario.

Cuando hablamos de React, si el componente ejecuta una operación que altera el estado global de la app, estaríamos produciendo un efecto secundario. En general, un componente debe hacer operaciones que alteren al componente mismo, y no más. Por supuesto que hay muchas excepciones, sin embargo, hay que tener en cuenta que el código que no produce efectos secundarios es menos impredecible y más fácil de depurar.

Algunos ejemplos de efectos secundarios en un componente pueden ser realizar peticiones a un servidor con AJAX, alterar el DOM manualmente, conectarse a una websocket, etc.

En un componente funcional, estas operaciones no se pueden ejecutar, ya que las funciones de un componente no producen efectos secundarios.

Para poder ejecutar operaciones que produzcan efectos secundarios, podemos usar el hook `useEffect`.

Como aprendiste en el vídeo anterior, `useEffect` nos permite enviar una función que se ejecutará luego del render de una función. Esta función puede producir efectos secundarios, de ahí el nombre del hook `useEffect`.

### En términos prácticos, `useEffect` es el lugar perfecto para:

- Ejecutar código como parte del ciclo de vida del componente.
- Hacer peticiones AJAX.
- Actualizar el DOM directamente, por ejemplo, para reproducir un vídeo.
- Logging de cambios.

`useEffect` recibe como segundo argumento después de la primera función un arreglo. En este arreglo puedes pasar variables que se usarán para determinar si el efecto debe ejecutarse o no. En la documentación de React podemos ver un muy buen ejemplo:

```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Solo se ejecuta si count cambió entre un render y otro. IMPORTANTE useEffect hace lo que esta en la funcion (su primer argumento) cuando cambia count (su arreglo que esta en el segundo argumento) 

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

Cuando pasamos un arreglo vacío, `useEffect` solo se ejecutará una vez luego del primer render.

Por último, si una función se retorna del efecto, esta se ejecutará luego del último render una vez que el componente desaparezca de la interfaz.

---

Continuemos.
