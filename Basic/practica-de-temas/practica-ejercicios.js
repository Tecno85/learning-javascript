// Ejercicio 2: Suma de números ingresados
// Simula un programa que pida números al usuario hasta que ingrese un número negativo, luego muestra la suma total.

let numeroIngresado;
let suma = 0;

do {
  numeroIngresado = parseInt(prompt('Ingrese un número para sumar: '));
  if (numeroIngresado >= 0) {
    suma += numeroIngresado;
  }
} while (numeroIngresado >= 0);

console.log(`La suma es: ${suma}`);
