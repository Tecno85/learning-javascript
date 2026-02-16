/*
    Ejercicio 11: Validación de datos
    Objetivo: Solicitar un número mayor que cero al usuario. 
              Repetir la solicitud mientras ingrese un valor inválido (menor o igual a cero).
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
