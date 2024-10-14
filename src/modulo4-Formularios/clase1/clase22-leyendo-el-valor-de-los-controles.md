# Clase 22 Del curso completo

## Módulo 4: Formularios 

---

### Clase 1 : Leyendo el valor de los controles


Vamos a crear un formulario usando json placeholder.Que es una api para crear formularios rapidamente .


Lo primero que nos compete es como vamos a capturar lo que se esta escribiendo en los input del formulario


En esta clase solo vamos a usar el hook useState y el evento onChange={} en los input como en la clase 20 de Eventos. Luego continuaremos con el proyecto.

Creamos 2 pares de variables con useState. Una para el titulo y otra para la publicacion que van a ir sincronizando sus valores con los input, que en este caso de ejemplo los veremos reflejado en unos elementos p.

Siempre que queramos hacer una variable que pueda modificarse tiene que ser parte del estado del componente. 

const [titulo, setTitulo]= useState("")
const [body, setBody]= useState("")


Con estado inicial vacio, y se van actualizando llamando a los metodos  setTitulo y setBody utilizando los eventos onChange={}


 <div>
                <label type="text"> Título </label>
                <input type="text" id= "title" onChange={(evento)=> setTitulo (evento.target.value)}/>   
                <p>Capturando el titulo {titulo}</p>
            </div>
            <div>
                <label type="text"> Publicación </label>
                <textarea name="" id="body" onChange={(evento)=> setBody(evento.target.value)}>  </textarea> 
                <p>Capturando el body {body}</p>
            </div>


### Explicación

- **evento ( puede tener cualquier nombre)**:
  Este es el objeto del evento que se pasa automáticamente a la función cuando se activa el evento `onChange`. Contiene información sobre el evento y el elemento que lo disparó.

- **evento.target.value**:
  `evento.target` se refiere al elemento del DOM que disparó el evento, que en este caso es el campo de texto (`input`). `.value` es una propiedad de ese elemento que contiene el texto actualmente ingresado en el campo de texto.

- **setTitulo(evento.target.value)**:
  Esta es la función que actualiza el estado `nombre` con el valor del campo de texto.

