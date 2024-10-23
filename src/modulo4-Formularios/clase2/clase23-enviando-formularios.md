# Clase 23 Del curso completo

## Módulo 4: Formularios

---

### Clase 2: Enviando formularios

Vamos a ver el Evento `onSubmit={}`

Lo primero que debemos tener en cuenta, es no romper con React lo que se podía hacer con HTML. Por ejemplo, para enviar un formulario se debe usar un `input` de tipo submit:

```html
<input type="submit" value="Enviar"/>
```

O usando un `button` también de tipo submit:

```html
<button type="submit">Enviar</button>
```

Y no se debe usar un `onClick` en el `button`!

Vamos a colocar un `onSubmit={}` en el `form`.

En HTML para asociar un `label` a un `input` se usa `for` en el `label` e `id` en el `input`:

```html
<label for="title" type="text">Título</label>
<input type="text" id="title"/>
```

En React se usa en el `label` `htmlFor`, para diferenciarlo del `for` de los ciclos ya que es JSX:

```html
<label htmlFor="title" type="text">Título</label>
<input type="text" id="title" onChange={(evento) => setTitulo(evento.target.value)}/>
```







# Uso de la API de JSONPlaceholder para Enviar Formularios

Vamos a usar la documentación de la API de JSONPlaceholder para enviar el formulario desde la siguiente página: [https://jsonplaceholder.typicode.com/guide](https://jsonplaceholder.typicode.com/guide).

`fetch` es una función en JavaScript que permite hacer solicitudes HTTP para obtener o enviar datos a un servidor. Es como un mensajero entre tu aplicación y el servidor.
antes y despues

### ¿Qué Hace Cada Parte?
1. **URL**: `'https://jsonplaceholder.typicode.com/posts'`
   - Esta es la URL del endpoint de JSONPlaceholder donde envías la solicitud.

2. **method**: `'POST'`
   - Especifica que esta es una solicitud POST, utilizada para enviar datos al servidor.

3. **body**: `JSON.stringify({ ... })`
   - Convierte un objeto JavaScript en una cadena JSON. Aquí estamos enviando un **objeto** con `title`, `body` y `userId`.
   ```javascript
   { 
    title: 'foo',
    body: 'bar',
    userId: 1,
   }
   ```
   - Son datos de ejemplo que se van a cargar en la petición POST.

Luego de esto JSON.stringify({ ... })

# Objeto Recibido por el Servidor (JSON enviado en el fetch)
```json
{
  "title": "foo",
  "body": "bar",
  "userId": 1
}
```

4. **headers**:
   - `Content-type: 'application/json; charset=UTF-8'` especifica que el contenido que se está enviando es JSON.

5. **.then((response) => response.json())**   
   - Convierte la respuesta del servidor en un objeto JavaScript ( response.json() le pide el objeto JSON a la respuesta y lo transforma en objeto Javascript ).
   - **then**: Es un método que se usa con promesas en JavaScript. Permite ejecutar código una vez que la promesa se haya resuelto (es decir, una vez que se haya completado una operación asincrónica como `fetch`).
   - **(response) => response.json()**: Esto es una función de flecha que toma la respuesta de la solicitud `fetch` y la convierte en un objeto JavaScript. La respuesta original es un objeto `Response` que contiene métodos y propiedades sobre la respuesta HTTP. `.json()` es un método de este objeto que lee el cuerpo de la respuesta y la convierte en un objeto JavaScript.


### Proceso Paso a Paso

1. **Obtención de la Respuesta del Servidor**:
    - Cuando usas `fetch`, envías una solicitud HTTP al servidor y recibes una respuesta.
    - Esta respuesta es un objeto `Response` que contiene la información sobre la respuesta HTTP, como el estado de la solicitud, los encabezados y el cuerpo.

2. **Conversión de JSON**:
    - Usas `.then((response) => response.json())` para procesar la respuesta.
    - Aquí, `response.json()` toma el cuerpo de la respuesta (que es una cadena JSON) y lo convierte en un objeto JavaScript.
    - **Importante**: `response.json()` no solo lee la respuesta, sino que también la convierte en un objeto JavaScript que luego puede ser manejado en tu código.

### Ejemplo con Explicaciones

```javascript
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({ title: titulo, body: body, userId: 1 }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())  // (1) Aquí se obtiene la respuesta, (2) se le pide el JSON y (3) se convierte a Objeto JavaScript
  .then((responseData) => console.log(responseData));  // Ahora 'responseData' es un Objeto JavaScript
```

### Resumen

- **Obtención de Respuesta**: `fetch` obtiene un objeto `Response` del servidor.
- **Conversión de JSON**: `response.json()` lee la respuesta y la convierte en un objeto JavaScript.
- **Objeto JavaScript**: El JSON convertido es ahora un objeto JavaScript, listo para ser usado.




   # Respuesta del Servidor (JSON después del fetch)
```json
{
  "id": 101,
  "title": "foo",
  "body": "bar",
  "userId": 1
}
```

6. **.then((json) => console.log(json))**
   - Maneja los datos recibidos del servidor y los imprime en la consola (Esto en si esta mal, ya que ya no se esta usando un objeto json sino un objeto javascript, por eso en consola se puede ver un objeto de tipo Obect y no un json).
   - **then**: Similar al anterior, este `then` se ejecuta después de que la promesa anterior se haya resuelto. Aquí, se está trabajando con los datos JSON (que ya fueron transformados en objetos javascript) que se obtuvieron de la promesa anterior.
   - **(json) => console.log(json)**: Esta es otra función de flecha que toma el objeto JSON resultante (mal llamado json ya es un objeto javascript) y lo imprime en la consola del navegador. `console.log(json)` es una manera de visualizar el contenido de los datos que recibiste del servidor.

### En resumen:
1. Primero `fetch` hace una solicitud HTTP: En este caso, es una solicitud POST.
2. La primera promesa (`then`) convierte la respuesta en JSON: Así puedes trabajar con los datos en formato JavaScript.
3. La segunda promesa (`then`) maneja esos datos: Aquí, simplemente los estamos imprimiendo en la consola.


### Nombres Arbitrarios en Funciones de Flecha

Los nombres que elijas para las variables en las funciones de flecha son arbitrarios y están ahí solo para referirse a los datos que estás manejando. Lo importante es que el primer `then` maneja la respuesta de la solicitud HTTP y el segundo `then` maneja los datos convertidos en un objeto JavaScript.

## Personalemente me gusta mas llamarlo data que json, ya que es un Object con datos

#### Ejemplo Alternativo:
```javascript
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((res) => res.json())   // Aquí "res" podría ser cualquier nombre
  .then((data) => console.log(data)); // Aquí "data" podría ser cualquier nombre
```


#### Cuando usas fetch, devuelve una promesa que resuelve en un objeto Response. Luego, puedes encadenar .then para acceder y manejar ese objeto.


### Paso a Paso
1. **Primera promesa `fetch`**: Devuelve un objeto `Response` que contiene la respuesta HTTP completa.
2. **Primera llamada a `.then((res) => res.json())`**: Convierte el objeto `Response` en JSON, devolviendo una nueva promesa que resuelve en un objeto JavaScript.
3. **Segunda llamada a `.then((data) => console.log(data))`**: Maneja el objeto JavaScript resultante y lo imprime en la consola.


### Cambio del Estado en la Petición `fetch`

Vamos a cambiar el `title: 'foo'` por la variable `titulo` del estado de nuestro componente y también `body: 'bar'` por la variable `body` del estado de nuestro componente, quedando así:

```javascript
const enviarFormulario = () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: titulo,
      body: body,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};
```

### Detener el Comportamiento Predeterminado con `event.preventDefault()`
Se usa en JavaScript para detener el comportamiento predeterminado de un evento. Por ejemplo, en un formulario, evita que la página se recargue cuando el formulario se envía. Quedando así:

```javascript
import React from "react";
import { useState } from "react";

// Vamos a crear un componente que modifique el p cuando se escribe en el input
const FormularioClase23 = () => {
  const [titulo, setTitulo] = useState("");
  const [body, setBody] = useState("");

  const enviarFormulario = (ev) => {
    ev.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: titulo,
        body: body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <h1>Clase 23 - Formularios: Enviando formularios</h1>
      <form onSubmit={(ev) => enviarFormulario(ev)}>
        <div>
          <label htmlFor="title" type="text">Título</label>
          <input
            type="text"
            id="title"
            onChange={(evento) => setTitulo(evento.target.value)}
          />
          <p>Capturando el título {titulo}</p>
        </div>
        <div>
          <label htmlFor="body" type="text">Publicación</label>
          <textarea
            name=""
            id="body"
            onChange={(evento) => setBody(evento.target.value)}
          ></textarea>
          <p>Capturando el body {body}</p>
        </div>
        <input type="submit" value="Enviar"/>
      </form>
    </div>
  );
};

export { FormularioClase23 };
```



## Limpiar los Campos del Formulario

Por último, si queremos limpiar los campos, utilizamos las funciones de estado `setTitulo` y `setBody`. Colocar `setTitulo("");` y `setBody("");` dentro del `then` es una buena práctica para limpiar los campos del formulario después de que se haya enviado y recibido la respuesta del servidor. De esta manera, los campos del formulario se vacían después de que la solicitud POST se haya completado y la respuesta se haya manejado.

Lo único, que además se debe sincronizar son los `input`, ya que tomamos el valor de esos campos con el evento `onChange={}` con la instrucción `evento.target.value`.

```html
<input type="text" id="title" onChange={(evento) => setTitulo(evento.target.value)} />
```

Es decir, colocamos un carácter en el `input`, `onChange` se da cuenta, lo toma con `evento` y le preguntamos el valor a `target.value`, que nos dice que es el valor de un `input`. Y `setTitulo`, que es una función de estado, cambia la variable de estado por el valor del `input`.

Entonces, si queremos vaciar, además de los elementos `p`, el contenido de los `input`, hay que colocar en los `input` el atributo `value`.

### Value en Input y Textarea

**De React**: El `value` en los elementos `input` y `textarea` está controlado por React. Es una característica de React, no nativa de JavaScript puro. Esto significa que el valor del campo de entrada se mantiene en el estado del componente. El valor en el `input` o `textarea` siempre refleja el estado actual de la variable de estado correspondiente.

#### ¿Cómo Funciona?

1. **Enlace Bidireccional**: El `value` del `input` y `textarea` se enlaza al estado del componente (`titulo` y `body`). Cualquier cambio en el campo de entrada actualiza el estado, y cualquier cambio en el estado actualiza el valor del campo de entrada.
2. **Manejo de Eventos**: El `onChange` se utiliza para manejar los eventos de cambio en los campos de entrada. Cada vez que el usuario escribe algo, el evento dispara una función que actualiza el estado del componente.

### Código Final

```javascript
import React from "react";
import { useState } from "react";

// Vamos a crear un componente que modifique el p cuando se escribe en el input
const FormularioClase23 = () => {
  const [titulo, setTitulo] = useState("");
  const [body, setBody] = useState("");

  const enviarFormulario = (ev) => {
    ev.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: titulo,
        body: body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        // Limpiar los campos del formulario
        setTitulo("");
        setBody("");
        console.log(json);
      });
  };

  return (
    <div>
      <h1>Clase 23 - Formularios: Enviando formularios</h1>
      <form onSubmit={(ev) => enviarFormulario(ev)}>
        <div>
          <label htmlFor="title" type="text">Título</label>
          <input
            type="text"
            value={titulo}
            id="title"
            onChange={(evento) => setTitulo(evento.target.value)}
          />
          <p>Capturando el título {titulo}</p>
        </div>
        <div>
          <label htmlFor="body" type="text">Publicación</label>
          <textarea
            name=""
            value={body}
            id="body"
            onChange={(evento) => setBody(evento.target.value)}
          ></textarea>
          <p>Capturando el body {body}</p>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export { FormularioClase23 };
```

