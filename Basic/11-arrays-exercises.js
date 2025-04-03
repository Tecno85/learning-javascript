//! Ejercicios: Arrays

//$ 1. Crear un array y acceder a sus elementos.

let hijos = ["Ismael", "Esteban"];

//* Nota: De esta manera se accede al elemento cuando se conoce la cantidad exacta de estos.
console.log(hijos[0]);
console.log(hijos[1]);

//* Nota: De esta manera se accede al último elemento de manera dinámica. Util para emplearlo cuando el array cambia de tamaño.
console.log(hijos[hijos.length - 1]);

//$ 2. Modificar elementos de un array.

let colores = ["rojo", "azul", "verde", "amarillo"];

/*
- Cambia el tercer elemento a morado.
- Agrega "naranja" al final del array.
- Muestra el array actualizado en la consola.
*/

// Cambiando el tercer elemento por el color morado
colores[2] = "morado";
console.log(colores);

// Agregando naranja al final del array.
colores.push("naranja");

// Mostando el array actualizado en la consola.
console.log(colores);

//$ 3. Agregar y eliminar elementos
/*
- Crea un array vacío llmado numeros.
- Usa push() para agregar los números del 1 al 5. 
- Usa pop() para eliminar el último número.
- Muestra el array en la consola. 
*/

// Creación array vacío llamado números.
let numeros = [];

// Números agregados de 1 al 5.
numeros.push(1, 2, 3, 4, 5);
console.log(numeros);

// Uso de pop() para eliminar el último número.
numeros.pop();

// Mostrando el array en la consola.
console.log(numeros);

//$ 4. Ordenar un Array.

// Dado el siguiente array de números:

let numbers = [4, 2, 9, 1, 7, 6];

console.log(numbers.sort());

//$ 5. Buscar un elemento en un array.

let paises = ["Mexico", "Argentina", "España", "Colombia", "Chile"];

console.log(paises.includes("Colombia"));
console.log(paises.includes("Polonia"));
