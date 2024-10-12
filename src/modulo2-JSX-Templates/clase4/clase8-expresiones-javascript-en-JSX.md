# Clase 8 Del curso completo

## Clase 4 del Módulo 2 JSX - Templates: Expresiones JavaScript en JSX

---

**JSX** no es más que una extensión de la sintaxis en JavaScript. 

Lo primero que debemos saber es que podemos utilizar sintaxis de JavaScript. 

Todo lo que esté entre llaves `{}` dentro del casi "HTML" se ve reflejado.

### Ejemplo

```javascript
import './App.css';
import { Saludo } from './Saludo';

function App() {
  return (
    <div>
      <h1>Este es un título {2 + 5} `${'Y acá ponemos texto'}`</h1>
      <Saludo />
    </div>
  );
}

export default App;
```

Para relacionarlo, se podría decir que las llaves `{}` tienen su equivalente en JavaScript con `${}` sin necesidad de las comillas backticks `` ` ` ``.
