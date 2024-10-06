# Clase 7 Del curso completo

## Clase 3 del Módulo 2: Mostrar componentes

---

Lo primero que hay que aprender es como montar componentes.
Como mostrarlo dentro de la interfaz está en el render, que se hace una sola vez.

```javascript
import React from 'react'; 
import { render } from 'react-dom';

// Creamos un componente Saludo para dentro de un componente retornar otro
// Se declara la función con nombre en Mayúsculas a diferencia de javascript y en el return se devuelve un solo elemento

const Saludo = () => {
  return <p>Hola</p>;
}

const App = () => {
  return (
    <div>
      <h1>Este es un título 2</h1>
      <Saludo />
    </div>
  );
}

// Debe estar dentro de un div o un <> </> ya que el return debe devolver un solo elemento

// <Saludo /> es una abreviación de <Saludo></Saludo> cuando no queremos colocar nada dentro

render(<App />, document.getElementById('react-app')); 

// <App /> es el componente raíz, y el document.getElementById('react-app') es donde se monta la aplicación
```
