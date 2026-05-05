# Kata en Vivo — Clase 01: Componente `<Avatar />`

> **Duración estimada:** 20 minutos  
> **Modalidad:** El instructor hace pair-programming con la clase. Todos codean al mismo tiempo.  
> **Objetivo:** Crear un componente `<Avatar />` que reciba props y renderizarlo varias veces.

---

## El desafío

Vas a construir un componente `<Avatar />` desde cero, usando **solo lo que aprendiste en la teoría de hoy**.

---

## Requisitos del componente

El componente `Avatar` debe:

1. **Recibir dos props:**
   - `url` (string): la URL de la imagen de perfil del usuario.
   - `size` (número): el tamaño en píxeles del avatar (ancho y alto).

2. **Renderizar** una imagen circular (`border-radius: 50%`) con esas dimensiones.

3. **Ser renderizado 3 veces** dentro de `App.jsx`, con distintos valores de `url` y `size`.

---

## Paso a paso

### Paso 1 — Crea el componente `Avatar`

Dentro de tu `App.jsx`, antes del componente `App`, escribe la función `Avatar`:

```jsx
function Avatar({ url, size }) {
  // Tu código aquí
}
```

El componente debe retornar una etiqueta `<img>` con:

- `src` apuntando a la prop `url`
- `width` y `height` iguales a la prop `size`
- Un estilo que lo haga circular: `borderRadius: '50%'`
- Un borde para que se vea bien: `border: '3px solid #6366f1'`
- Un `alt` descriptivo: `"Avatar de usuario"`

---

### Paso 2 — Usa el componente 3 veces en `App`

Dentro del `return` de tu componente `App`, renderiza `<Avatar />` tres veces con estos valores:

| Instancia | `url`                             | `size` |
| --------- | --------------------------------- | ------ |
| Avatar 1  | `https://i.pravatar.cc/150?img=1` | `80`   |
| Avatar 2  | `https://i.pravatar.cc/150?img=2` | `120`  |
| Avatar 3  | `https://i.pravatar.cc/150?img=3` | `60`   |

> **Tip:** El servicio `https://i.pravatar.cc` genera fotos de perfil de prueba de forma gratuita. Solo cambia el número al final para obtener distintas fotos.

---

### Paso 3 — Resultado esperado

Al terminar, en tu navegador deberías ver **tres avatares circulares** de distintos tamaños, uno debajo del otro (o en fila si los envuelves en un `<div>` con `display: flex`).

---

## Preguntas para reflexionar después de la kata

1. ¿Qué pasaría si no le pasas la prop `size`? ¿Cómo harías para que tenga un valor por defecto de `50`?
2. ¿Podrías agregar una prop `borde` (string) que permita cambiar el color del borde sin modificar el componente?
3. ¿Qué pasa si la URL está rota? ¿Cómo podrías manejar ese error con el atributo `onError` de la imagen?
