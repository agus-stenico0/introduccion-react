// 1. El nombre SIEMPRE empieza con MAYÚSCULA
import { obtenerIniciales } from "../utils/inciales";

//    (React distingue tags HTML <div> de componentes <MiComponente>)
function TarjetaUsuario({ nombre, rol, style }) {
  // 3. SIEMPRE retorna JSX (o null si no quiere renderizar nada)
  return (
    <div className={`tarjeta`} style={style}>
      <div className="avatar">{obtenerIniciales(nombre)}</div>
      <h2>{nombre}</h2>
      <p>Rol: {rol}</p>
    </div>
  );
}

export default TarjetaUsuario;
