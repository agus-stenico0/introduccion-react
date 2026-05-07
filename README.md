# Clase 01 — Introducción a React: Componentes, Props y JSX

> **Nivel:** Junior / Principiante  
> **Duración estimada de lectura:** 30-40 minutos  
> **🔗 Link al Cheatsheet / Deploy:** _[PENDIENTE — el instructor lo compartirá al inicio de la clase]_

---

## Índice

1. [El gran cambio: Imperativo vs Declarativo](#1-el-gran-cambio-imperativo-vs-declarativo)
2. [El Virtual DOM: por qué React es tan rápido](#2-el-virtual-dom-por-qué-react-es-tan-rápido)
3. [Las 3 Reglas de Oro de JSX](#3-las-3-reglas-de-oro-de-jsx)
4. [Componentes: los bloques de LEGO de tu UI](#4-componentes-los-bloques-de-lego-de-tu-ui)
5. [Props: cómo pasarle datos a un componente](#5-props-cómo-pasarle-datos-a-un-componente)
6. [Resumen y Cheatsheet rápido](#6-resumen-y-cheatsheet-rápido)

---

## 1. El gran cambio: Imperativo vs Declarativo

### ¿Qué es el paradigma Imperativo?

Cuando escribes **Vanilla JavaScript**, le dices al navegador **CÓMO** hacer cada paso.  
Tú eres el director de orquesta que tiene que explicar cada movimiento:

```js
// ❌ Imperativo — Vanilla JS
// Quiero mostrar un saludo en pantalla. Tengo que:
// 1. Buscar el elemento en el DOM.
// 2. Crear un nuevo elemento.
// 3. Asignarle texto.
// 4. Insertarlo dentro del padre.

const contenedor = document.getElementById("app");
const titulo = document.createElement("h1");
titulo.innerText = "Hola, Juan";
contenedor.appendChild(titulo);

// Si el nombre cambia... tengo que volver a hacer todo esto a mano.
const nuevoNombre = "María";
titulo.innerText = `Hola, ${nuevoNombre}`; // <-- mutación manual del DOM
```

Cada vez que algo cambia en tu aplicación, **tú** tienes que encargarte de actualizar el DOM manualmente. Esto escala muy mal: en aplicaciones grandes, el código se vuelve imposible de mantener.

---

### ¿Qué es el paradigma Declarativo?

En **React**, simplemente le dices **QUÉ** quieres ver en pantalla. React se encarga del "cómo".

```jsx
// ✅ Declarativo — React
// Solo declaro QUÉ quiero ver. React hace el trabajo sucio.

function Saludo({ nombre }) {
  return <h1>Hola, {nombre}</h1>;
}

// Si el nombre cambia, React actualiza el DOM automáticamente.
// Yo no toco el DOM nunca.
```

**La analogía perfecta:**

- **Imperativo** = ir al restaurante y explicarle al chef exactamente cómo cortar cada ingrediente, a qué temperatura cocinar y en qué orden servir.
- **Declarativo** = ir al restaurante y decirle al mesero "quiero una pizza margarita". El chef sabe cómo hacerla.

| Característica | Imperativo (Vanilla JS)    | Declarativo (React)        |
| -------------- | -------------------------- | -------------------------- |
| Describes      | **Cómo** hacer los cambios | **Qué** debe verse         |
| Manejo del DOM | Manual, a mano             | Automático (React lo hace) |
| Escalabilidad  | Difícil                    | Sencilla con componentes   |
| Legibilidad    | Baja en apps grandes       | Alta, código predecible    |

---

## 2. El Virtual DOM: por qué React es tan rápido

### El problema del DOM real

El DOM (Document Object Model) es la representación en memoria del HTML de tu página. Manipularlo directamente es **costoso en rendimiento**. Cada vez que cambias algo en el DOM real, el navegador tiene que:

1. **Recalcular los estilos** de los elementos afectados.
2. **Recalcular el layout** (posición y tamaño de los elementos).
3. **Pintar** (repaint) los píxeles en pantalla.

Si tienes una lista de 1000 ítems y cambia uno solo, sin optimización el navegador podría re-renderizar los 1000. Eso es lento y consume batería.

---

### La solución de React: el Virtual DOM

El **Virtual DOM** es una copia liviana del DOM real, guardada en memoria como un objeto JavaScript. Cuando algo cambia en tu aplicación:

**Paso 1 — Snapshot anterior:** React tiene guardado cómo estaba la UI antes del cambio.

**Paso 2 — Nuevo snapshot:** React genera un nuevo árbol virtual con el cambio aplicado.

**Paso 3 — Diffing:** React compara el árbol viejo con el árbol nuevo usando un algoritmo llamado **"diffing"**. Encuentra exactamente qué elementos cambiaron.

**Paso 4 — Reconciliación:** React aplica **solo los cambios mínimos necesarios** al DOM real. Si solo cambió el texto de un `<p>`, solo actualiza ese `<p>`, no toda la página.

```
Estado anterior (Virtual DOM):     Estado nuevo (Virtual DOM):
<ul>                               <ul>
  <li>Manzana</li>                   <li>Manzana</li>
  <li>Banana</li>        →           <li>Banana</li>
  <li>Cereza</li>                    <li>Cereza</li>
</ul>                                <li>Durazno</li>  ← SOLO ESTE ES NUEVO
                                   </ul>

React detecta: "Solo tengo que insertar un <li>Durazno</li>"
React actualiza: Solo ese nodo en el DOM real. ✅
```

**¿Por qué es tan importante?**

- Reduces las operaciones en el DOM real al mínimo.
- Tu código es más predecible: describes el estado deseado y React se encarga.
- Hace posible aplicaciones con cientos de actualizaciones por segundo sin trabarse.

---

## 3. Las 3 Reglas de Oro de JSX

**JSX** es la extensión de sintaxis que usa React. Se parece a HTML, pero es JavaScript. Babel lo transforma a llamadas `React.createElement()` que el navegador puede entender.

```jsx
// Esto que escribes en JSX:
const elemento = <h1 className="titulo">Hola</h1>;

// Babel lo convierte a esto (no lo escribes tú, es automático):
const elemento = React.createElement("h1", { className: "titulo" }, "Hola");
```

### Regla de Oro #1: `className` en lugar de `class`

En HTML usas `class` para asignar clases CSS. En JSX, `class` es una palabra reservada de JavaScript (para definir clases de POO), entonces React usa `className`.

```jsx
// ❌ INCORRECTO — esto genera un warning y puede fallar
<div class="contenedor">
  <p class="texto-principal">Hola mundo</p>
</div>

// ✅ CORRECTO — siempre usa className en JSX
<div className="contenedor">
  <p className="texto-principal">Hola mundo</p>
</div>
```

**Otros atributos que cambian su nombre:**

- `for` (del `<label>`) → `htmlFor`
- `tabindex` → `tabIndex`
- Los eventos usan camelCase: `onclick` → `onClick`, `onchange` → `onChange`

---

### Regla de Oro #2: Siempre una etiqueta padre única

Un componente de React **solo puede retornar un único elemento raíz**. Si intentas retornar varios elementos al mismo nivel sin un padre que los envuelva, React lanzará un error.

```jsx
// ❌ INCORRECTO — dos elementos hermanos sin padre
function MiComponente() {
  return (
    <h1>Título</h1>
    <p>Párrafo</p>  // Error: JSX expressions must have one parent element
  );
}

// ✅ OPCIÓN 1 — envueltos en un <div>
function MiComponente() {
  return (
    <div>
      <h1>Título</h1>
      <p>Párrafo</p>
    </div>
  );
}

// ✅ OPCIÓN 2 — usar un Fragment (no agrega nodo extra al DOM)
// Útil cuando no quieres agregar un div extra innecesario
function MiComponente() {
  return (
    <>
      <h1>Título</h1>
      <p>Párrafo</p>
    </>
  );
}
```

> **Tip:** El `<>...</>` es la sintaxis corta de `<React.Fragment>...</React.Fragment>`. Úsalo cuando un `<div>` extra rompería tu CSS (por ejemplo, dentro de un `display: flex`).

---

### Regla de Oro #3: Llaves `{}` para evaluar JavaScript

En JSX, todo lo que va entre las etiquetas HTML es texto estático... salvo que lo envuelvas en llaves `{}`. Dentro de las llaves puedes escribir **cualquier expresión JavaScript válida**: variables, operaciones, llamadas a funciones, operadores ternarios.

```jsx
const nombre = "María";
const edad = 28;
const esMayor = edad >= 18;

function obtenerSaludo(nombre) {
  return `¡Bienvenida, ${nombre}!`;
}

function MiComponente() {
  return (
    <div>
      {/* Esto es un comentario en JSX */}

      {/* Variable */}
      <p>{nombre}</p>

      {/* Operación aritmética */}
      <p>En 5 años tendrás {edad + 5} años</p>

      {/* Llamada a función */}
      <p>{obtenerSaludo(nombre)}</p>

      {/* Operador ternario (if/else en una línea) */}
      <p>{esMayor ? "Eres mayor de edad" : "Eres menor de edad"}</p>

      {/* Renderizado condicional con && */}
      {esMayor && <span>Puedes votar ✅</span>}
    </div>
  );
}
```

**¿Qué NO puedes poner dentro de `{}`?**

- Sentencias `if/else` completas (usa ternarios o sácalos afuera del return)
- Bucles `for` o `while` (usa `.map()` para listas)
- `const` o `let` declarations

---

## 4. Componentes: los bloques de LEGO de tu UI

Un **componente** es una función JavaScript que:

1. Recibe datos como argumentos (llamados **props**).
2. Retorna JSX que describe cómo debe verse esa parte de la UI.

Piensa en ellos como **piezas de LEGO reutilizables**. Una vez que construyes un componente `<Button>`, lo puedes usar en cualquier parte de la aplicación.

### Anatomía de un componente funcional

```jsx
// 1. El nombre SIEMPRE empieza con MAYÚSCULA
//    (React distingue tags HTML <div> de componentes <MiComponente>)
function TarjetaUsuario(props) {
  // 2. Puede tener lógica JavaScript aquí arriba
  const iniciales = props.nombre.charAt(0).toUpperCase();

  // 3. SIEMPRE retorna JSX (o null si no quiere renderizar nada)
  return (
    <div className="tarjeta">
      <div className="avatar">{iniciales}</div>
      <h2>{props.nombre}</h2>
      <p>Rol: {props.rol}</p>
    </div>
  );
}
```

### Cómo se usa un componente

```jsx
function App() {
  return (
    <div>
      {/* Lo usas igual que una etiqueta HTML */}
      <TarjetaUsuario nombre="Ana García" rol="Diseñadora" />
      <TarjetaUsuario nombre="Carlos López" rol="Desarrollador" />
      <TarjetaUsuario nombre="Sofía Martínez" rol="Product Manager" />
    </div>
  );
}
```

Fíjate: escribiste `<TarjetaUsuario />` tres veces con datos distintos y React renderizó tres tarjetas diferentes. Eso es la reutilización de componentes.

---

## 5. Props: cómo pasarle datos a un componente

**Props** (abreviatura de "properties") son los argumentos que le pasas a un componente. Son el mecanismo por el cual los datos fluyen de un componente padre a uno hijo.

### Props son de solo lectura

Esta es la regla más importante:

> **Un componente NUNCA debe modificar sus propias props.**

Las props son inmutables desde la perspectiva del componente hijo. Si necesitas cambiar datos, usarás **estado** (`useState`, que veremos en la Clase 02).

### Pasar props

```jsx
// Las props se pasan como atributos en JSX
// Los strings van entre comillas "..."
// Todo lo demás (números, booleanos, objetos, arrays, funciones) va entre llaves {}

<MiComponente
  texto="Hola mundo" // String
  numero={42} // Número
  activo={true} // Booleano
  colores={["rojo", "azul"]} // Array
  usuario={{ nombre: "Ana" }} // Objeto
  alHacerClic={miFuncion} // Función
/>
```

### Recibir props con destructuring (forma moderna)

```jsx
// Forma básica — recibir todo en el objeto props
function Saludo(props) {
  return (
    <h1>
      Hola, {props.nombre}. Tienes {props.edad} años.
    </h1>
  );
}

// Forma moderna — destructuring en los parámetros (más limpia y recomendada)
function Saludo({ nombre, edad }) {
  return (
    <h1>
      Hola, {nombre}. Tienes {edad} años.
    </h1>
  );
}

// Con valores por defecto
function Saludo({ nombre = "Invitado", edad = 0 }) {
  return (
    <h1>
      Hola, {nombre}. Tienes {edad} años.
    </h1>
  );
}
```

### La prop especial: `children`

Hay una prop especial llamada `children` que React llena automáticamente con todo lo que pongas **entre las etiquetas** del componente.

```jsx
// El componente recibe children
function Caja({ children, titulo }) {
  return (
    <div className="caja">
      <h3>{titulo}</h3>
      {children}
    </div>
  );
}

// Al usarlo, lo que pongas "adentro" se convierte en children
function App() {
  return (
    <Caja titulo="Mi caja">
      <p>Este párrafo es el children.</p>
      <button>Y este botón también.</button>
    </Caja>
  );
}
```

---

## 6. Resumen y Cheatsheet rápido

```
PARADIGMA
├── Imperativo (Vanilla JS) → Le dices CÓMO hacer cada paso
└── Declarativo (React)     → Le dices QUÉ quieres ver

VIRTUAL DOM
├── Copia liviana del DOM real en memoria JS
├── Diffing: compara árbol viejo vs árbol nuevo
└── Solo actualiza los nodos que cambiaron

JSX — 3 REGLAS DE ORO
├── 1. class → className (y for → htmlFor)
├── 2. Un único elemento raíz (o usa <>...</>)
└── 3. {} para evaluar JS (variables, ternarios, funciones)

COMPONENTE FUNCIONAL
├── Función que empieza con MAYÚSCULA
├── Recibe props (de solo lectura)
└── Retorna JSX

PROPS
├── Se pasan como atributos en JSX
├── Strings entre "comillas", todo lo demás entre {llaves}
├── Se reciben con destructuring: ({ prop1, prop2 })
└── Son inmutables — el hijo no puede cambiarlas
```

> 🔗 **Cheatsheet completo y Demo en vivo:** _[PENDIENTE — el instructor compartirá el link aquí]_
