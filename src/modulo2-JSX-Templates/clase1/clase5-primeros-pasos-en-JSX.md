# Clase 5 Del curso completo

## Clase 1 del Modulo 2 JSX - Templates: Primeros pasos en JSX

---

Como discutimos antes, React no incluye un lenguaje de plantillas como HTML, en cambio, las plantillas y los elementos que conforman una vista se escriben usando código de JavaScript.

React expone un método createElement que puedes usar para crear elementos de React a usar en una vista. El código que se muestra a continuación, crea un botón con el texto Enviar:

`React.createElement('button', {}, 'Enviar');`

Puedes usar el segundo argumento para enviar información hacia el elemento button que se crea:

```javascript
const Btn = () => {
  return React.createElement("button", {
    onClick: () => alert("Hola")
  }, "Enviar");
};
```

Puedes continuar usando createElement para representar tus vistas, sin embargo, encontrarás pronto que usar esta función hará que el código de tus vistas se vuelva extremadamente largo y verboso, además de difícil de leer y reutilizar.

Para solucionar esto, se introduce JSX. JSX extiende la sintaxis de JavaScript para representar vía etiquetas las declaraciones de React.createElement. Internamente, JSX usa la misma función para crear elementos, en el exterior, notarás que usar JSX hará tu código más expresivo y simple.

El código del botón que vimos antes, se vería así con JSX:

```javascript
const Btn = () => <button onClick={() => alert("Hola")}>Enviar</button>;
```

Puedes notar que no colocamos comillas alrededor de la declaración de la etiqueta button, esto es porque la sintaxis de JSX no es un string, de nuevo, es JavaScript.

Por último, recuerda que aunque, al igual que HTML, JSX usa los caracteres menor qué y mayor qué para representar elementos de React, HTML y JSX no son la misma tecnología. JSX nos permite embeber expresiones de JavaScript y pasar directamente nuestros datos a la declaración de nuestras vistas.

A lo largo del bloque irás aprendiendo la sintaxis de JSX y sus características principales, ¡continuemos!
