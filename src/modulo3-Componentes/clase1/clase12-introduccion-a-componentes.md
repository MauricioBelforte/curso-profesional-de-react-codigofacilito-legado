# Clase 12 Del curso completo

## Clase 1 del Módulo 3 Componentes: Introducción a los componentes

---

En una aplicación de React, organizamos nuestro código y la funcionalidad en componentes. Conceptualmente, puedes pensar en los componentes como piezas de lego, que juntas forman piezas más complejas, los componentes son las piezas de construcción de una aplicación basada en React.

De acuerdo a la documentación de React, un componente es como una función de JavaScript que recibe información y entrega una respuesta, esta respuesta son los elementos de React que deberán aparecer en la interfaz.

Una interfaz de React se compone de elementos de React que representan los elementos del DOM, como `<div>`, o `<button>`, además de elementos de React que vienen de un componente personalizado como `<MiBoton>`.

Estos componentes encapsulan toda la funcionalidad de un elemento de la interfaz, en un mismo lugar. Es en el componente donde se define qué se va a mostrar, qué datos recibimos, qué datos modificamos y cómo esos datos cambian la interfaz.

Esta arquitectura orientada a componentes nos ayuda a organizar y separar la complejidad de nuestra aplicación en elementos sencillos que cumplen tareas simples e independientes de los demás. Un formulario, por ejemplo, puede estar compuesto de distintos componentes como un botón, algunos controles de entrada de texto, selectores, un control de calendario, etc.

A través de esta arquitectura, aplicamos el principio de “divide y vencerás” sobre nuestra interfaz gráfica, en lugar de ver la interfaz como una gran base de código en constante actualización, vemos la interfaz como una colección de elementos que se ocupan de tareas sencillas y que, en conjunto, forman la interfaz completa.

---

Los componentes más complejos como un calendario, un slider, un formulario, etc. se componen de pequeños componentes de tareas específicas. Más adelante hablaremos de cómo podemos separar nuestros componentes para hacerlos más simples y reutilizables.

En React, un componente se puede definir con una función, a éstos los llamamos componentes funcionales, y con una clase, a éstos los llamamos componentes de clase. Sin importar qué tipo de componente escribas, éstos reciben información del exterior y retornan un grupo de elementos de React que después se verán en la pantalla.

A lo largo de este tema continuaremos analizando las principales características de un componente: cómo reciben información, cómo hacer componentes dinámicos, cómo afectan la interfaz, etc.

Continuemos.
