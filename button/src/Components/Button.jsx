export function Button({ text, color, className}) {
  return (
    <button style={{ backgroundColor: color }} className={className}>{text}</button>

  )

}