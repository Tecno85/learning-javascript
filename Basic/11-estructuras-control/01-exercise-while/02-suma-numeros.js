/*
  Ejercicio 2: Calcula la suma de los números del 1 al 10 usando while y muestra el resultado.
  Patrón: Acumulador
  Fórmula verificable: n(n+1)/2 = 10(11)/2 = 55
*/

let suma = 0; // Acumulador inicializado en 0
let counter = 1; // Primer número a sumar

// Bucle: suma cada número del 1 al 10
while (counter <= 10) {
  suma += counter; // Acumula el valor actual
  counter++; // Pasa al siguiente número
}

console.log(`Total: ${suma}`); // Muestra 55
