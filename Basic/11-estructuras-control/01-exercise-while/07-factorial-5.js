/* 
    Ejercicio 7: Factorial
    Objetivo:  Calcúla el factorial de 5 usando while
    Salida: 5! = 5×4×3×2×1 = 120
*/

let multiplicador = 2; // Contador
let factorial = 1; // Acumulador del resultado

// Calcula el factorial multiplicando de 2 a 5
while (numero <= 5) {
  factorial *= numero;
  numero++;
}
console.log(factorial); // Muestra: 120