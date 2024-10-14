# Clase 22 Del curso completo

## Módulo 4: Formularios

---

### Clase 1: Leyendo el valor de los controles

Vamos a crear un formulario usando **json placeholder**, una API para crear formularios rápidamente. Lo primero que nos compete es cómo vamos a capturar lo que se está escribiendo en los input del formulario.

En esta clase solo vamos a usar el hook `useState` y el evento `onChange` en los input como en la Clase 20 de Eventos. Luego continuaremos con el proyecto.

Creamos 2 pares de variables con `useState`: Una para el título y otra para la publicación que van a ir sincronizando sus valores con los input, que en este caso de ejemplo los veremos reflejados en unos elementos `p`.

Siempre que queramos hacer una variable que pueda modificarse tiene que ser parte del estado del componente.

```javascript
const [titulo, setTitulo] = useState("");
const [body, setBody] = useState("");
```

Con estado inicial vacío, se van actualizando llamando a los métodos `setTitulo` y `setBody` utilizando los eventos `onChange`.

```javascript
<div>
    <label type="text">Título</label>
    <input type="text" id="title" onChange={(evento) => setTitulo(evento.target.value)} />
    <p>Capturando el título: {titulo}</p>
</div>
<div>
    <label type="text">Publicación</label>
    <textarea id="body" onChange={(evento) => setBody(evento.target.value)}></textarea>
    <p>Capturando el body: {body}</p>
</div>
```

---

### Explicación
- **evento (puede tener cualquier nombre)**: Este es el objeto del evento que se pasa automáticamente a la función cuando se activa el evento `onChange`. Contiene información sobre el evento y el elemento que lo disparó.
- **evento.target.value**: `evento.target` se refiere al elemento del DOM que disparó el evento, que en este caso es el campo de texto (`input`). `.value` es una propiedad de ese elemento que contiene el texto actualmente ingresado en el campo de texto.
- **setTitulo(evento.target.value)**: Esta es la función que actualiza el estado `titulo` con el valor del campo de texto.

---

Esto es lo que hicimos:

```javascript
import React from "react";
import { useState } from "react";

// Vamos a crear un componente que modifique el <p> cuando se escribe en el input
const FormularioClase22 = () => {
    const [titulo, setTitulo] = useState("");
    const [body, setBody] = useState("");
    
    return (
        <div>
            <h1>Clase 22 - Formularios: Leyendo el valor de los controles</h1>
            <form action="">
                <div>
                    <label type="text">Título</label>
                    <input type="text" id="title" onChange={(evento) => setTitulo(evento.target.value)} />
                    <p>Capturando el título: {titulo}</p>
                </div>
                <div>
                    <label type="text">Publicación</label>
                    <textarea id="body" onChange={(evento) => setBody(evento.target.value)}></textarea>
                    <p>Capturando el body: {body}</p>
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export { FormularioClase22 }
```


---

Continuamos en la siguiente clase enviando  el formulario...
