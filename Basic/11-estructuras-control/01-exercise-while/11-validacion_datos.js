/*
    Ejercicio 11: Validación de datos
    Objetivo: Simula que un usuario debe ingresar un número mayor que cero. El programa debe seguir pidiendo el número mientras sea menor o igual a cero.
    Concepto: Bucle while con validación
*/

const prompt = require('prompt-sync')();

let numero;

// Bucle infinito hasta obtener un número válido
while (true) {
  numero = Number(prompt('Ingresa un número mayor que 0: '));

  if (numero > 0) {
    break; // Sale del bucle (número válido)
  }

  console.log('❌ El número debe ser mayor que 0. Intenta de nuevo.');
}

console.log(`✅ Número válido aceptado: ${numero}`);
