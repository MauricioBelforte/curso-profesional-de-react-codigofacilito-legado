# Clase 24 Del curso completo

## Módulo 4: Formularios

---

### Clase 3: Manipulando el DOM directamente

La clase de hoy tiene dos propósitos:
1. **Interactuar con el DOM directamente** usando `useRef()`.
2. Empezar a involucrar más componentes, utilizando **buenas prácticas**.

Creamos un componente **Accordion** que va a ocultar y mostrar el formulario, cuando una variable `show` esté en verdadero. Cuando le demos click, `setShow` va a pasar `show` a true:

```javascript
const AccordionClase24 = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>
        Mostrar formulario
      </button>
      {show && <FormularioClase24 />} {/* Instrucción JavaScript: si `show` es verdadera, se muestra `FormularioClase24` */}
    </div>
  );
}
```

En estos escenarios, una vez que se abre el formulario, sería una buena práctica (tanto para **experiencia de usuario** como **accesibilidad**) colocar el foco luego en el formulario. Otro ejemplo podría ser abrir un modal y sería bueno cambiar el foco.

El formulario debe saber si lo están mostrando o no, se lo pasamos en una **prop** al componente si está visible. Por esta razón, vamos a crear otro componente para el formulario **`FormularioClase24`** y no usamos el de la clase anterior:

```html
<FormularioClase24 showed={show} />
```

Usando desestructuración en el formulario, quedando así al comienzo:

```javascript
const FormularioClase24 = ({ showed }) => { ... }
```

Luego de esto, usamos `useEffect()`, para que cada vez que el componente sea actualizado se ejecute el siguiente efecto. Actualizar el DOM es un **efecto secundario**. Le vamos a pedir a `useEffect()` que se ejecute cuando `showed` cambie:

```javascript
useEffect(() => {
  // Actualizar el DOM
  console.log("Cambio cuando showed está visible");
}, [showed]);
```

**IMPORTANTE**: `useEffect` hace lo que está en la función (primer argumento) cuando cambia `showed` (su arreglo en el segundo argumento).

Lo podemos ver con F12, pero tenemos un problema.
Ahora tenemos que ver como hacer para conseguir el foco en el input.

En este momento es que necesitamos de otro **Hook**.

### useRef()
Se utiliza si por alguna razón queremos acceder al **DOM** desde **React**.

Primeramente, lo que queremos hacer es que si se clickea el botón mandamos el foco al primer control. Vamos a hacer unos cambios y por ahora vamos a quitar el `console.log()`. Le decimos con un `if` si se está mostrando (con `showed` true):

```javascript
useEffect(() => {
  if (showed) {
    // Cambiar el foco al primer control
  }
}, [showed]);
```

Ahora cambiamos el foco al primer control que tengamos. Es decir, donde queremos que haga el foco. Para esto es necesario que nosotros tengamos almacenado en alguna variable una referencia a este elemento del DOM:

```html
<input type="text" value={titulo} id="title" onChange={(evento) => setTitulo(evento.target.value)} />
```

Aquí es cuando necesitamos este elemento Hook de React `useRef()`, para manipular el DOM. `useRef()` recibe un objeto del DOM, el primer control. Por lo que los vamos a asociar usando el prop `ref={primerControl}`. Le pasamos la variable donde tiene que guardar la referencia quedando así:

```html
<input type="text" value={titulo} id="title" onChange={(evento) => setTitulo(evento.target.value)} ref={primerControl} />
```

Con la siguiente instruccion manipulamos el input y le pedimos que haga foco ahí: 

```javascript
    primerControl.current.focus(); // Aquí en `primerControl` tenemos el input, y manipulando el DOM le decimos que haga foco

```

Quedando asi:

```javascript
const primerControl = useRef();
useEffect(() => {
  if (showed) {
    console.log(primerControl);
    primerControl.current.focus(); // Aquí en `primerControl` tenemos el input, y manipulando el DOM le decimos que haga foco
  }
}, [showed]);
```

**IMPORTANTE**: `useEffect` hace lo que está en la función (primer argumento) cuando cambia `showed` (segundo argumento).

### Código Completo

```javascript
import React, { useEffect, useState, useRef } from "react";

// Vamos a crear un componente que modifique el p cuando se escribe en el input
const FormularioClase24 = ({ showed }) => {
  const [titulo, setTitulo] = useState("");
  const [body, setBody] = useState("");
  const primerControl = useRef();

  useEffect(() => {
    if (showed) {
      console.log(primerControl);
      primerControl.current.focus(); // Aquí en `primerControl` tenemos el input, y manipulando el DOM le decimos que haga foco
    }
  }, [showed]);

  const enviarFormulario = (ev) => {
    ev.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({ title: titulo, body: body, userId: 1 }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
      .then((response) => response.json())
      .then((json) => {
        setTitulo(""); // Limpiar los campos del formulario
        setBody("");
        console.log(json);
      });
  };

  return (
    <div>
      <h1>Clase 24 - Formularios: Enviando formularios</h1>
      <form onSubmit={(ev) => enviarFormulario(ev)}>
        <div>
          <label htmlFor="title" type="text">Título</label>
          <input type="text" value={titulo} id="title" onChange={(evento) => setTitulo(evento.target.value)} ref={primerControl} />
          <p>Capturando el título {titulo}</p>
        </div>
        <div>
          <label htmlFor="body" type="text">Publicación</label>
          <textarea name="" value={body} id="body" onChange={(evento) => setBody(evento.target.value)}></textarea>
          <p>Capturando el body {body}</p>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export { FormularioClase24 };
```

```javascript
import React, { useState } from "react";
import { FormularioClase24 } from "../clase3/FormularioClase24";

const AccordionClase24 = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>
        Mostrar formulario
      </button>
      {show && <FormularioClase24 showed={show} />} {/* Instrucción JavaScript: si `show` es verdadera, se muestra `FormularioClase24` */}
    </div>
  );
}

export { AccordionClase24 };
```

---
