// ============================================================
// CLASE 01 — Práctico Guiado
// Tema: Componentes y Props en React
// ============================================================
// INSTRUCCIONES PARA EL ALUMNO:
//   1. Crea un proyecto con: npm create vite@latest . -- --template react
//   2. Reemplaza el contenido de src/App.jsx con este archivo.
//   3. Corre el proyecto con: npm run dev
//   4. Observa cómo los componentes Header y Card reciben y usan props.
// ============================================================

// ------------------------------------------------------------
// COMPONENTE: Header
// ------------------------------------------------------------
// Recibe una prop "titulo" (string) y la muestra en un <h1>.
// Es el encabezado principal de nuestra aplicación.

function Header({ titulo }) {
  return (
    <header
      style={{
        backgroundColor: "#1e293b",
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ color: "#f8fafc", fontSize: "1.5rem", margin: 0 }}>
        {titulo}
      </h1>
      <nav>
        <a
          href="#"
          style={{
            color: "#94a3b8",
            textDecoration: "none",
            marginLeft: "1rem",
          }}
        >
          Inicio
        </a>
        <a
          href="#"
          style={{
            color: "#94a3b8",
            textDecoration: "none",
            marginLeft: "1rem",
          }}
        >
          Acerca
        </a>
        <a
          href="#"
          style={{
            color: "#94a3b8",
            textDecoration: "none",
            marginLeft: "1rem",
          }}
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}

// ------------------------------------------------------------
// COMPONENTE: Card
// ------------------------------------------------------------
// Recibe las props "nombre" (string) y "edad" (número).
// Muestra una tarjeta de usuario con esa información.
// Nota cómo en App.jsx pasamos edad={25} con llaves (número),
// y nombre="Juan" con comillas (string).

function Card({ nombre, edad }) {
  // Calculamos el año de nacimiento a partir de la edad.
  // Esta es lógica JavaScript normal dentro del componente.
  const anoActual = new Date().getFullYear();
  const anoNacimiento = anoActual - edad;

  // Determinamos si es mayor de edad con un booleano
  const esMayor = edad >= 18;

  return (
    <div
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
        padding: "1.5rem",
        width: "220px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.07)",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      {/* Avatar con la inicial del nombre */}
      <div
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          backgroundColor: "#6366f1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "1.8rem",
          fontWeight: "bold",
        }}
      >
        {/* Regla de JSX #3: usamos {} para evaluar JS */}
        {nombre.charAt(0).toUpperCase()}
      </div>

      <h2 style={{ margin: 0, fontSize: "1.1rem", color: "#1e293b" }}>
        {nombre}
      </h2>

      <p style={{ margin: 0, color: "#64748b", fontSize: "0.9rem" }}>
        {edad} años — Nacido en {anoNacimiento}
      </p>

      {/* Renderizado condicional con operador ternario */}
      <span
        style={{
          padding: "0.2rem 0.7rem",
          borderRadius: "999px",
          fontSize: "0.75rem",
          fontWeight: "600",
          backgroundColor: esMayor ? "#dcfce7" : "#fee2e2",
          color: esMayor ? "#16a34a" : "#dc2626",
        }}
      >
        {esMayor ? "Mayor de edad" : "Menor de edad"}
      </span>
    </div>
  );
}

// ------------------------------------------------------------
// COMPONENTE PRINCIPAL: App
// ------------------------------------------------------------
// Este es el componente raíz de nuestra aplicación.
// Importa y usa los componentes Header y Card.
// Observa cómo se pasan las props:
//   - titulo="Appwise"  → string, entre comillas
//   - nombre="Juan"     → string, entre comillas
//   - edad={25}         → número, entre llaves {}

function App() {
  return (
    // Regla de JSX #2: un único elemento raíz
    <div
      style={{
        fontFamily: "sans-serif",
        minHeight: "100vh",
        backgroundColor: "#f1f5f9",
      }}
    >
      {/* Usamos el componente Header y le pasamos la prop "titulo" */}
      <Header titulo="Appwise" />

      {/* Sección principal */}
      <main style={{ padding: "2rem" }}>
        <h2 style={{ color: "#334155", marginBottom: "1.5rem" }}>
          Directorio de Usuarios
        </h2>

        {/* Contenedor con las tarjetas en fila */}
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {/* Usamos el componente Card con distintas props cada vez */}
          {/* Esto demuestra la REUTILIZACIÓN de componentes */}
          <Card nombre="Juan" edad={25} />
          <Card nombre="Sofía" edad={17} />
          <Card nombre="Carlos" edad={32} />
        </div>

        {/* Bloque explicativo para el alumno — se puede borrar */}
        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            backgroundColor: "#fef9c3",
            borderLeft: "4px solid #eab308",
            borderRadius: "4px",
          }}
        >
          <strong>📚 Nota para el alumno:</strong>
          <p style={{ margin: "0.5rem 0 0" }}>
            Observa que el componente <code>&lt;Card /&gt;</code> es el mismo en
            los tres casos. Solo cambian las <strong>props</strong> (
            <code>nombre</code> y <code>edad</code>). React renderiza una
            tarjeta diferente para cada uno. Eso es la reutilización de
            componentes.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
