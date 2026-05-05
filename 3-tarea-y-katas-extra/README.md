# Tarea para Casa y Katas Extra — Clase 01

> **Fecha de entrega:** Inicio de la Clase 02  
> **Forma de entrega:** Sube tu código a un repositorio de GitHub y comparte el link en el canal de la clase.  
> **Objetivo:** Consolidar los conceptos de Componentes, Props y JSX trabajando en tu propio entorno.

---

## Antes de empezar

Asegúrate de tener un proyecto de Vite+React funcionando en tu máquina:

```bash
# En tu terminal, en la carpeta donde guardes tus proyectos:
npm create vite@latest tarea-clase-01 -- --template react
cd tarea-clase-01
npm install
npm run dev
```

Luego abre el proyecto en VS Code y trabaja sobre `src/App.jsx`.

---

## Kata 1 — Componente `<Button />`

### Consigna

Crea un componente llamado `Button` que reciba **dos props**:

- `text` (string): el texto que mostrará el botón.
- `color` (string): el color de fondo del botón (acepta cualquier valor CSS válido como `"red"`, `"#3b82f6"`, `"green"`, etc.).

### Requisitos

1. El botón debe mostrar el texto de la prop `text` en su interior.
2. El fondo del botón debe ser el color indicado en la prop `color`.
3. El texto del botón siempre debe ser **blanco** (`#ffffff`) para que sea legible sobre cualquier color.
4. El botón debe tener un **estilo base** que lo haga usable: borde redondeado, padding cómodo y cursor pointer.
5. **Renderiza el componente al menos 4 veces** en `App.jsx` con distintas combinaciones de `text` y `color`.

### Ejemplo de uso esperado en App.jsx

```jsx
<Button text="Click me" color="red" />
<Button text="Guardar" color="#16a34a" />
<Button text="Cancelar" color="#6b7280" />
<Button text="Enviar" color="#3b82f6" />
```

### Criterios de éxito

- [ ] El componente se llama `Button` (con B mayúscula).
- [ ] Recibe las props `text` y `color` con destructuring.
- [ ] El color de fondo cambia según la prop `color`.
- [ ] El texto cambia según la prop `text`.
- [ ] Se renderiza al menos 4 veces con distintos valores.

---

## Kata 2 — Renderizado Condicional con `&&`

### Consigna

Esta kata tiene **dos partes**: primero investigas, luego implementas.

### Parte A: Investigación (10 minutos)

Busca en internet o en la documentación oficial de React ([react.dev](https://react.dev)) qué es el **renderizado condicional** y específicamente cómo funciona el operador `&&` en JSX.

Responde en un comentario al principio de tu archivo:

```jsx
// ¿Qué hace el operador && en JSX?
// Respuesta: ...

// ¿Qué diferencia tiene con el operador ternario (condicion ? a : b)?
// Respuesta: ...

// ¿Qué pasa si la condición es el número 0? ¿Se renderiza algo?
// Respuesta: (esta es una trampa común, investígala bien)
```

### Parte B: Implementación

Crea un componente `TarjetaProducto` que reciba estas props:

- `nombre` (string): nombre del producto.
- `precio` (número): precio del producto.
- `enStock` (booleano): si el producto está disponible o no.
- `esNuevo` (booleano): si el producto fue lanzado recientemente.

El componente debe renderizar:

1. El nombre del producto siempre.
2. El precio del producto siempre.
3. **Solo si `enStock` es `true`**: un badge verde que diga "✅ Disponible".
4. **Solo si `enStock` es `false`**: un texto rojo que diga "❌ Sin stock".
5. **Solo si `esNuevo` es `true`**: un badge amarillo que diga "🆕 Nuevo".

### Ejemplo de uso en App.jsx

```jsx
<TarjetaProducto
  nombre="Auriculares Pro"
  precio={89.99}
  enStock={true}
  esNuevo={true}
/>

<TarjetaProducto
  nombre="Teclado Mecánico"
  precio={149.00}
  enStock={false}
  esNuevo={false}
/>

<TarjetaProducto
  nombre="Mouse Inalámbrico"
  precio={45.50}
  enStock={true}
  esNuevo={false}
/>
```

### Criterios de éxito

- [ ] El componente se llama `TarjetaProducto`.
- [ ] El badge verde aparece solo cuando `enStock` es `true`.
- [ ] El texto rojo aparece solo cuando `enStock` es `false`.
- [ ] El badge "Nuevo" aparece solo cuando `esNuevo` es `true`.
- [ ] Usas el operador `&&` en al menos un lugar.
- [ ] Usas el operador ternario `? :` en al menos un lugar.
- [ ] El código no tiene warnings en la consola del navegador.

---

## Challenge Bonus (Opcional — Para los que quieran ir más lejos)

### Componente `<ProfileCard />` completo

Crea un único componente `ProfileCard` que integre todo lo que practicaste hoy. Debe recibir estas props:

```
nombre       → string
apellido     → string
avatarUrl    → string  (URL de imagen)
ocupacion    → string
seguidores   → número
esVerificado → booleano
```

Y debe renderizar:

- El avatar circular (reutiliza la idea de la kata en vivo).
- El nombre completo (nombre + apellido concatenados con espacio).
- La ocupación.
- El número de seguidores formateado (si tiene más de 1000, mostrar "1.2k" en lugar de "1200").
- **Solo si `esVerificado` es `true`**: un ícono o badge de verificado (puede ser simplemente "✔️ Verificado").

---

## Recursos para estudiar

- 📖 **Documentación oficial de React (en español):** [https://es.react.dev](https://es.react.dev)
- 📖 **Tu primer componente:** [https://es.react.dev/learn/your-first-component](https://es.react.dev/learn/your-first-component)
- 📖 **Pasar props a un componente:** [https://es.react.dev/learn/passing-props-to-a-component](https://es.react.dev/learn/passing-props-to-a-component)
- 📖 **Renderizado condicional:** [https://es.react.dev/learn/conditional-rendering](https://es.react.dev/learn/conditional-rendering)
