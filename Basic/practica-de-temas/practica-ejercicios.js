//! Ejercicios: Bucle "while"

// Ejercicio 1: Contar del 1 al 10: Escribe un programa que imprima los números del 1 al 10 usando un bucle while.
// let i = 1;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// Ejercicio 2: Sumar los primeros 10 números naturales: Calcula la suma de los números del 1 al 10 usando while y muestra el resultado.

// let i = 1;
// let contador = 0;

// while (i <= 10) {
//   contador += i;
//   i++;
// }
// console.log(`La suma de los números es: ${contador}`);

// Ejercicio 3: Tabla de multiplicar del 5: Muestra la tabla de multiplicar del 5 (del 1 al 10) usando un bucle while.

// const numero = 5;
// let i = 1;

// console.log(`Tabla de Multiplicar del número ${numero}`);

// while (i <= 10) {
//   console.log(`${numero} x ${i} = ${numero * i}`);
//   i++;
// }

// Ejercicio 4: Cuenta regresiva: Muestra una cuenta regresiva del 10 al 1 y luego imprime "¡Despegue!".

// let i = 10;

// while (i >= 1) {
//   console.log(i);
//   i--;
// }
// console.log('¡Despegue!');

// Ejercicio 5: Números pares: Muestra todos los números pares del 2 al 20 usando un bucle while.

// let numeroPar = 2;

// while (numeroPar <= 20) {
//   console.log(numeroPar);
//   numeroPar += 2;
// }

// Ejercicio 6: Múltiplos de 3: Imprime todos los múltiplos de 3 que sean menores a 30.

// let multiplo = 3;

// while (multiplo < 30) {
//   console.log(multiplo);
//   multiplo += 3;
// }

// Ejercicio 7: Factorial: Calcula el factorial de 5 (5! = 5×4×3×2×1 = 120) usando un bucle while.
/*
let numero = 5; // Número a calcular (contador)
let factorial = 1; // Resultado acumulado (acumulador del resultado)

while (numero >= 1) {
  factorial *= numero;
  numero--;
}

console.log(factorial);
*/

// Ejercicio 8: Serie Fibonacci: Muestra los primeros 8 números de la serie Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13

let i = 0;
let primerNumero = 0;
let segundoNumero = 1;
let tercerNumero = 0;

while (i <= 7) {
  console.log(primerNumero);
  i++;
  tercerNumero = primerNumero + segundoNumero;
  primerNumero = segundoNumero;
  segundoNumero = tercerNumero;
}

// Ejercicio 9: Suma de dígitos: Calcula la suma de los dígitos de un número (por ejemplo, para 123: 1+2+3 = 6)

// Ejercicio 10: Divisibilidad: Encuentra el primer número que sea divisible tanto por 7 como por 11

/*

Ejercicio 1: Contador controlado

(Base de muchos procesos internos)

👉 Imprime los números del 1 al 5 usando while.

📌 Se usa para tareas repetitivas controladas (reintentos, límites, etc.).

🟢 Ejercicio 2: Validación de datos

(Muy común en formularios y backend)

👉 Simula que un usuario debe ingresar un número mayor que 0.
El programa debe seguir pidiendo el número mientras sea menor o igual a 0.

📌 Esto se usa todo el tiempo para validar entradas.

🟡 Ejercicio 3: Buscar un valor en un array

(Lectura de datos, logs, listas, etc.)

👉 Dado un array de números, recórrelo con while y detente cuando encuentres el número 0.

📌 Muy común cuando buscas un valor específico y paras al encontrarlo.

🟡 Ejercicio 4: Contar hasta que se cumpla una condición

(Procesos que esperan algo externo)

👉 Genera números aleatorios entre 0 y 1 usando Math.random()
Cuenta cuántos intentos se necesitan hasta que salga un número mayor a 0.8.

📌 Simula procesos de espera o reintentos.

🔵 Ejercicio 5: Reintentos con límite

(MUY usado en la industria)

👉 Simula un login con máximo 3 intentos.
Mientras el usuario no ingrese la contraseña correcta y queden intentos, el sistema debe seguir intentando.

📌 Este patrón se usa en autenticación, APIs, conexiones, etc.

*/
