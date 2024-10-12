# Clase 11 Del curso completo

## Clase 7 del Módulo 2 JSX - Templates: Listas

---

Continuación de la Clase 10 de Ciclos

Si abrimos la consola de Chrome con F12, nos dice que cada hijo de una lista debería tener un prop único de nombre key. Revisa el método render del componente `NombresClase10` y también de `Nombres2Clase10`.

Por lo que debemos agregarle a los `li` un atributo key que los identifique uno de otros elementos de la lista.

Entonces podemos agregar un segundo argumento `index` al método `map` ya que `map` puede recibir 2 argumentos: el primero es el elemento, y el segundo es el índice.

Modificamos entonces ` nombres.map( (cadaNombre,index) =>  <li key={index}>{cadaNombre}</li>)`.

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

El error se debe a que si modificamos este arreglo `nombres`:

```javascript
const nombres = [
  'Pedro',
  'Pepe',
  'Mariano',
  'Federico'
];
```

Si no tiene un identificador para cada uno, no puede actualizar los elementos correctamente, ya que debería reconstruir todo y no solo el componente.
