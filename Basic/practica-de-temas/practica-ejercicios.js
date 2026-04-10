// Ejercicio 5: Cuenta regresiva
// Crear un programa que haga una cuenta regresiva desde un número dado hasta 0.

let numeroUsuario = Number(prompt('Ingrese un número entero mayor a cero: '));

if (
  isNaN(numeroUsuario) ||
  !Number.isInteger(numeroUsuario) ||
  numeroUsuario <= 0
) {
  console.log('Ingrese un número entero mayor a cero');
} else {
  console.log('Cuenta Regresiva');
  do {
    console.log(numeroUsuario);
    numeroUsuario--;
  } while (numeroUsuario >= 0);
  console.log('Vamos :)');
}
