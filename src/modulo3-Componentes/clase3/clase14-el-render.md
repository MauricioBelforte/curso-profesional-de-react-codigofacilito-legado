# Clase 14 Del curso completo

## Clase 3 del Módulo 3: El Render

---

Un componente de React pasa por un proceso de **render** en cada actualización. 
Este proceso significa en un componente de clase, **volver a ejecutar el método render**. En un componente funcional, **volver a ejecutar las funciones**.
Un componente de React ejecuta el método **render** cuando hay un **cambio en el estado** del componente, esto puede suceder si **una prop cambia**, o si se hizo un **cambio indirecto al estado vía del hook state** o el **método setState** en un componente de clase.
Cuando el estado cambia, React evalúa si es necesario hacer una actualización y de requerir ejecuta el método **render**, que retornará una **representación virtual de la interfaz con los cambios**.

Cada componente retorna una **representación virtual** de la interfaz con elementos de React, React eventualmente transforma eso a **elementos de la plataforma** en la que se ejecuta tu aplicación.

Cada vez que se ejecuta el **render**, React compara la **nueva representación virtual** de los elementos con la **representación real en la interfaz**, y si existe alguna diferencia hace lo menos posible para **actualizar la interfaz** y mantenerla igual que la representación virtual.
Así React **mantiene nuestra interfaz actualizada** ocupando la mínima cantidad de recursos en cada actualización.
