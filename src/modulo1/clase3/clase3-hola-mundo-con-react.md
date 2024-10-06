# Clase 3 Del curso completo

## Clase 3 del Módulo 1: Hola mundo con React

---

Nos recomiendan usar Stackblitz que es como Visual Studio pero online y viene con los complementos ya instalados

## Ejemplo de crear un componente

### Lo mínimo que necesitamos

```javascript
import React from 'react';
import { render } from 'react-dom';

const App = () => {
    return <h1>Hola mundo</h1>;
};

render(<App />, document.getElementById('react-app'));
```

---

### Según entiendo luego de crear el proyecto con npx

En el archivo **App.js** está el componente App.

#### Archivo App.js:

Aquí defines tu componente principal App.

```javascript
const App = () => {
    return <h1>Hola mundo</h1>;
};
```

En **index.js** están los imports y la utilización del componente App para renderizar.

#### Archivo index.js:

Este archivo es el punto de entrada de tu aplicación y se encarga de renderizar el componente App en el DOM:

```javascript
import React from 'react';
import { render } from 'react-dom';

render(<App />, document.getElementById('react-app'));
```

#### Asegúrate de que el elemento con el id `react-app` exista en tu archivo **index.html**:

```html
<div id="react-app"></div>
```

**Código generado por IA. Revisar y usar cuidadosamente.** 

En la mayoría de los proyectos creados con `create-react-app`, el id por defecto es `root`, así que podrías cambiar `react-app` a `root` para evitar confusiones:

```html
<div id="root"></div>
```
