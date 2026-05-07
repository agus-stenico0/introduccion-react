const usuarios = ["Juan", "Ana", "Pedro"];
const contenedor = document.getElementById("app");

usuarios.forEach((nombre) => {
  // 1. Crear elementos uno por uno (Imperativo)
  const card = document.createElement("div");
  card.className = "tarjeta";

  const titulo = document.createElement("h2");
  titulo.textContent = "Usuario";

  const nombreP = document.createElement("p");
  nombreP.textContent = nombre;

  // 2. Ensamblar todo (Un dolor de cabeza)
  card.appendChild(titulo);
  card.appendChild(nombreP);
  contenedor.appendChild(card);
});
