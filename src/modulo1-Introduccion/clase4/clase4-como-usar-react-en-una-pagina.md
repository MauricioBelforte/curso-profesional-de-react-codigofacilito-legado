# Clase 4 Del curso completo

## Clase 4 del Módulo 1 Introducción: Cómo usar React en una página

---


React no asume nada acerca de las tecnologías con las que funciona tu proyecto, más allá de que usarás React para las interfaces gráficas, no importa qué lenguaje de backend uses, o si no estás usando ninguno, si usas herramientas de automatización en el frontend o no.

Es por esto que existen distintas alternativas para comenzar a usar React en tu aplicación, desde las más simples que te permiten usar React para ciertas partes de tu página, hasta herramientas de automatización para proyectos hechos 100% con React.

La forma más simple y rápida de integrar React en tu sitio web, es agregar un par de tags de script para importar la librería, como se describe en la guía para [Agregar React en 1 minuto](https://reactjs.org/docs/add-react-to-a-website.html#step-2-add-the-script-tags)

Crea un componente y muéstralo en un contenedor. Listo, tienes React en tu página web.

Alternativamente, puedes usar React como herramienta de automatización de tareas en el frontend. Para integrar React y minificar tu código, puedes manualmente configurar tu flujo de trabajo de webpack para que integre React y sus herramientas. Sin embargo, el proceso puede ser laborioso y propenso a errores.

Por esta razón, el equipo de React administra una herramienta de terminal de nombre “create-react-app” que hace justo lo que anuncia: crea una aplicación de React, preconfigurada y con todo lo necesario para comenzar a desarrollar.

Para usarla, necesitas tener Node.js instalado en tu computadora y ejecutar el siguiente comando que inicia un nuevo proyecto:

```bash
npx create-react-app my-app
```

Asegúrate de cambiar la palabra `my-app` por el nombre de tu proyecto.

`create-react-app` es la forma más popular de iniciar un proyecto que usa React para todo el frontend.

Si deseas trabajar en un entorno en la nube que te permita acceder a tu proyecto desde cualquier dispositivo conectado a internet, existen algunas plataformas en línea con las que puedes crear un proyecto de React haciendo un solo clic. Algunas opciones son: **Codesandbox** y **Stackblitz**, asegúrate de visitar los sitios web para seguir el flujo de creación de proyectos con React.

Alternativamente, si estás usando un framework MVC como Rails, Django, Laravel o similares, asegúrate de buscar los plugins correspondientes para cada framework, que te permitan integrar React.

Por último, puedes usar React a través de un framework basado en la librería. Algunas opciones son **Gatsby** y **Next.js**. Estos frameworks de React incluyen sus propias herramientas para la creación de nuevos proyectos.

¡Continuemos!
