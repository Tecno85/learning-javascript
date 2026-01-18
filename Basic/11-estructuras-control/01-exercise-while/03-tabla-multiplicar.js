/*
  Ejercicio 3: Tabla de multiplicar del 5
  Objetivo: Practicar bucles while con multiplicación
  Salida: Tabla del 5 (del 1 al 10)
*/

let number = 5; // Número base de la tabla
let multiplier = 1; // Multiplicador (1 al 10)

console.log('Tabla de Multiplicar del Número 5');

// Itera del 1 al 10 mostrando cada multiplicación
while (multiplier <= 10) {
  console.log(`${number} * ${multiplier} = ${number * multiplier}`);
  multiplier++;
}
