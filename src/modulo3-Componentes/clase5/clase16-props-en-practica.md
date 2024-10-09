# Clase 16 Del curso completo

## Clase 5 del Módulo 3: Props en práctica

---

Ahora que hemos hablado de props y visto algunas de sus características, veamos cómo se puede establecer un valor por defecto.

### Usando el objeto props para acceder a las propiedades

```javascript
import React from "react";

const SaludarConProps = (props) => {
  const saludo = props.idioma === 'es' ? 'Hola' : 'Hello';
  return (
    <div>
      <h1>{props.nombre}</h1>
      <h2>{saludo} estoy usando una prop</h2>
    </div>
  );
}

export { SaludarConProps };
```

En App.js lo llamamos así:

```html
<SaludarConProps nombre="Clase 16 - Props en práctica" idioma="es" />
```

### Utilizando desestructuring `{}` de las props

```javascript
import React from "react";

const SaludarConPropsDesestructuradas = ({ nombre, idioma }) => {
  const saludo = idioma === 'es' ? 'Hola' : 'Hello';
  return (
    <div>
      <h1>{nombre}</h1>
      <h2>{saludo} estoy usando una prop desestructurada</h2>
    </div>
  );
}

export { SaludarConPropsDesestructuradas };
```

En App.js lo llamamos así:

```html
<SaludarConPropsDesestructuradas nombre="Clase 16 - Props en práctica" idioma="es" />
```

### Establecer props por defecto (Esta primera forma no es la recomendada)

```javascript
import React from "react";

const SaludarConPropsDefault = ({ nombre, idioma }) => {
  const saludo = idioma === 'es' ? 'Hola' : 'Hello';
  return (
    <div>
      <h1>{nombre}</h1>
      <h2>{saludo} estoy usando una prop por defecto</h2>
    </div>
  );
}

SaludarConPropsDefault.defaultProps = {
  nombre: 'Clase 16',
  idioma: 'es'
}

export { SaludarConPropsDefault };
```

En App.js lo llamamos así:

```html
<SaludarConPropsDefault />
```

### Usar JavaScript vanilla ECMAScript 6 (ES6) para pasar props por defecto en los parámetros

```javascript
import React from "react";

const SaludarConPropsDefaultVanilla = ({ nombre = 'Clase 16', idioma = 'es' }) => {
  const saludo = idioma === 'es' ? 'Hola' : 'Hello';
  return (
    <div>
      <h1>{nombre}</h1>
      <h2>{saludo} estoy usando una prop por defecto vanilla usando JS ECMAScript 6</h2>
    </div>
  );
}

export { SaludarConPropsDefaultVanilla };
```

En App.js lo llamamos así:

```html
<SaludarConPropsDefaultVanilla />
```

---



## La forma actual es la segunda usando parametros por defecto de EMC