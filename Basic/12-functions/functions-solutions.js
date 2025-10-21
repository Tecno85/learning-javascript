// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma.

//! Función con parámetros: Es reutilizable o flexible cuando se aceptan valores desde afuera.

function suma(a, b) {
  return a + b;
}

let resultadoSuma = suma(10, 5);

//! Función Anónima

let sumarNumeros = function (a, b) {
  return a + b;
};

sumarNumeros(5, 10);
// En este caso solo retorna el resultado de la operación. No se esta haceindo nada con el valor

let resultadoAnonima = sumarNumeros(5, 10);
// En este caso guardo el valor en una variable para darle uso actualmente o en un futuro

//! Array Function o Función Flecha

let suma = (a, b) => a + b;
// Cuando se retorna la operación no es necesario colocar llaves y la palabre reservada "return"

let resultadoFlecha = suma(10, 20);

//! Imprimiendo resultados de Funciones por consola

console.log(`Resultado Función con Parámetros: ${resultadoSuma}`);
console.log(`Resultado Función Anónima: ${resultadoAnonima}`);
console.log(`Resultado Función Flecha: ${resultadoFlecha}`);

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

let arrayDeNumeros = [12, 10, 23, 45];

function obtenerNumeroMayor(listaDeNumeros) {
  return Math.max(...listaDeNumeros);
}

let numeroMayor = obtenerNumeroMayor(arrayDeNumeros);
console.log(numeroMayor);