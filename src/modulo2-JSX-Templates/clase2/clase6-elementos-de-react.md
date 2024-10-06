# Clase 6 Del curso completo

## Clase 2 del Modulo 2: Elementos de React
---

**JSX**: Es una sintaxis que se utiliza en React para describir cómo debería verse la interfaz de usuario. JSX permite escribir HTML dentro de JavaScript y es transformado en llamadas a `React.createElement` bajo el capó.
**JSX**: Es una alternativa sintactica a la funcion createElement de React, internamente no existe ninguna diferencia

**Diferencias entre elementos de React y elementos del DOM de HTML**:
- Los elementos de React no son iguales a los elementos del DOM de HTML. Son una representación virtual que después se traduce a los elementos nativos de la interfaz.

**Elementos de React vs. Componentes de React**:
- Un **elemento de React** es distinto a un **componente de React**.
- Un **componente** es la declaración de un elemento de una vista con su estado, su plantilla y sus funciones.

**Ejemplo de un elemento de React**:
```jsx
<Btn />
```
Este es un elemento, que es lo que retorna un componente en cada actualización.

---



En React, un **elemento** es la unidad más pequeña de construcción de la interfaz de usuario. Es una representación simple de lo que quieres ver en la pantalla. Los elementos de React son objetos inmutables que describen lo que debería aparecer en la interfaz de usuario.

### Características de un elemento de React:
- **Inmutable**: Una vez creado, no se puede cambiar. Para actualizar la interfaz de usuario, se crean nuevos elementos.
- **Descripción**: Describe lo que quieres ver en la pantalla, no cómo se construye. React se encarga de convertir estos elementos en el DOM real.

### Ejemplo de un elemento de React:
```jsx
const elemento = <h1>Hola, mundo</h1>;
```
En este ejemplo, `<h1>Hola, mundo</h1>` es un elemento de React que describe un encabezado de nivel 1 con el texto "Hola, mundo".

### Diferencia entre un elemento y un componente:
- **Elemento**: Es una descripción de lo que quieres ver en la pantalla. Es el resultado de la llamada a un componente.
- **Componente**: Es una función o clase que puede aceptar entradas (props) y devuelve un elemento de React. Los componentes pueden ser reutilizables y pueden contener lógica de estado y ciclo de vida.

### Ejemplo de un componente de React:
```jsx
function Btn() {
  return <button>Enviar</button>;
}
```
En este caso, `Btn` es un componente que devuelve un elemento de React (`<button>Enviar</button>`).

### Uso de un componente:
```jsx
const app = (
  <div>
    <Btn />
  </div>
);
```
Aquí, `<Btn />` es un elemento que se genera a partir del componente `Btn`.


Resumen:
<Btn /> es un elemento de React que representa el componente Btn.
return `<button>Enviar</button>`; dentro del componente Btn es otro elemento de React que describe el botón que se debe renderizar.
