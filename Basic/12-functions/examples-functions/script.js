// --- 1. Obtener referencias a los elementos del DOM ---
// Necesitamos controlar el botón y el body de la página.
const botonToggle = document.getElementById("boton-toggle");
const bodyElement = document.body;

// --- 2. La Función sin Parámetros ---
// Su trabajo es alternar el estado. No necesita recibir ninguna información.
// Ella misma busca la información que necesita (si el body tiene la clase o no).
function alternarModoOscuro() {
  // classList.toggle() es la herramienta perfecta para esto.
  // - Si la clase 'modo-oscuro' NO está, la AÑADE.
  // - Si la clase 'modo-oscuro' SÍ está, la QUITA.
  bodyElement.classList.toggle("modo-oscuro");

  // (Opcional pero recomendado) Actualizar el texto del botón para que sea más claro para el usuario.
  // Verificamos si, DESPUÉS del toggle, el modo oscuro está activo.
  if (bodyElement.classList.contains("modo-oscuro")) {
    // Si está activo, el botón debe ofrecer la opción de desactivarlo.
    botonToggle.textContent = "Activar Modo Claro";
  } else {
    // Si no está activo, el botón debe ofrecer la opción de activarlo.
    botonToggle.textContent = "Activar Modo Oscuro";
  }
}

// --- 3. Asociar la función a un evento ---
// Le decimos al botón que, cada vez que alguien haga 'click' sobre él,
// ejecute nuestra función 'alternarModoOscuro'.
botonToggle.addEventListener("click", alternarModoOscuro);
