// Ejercicio 6: Adivinar un número aleatorio
// Crea un juego donde el usuario debe adivinar un número aleatorio entre 1 y 100.

/*
- Crear una variable donde almacene el numeroUsuario
- Crear variable con número correcto
*/

console.log('Juego del Número Secreto');

let numeroSecreto = Math.random() * 100 + 1;
let numeroUsuario;
let contador = 1;

do {
  numeroUsuario = parseInt(
    prompt('Ingrese un número del 1 al 100, para adivinar: ')
  );
  if (numeroSecreto == numeroUsuario) {
    console.log(
      `Felicitaciones acertaste, lo lograste en ${contador} intentos`
    );
  } else if (numeroSecreto < numeroUsuario) {
    console.log('El número secreto es un número menor');
  } else {
    console.log('El número secreto es un número mayor');
  }
  contador++;
} while (numeroSecreto != numeroUsuario);
