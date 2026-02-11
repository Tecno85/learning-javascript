/*
🟢 Ejercicio 11: Validación de datos

(Muy común en formularios y backend)

👉 Simula que un usuario debe ingresar un número mayor que 0.
El programa debe seguir pidiendo el número mientras sea menor o igual a 0.

📌 Esto se usa todo el tiempo para validar entradas.
*/
// let numero = -1;
// let numeroValido = false;

// while (numero <= 0) {
//   console.log(`Ingresa por favor un número mayor que cero (0)`);
//   break;
// }

/*
🟡 Ejercicio 12: Buscar un valor en un array

(Lectura de datos, logs, listas, etc.)

👉 Dado un array de números, recórrelo con while y detente cuando encuentres el número 0.
📌 Muy común cuando buscas un valor específico y paras al encontrarlo.

*/

// const myArray = [1, 2, 3, 4, 7, 5];
// let i = 0; // Contador e Indice

// while (i < myArray.length) {
//   if (myArray[i] === 0) {
//     console.log(i);
//     break;
//   }
//   i++;
// }

/**
Ejercicio 13 (variante)

Dado un array de números, recórrelo con while y detente cuando 
encuentres el número 0. Muestra la posición donde lo encontraste. 
Si el array no contiene el número 0, muestra un mensaje indicándolo.

Ejemplo 1:
Array: [1, 4, 6, 8, 0, 9, 1, 3]
Salida: "Número encontrado en la posición 4"

Ejemplo 2:
Array: [1, 4, 6, 8, 9, 1, 3]
Salida: "Este array no posee un número 0"

*/

// const myArray1 = [1, 4, 6, 8, 9, 1, 3];
// let contador = 0; // Contador e Indice
// let encontrado = false; // Banderas (flags) o interruptores

// while (i < myArray1.length) {
//   // <- i como contador de vueltas
//   if (myArray1[i] === 0) {
//     // <- i como índice del array
//     console.log(`Número encontrado en la posición ${contador}`); // <- i como posición
//     encontrado = true;
//     break;
//   }
//   contador++;
// }
// if (!encontrado) {
//   console.log('Este array no posee un número 0');
// }

// Ejercicio 14 (variante)

// Dado un array de números, recórrelo con while y encuentra TODAS las
// posiciones donde aparece el número 0. Muestra todas las posiciones
// encontradas. Si no hay ningún 0, muestra un mensaje indicándolo.

// Ejemplo:
// Array: [1, 0, 6, 0, 9, 0, 3]
// Salida: "0 encontrado en las posiciones: 1, 3, 5"

// Array: [1, 2, 3, 4, 5]
// Salida: "El número 0 no fue encontrado"

/* 


🟡 Ejercicio 15: Contar hasta que se cumpla una condición

(Procesos que esperan algo externo)

👉 Genera números aleatorios entre 0 y 1 usando Math.random()
Cuenta cuántos intentos se necesitan hasta que salga un número mayor a 0.8.

📌 Simula procesos de espera o reintentos.
*/

/*
🔵 Ejercicio 16: Reintentos con límite

(MUY usado en la industria)

👉 Simula un login con máximo 3 intentos.
Mientras el usuario no ingrese la contraseña correcta y queden intentos, el sistema debe seguir intentando.

📌 Este patrón se usa en autenticación, APIs, conexiones, etc.



*/


function ejemplo() {
    if (true) {
        let mensaje = "Hola";
    }
    console.log(mensaje); // ❌ ERROR: mensaje is not defined
}
ejemplo();