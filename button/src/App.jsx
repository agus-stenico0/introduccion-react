import './App.css'
import { Button } from './Components/Button'
import { TarjetaProducto } from './Components/TarjetaProducto'
function App() {

  return (
    <>
      <TarjetaProducto nombre='Mouse' precio={8} enStock={true} esNuevo={false}/>
      <TarjetaProducto nombre='Gabinete' precio={8} enStock={false} esNuevo={true}/>
      <TarjetaProducto nombre='Monitor' precio={8} enStock={false} esNuevo={true}/>
      <Button className={'button'} text="Click me" color="red" />
      <Button className={'button'} text="Guardar" color="#16a34a" />
      <Button className={'button'} text="Cancelar" color="#6b7280" />
      <Button className={'button'} text="Enviar" color="#3b82f6" />
    </>
  )
}

export default App
