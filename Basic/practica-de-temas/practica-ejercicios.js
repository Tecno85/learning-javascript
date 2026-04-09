// Ejercicio 5: Cuenta regresiva
// Crear un programa que haga una cuenta regresiva desde un número dado hasta 0.

console.log('Cuenta regresiva');
let numeroIngresado = parseInt(prompt('Ingrese un número: '));

if (isNaN(numeroIngresado) || numeroIngresado < 0) {
  console.log('Ingresa un número mayor a cero');
} else {
  do {
    console.log(`Numero: ${numeroIngresado}`);
    numeroIngresado--;
  } while (numeroIngresado >= 0);
}
