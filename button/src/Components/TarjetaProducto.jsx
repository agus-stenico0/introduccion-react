export function TarjetaProducto({ nombre, precio, enStock, esNuevo }) {
    return (
        <div className="tarjeta-producto">
            <p>{nombre}</p>
            <p>Precio: {precio}</p>
            <p>
                {enStock ? "✅ Disponible" : "❌ Sin stock"}
            </p>
            <p>
                {esNuevo &&  "🆕 Nuevo"}
            </p>
        </div>
    )
}