/* 
    Ejercicio 9: Suma de Dígitos
    Objetivo:  Calcúla la suma de dígitos de un número
    Salida: 123 => 1+2+3 = 6
*/

let suma = 0; // Acumulador
let numero = 123; // Número a procesar

while (numero >= 1) {
  suma += numero % 10; // Extrae el último dígito y lo suma
  numero = Math.floor(numero / 10); // Elimina el último dígito
}

console.log(suma);

// Inicio:

// suma = 0, numero = 123

// Iteración 1:

// suma += 123 % 10 → suma = 0 + 3 = 3
// numero = Math.floor(123 / 10) → numero = 12

// Iteración 2:

// suma += 12 % 10 → suma = 3 + 2 = 5
// numero = Math.floor(12 / 10) → numero = 1

// Iteración 3:

// suma += 1 % 10 → suma = 5 + 1 = 6
// numero = Math.floor(1 / 10) → numero = 0

// Resultado: suma = 6 ✓
