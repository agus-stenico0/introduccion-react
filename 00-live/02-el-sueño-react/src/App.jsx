import "./App.css";
import TarjetaUsuario from "./components/TarjetaUsuario";

const usuarios = [
  { id: 1, nombre: "Ramiro Tomas", rol: "Desarrollador" },
  { id: 2, nombre: "Carlos López", rol: "Desarrollador" },
  { id: 3, nombre: "Sofía Martínez", rol: "Product Manager" },
];

function Caja({ children, titulo }) {
  return (
    <div className="caja">
      <h3>{titulo}</h3>
      {children}
    </div>
  );
}

function App() {
  return (
    <div>
      {usuarios.map((usuario) => {
        return (
          <TarjetaUsuario
            key={usuario.id}
            nombre={usuario.nombre}
            rol={usuario.rol}
          />
        );
      })}
      {/* Lo usas igual que una etiqueta HTML */}
      {/* <TarjetaUsuario nombre="Ramiro Tomas" style={{ display: "none" }} />
      <TarjetaUsuario nombre="Carlos López" rol="Desarrollador" />
      <TarjetaUsuario nombre="Sofía Martínez" rol="Product Manager" /> */}
      {/* <Caja titulo="Mi caja">
        <TarjetaUsuario nombre="Ramiro Tomas" rol="Desarrollador" />
      </Caja> */}
    </div>
  );
}

export default App;
