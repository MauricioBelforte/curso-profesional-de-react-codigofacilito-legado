# Clase 17 Del curso completo

## Clase 6 del Módulo 3 Componentes: ¿Qué es el state?

---

Estado: El estado es una forma de almacenar y gestionar datos que pueden cambiar con el tiempo en respuesta a eventos.

Una analogía que podemos utilizar es la de los estados de la materia: sólido, líquido y gaseoso. Dependiendo de la temperatura, estos pueden cambiar. Lo mismo pasa con los componentes de React; conforme modificamos lo que llamamos estado, los componentes se actualizan y cambian.

El **estado** es la información que le pertenece al componente y puede ser **modificada o actualizada**. Estas modificaciones se verán reflejadas en lo que muestra en la **interfaz gráfica** nuestro componente. 

Análogamente, podemos pensar en el estado de un componente como en las **variables** que le pertenecen a una función. Su única tarea es que la función complete la tarea que está realizando y entregue una respuesta.

En el caso de un componente, el estado son las variables y las respuestas que entrega es la representación virtual de la interfaz gráfica.

Cuando se quiere agregar **dinamismo**, cuando un valor puede ser **actualizado** o **modificado** por el componente, estamos hablando de la modificación del estado del componente o también llamado **State**. 

Que el componente tenga un estado nos permite **aislar y encapsular** un componente de su exterior. Ningún componente puede **modificar el estado** de otro componente directamente.

React está diseñado de tal manera que cada vez que **modifiquemos el estado**, se evalúe la representación eventual de la interfaz, y en caso de que exista un cambio, actualice lo mínimo de la interfaz para reflejar esa actualización.

---
