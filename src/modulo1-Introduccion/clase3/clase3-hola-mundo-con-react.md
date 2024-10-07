# Clase 3 Del curso completo

## Clase 3 del Módulo 1 Introducción: Hola mundo con React

---

Nos recomiendan usar Stackblitz que es como Visual Studio pero online y viene con los complementos ya instalados.

Pero yo voy a usar Visual Studio


# Primeros pasos

## 1. **Instalar Node.js en Windows**

`npm` es un paquete que viene instalado por defecto con Node.js, así que se usa de una.
`npx` es una herramienta de línea de comandos que viene incluida con `npm`.

## 2. **En la terminal escribir** `npx create-react-app mi-aplicacion`

Asegúrate de cambiar la palabra `mi-aplicacion` por el nombre de tu proyecto.

Su nombre es un acrónimo de **Node Package eXecutor**.
La principal función de `npx` es facilitar la ejecución de paquetes de Node.js sin necesidad de instalarlos globalmente en tu sistema.


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
