/*-------------
  //! Arrays
---------------*/

/* 
Arrays: Son estructuras de datos(objeto especializado) que permiten almacenar múltiples valores(datos) en una sola variable. Son como listas que pueden contener diferentes tipos de datos, como números, strings, booleanos y otros arrays. 

Estructuras de Datos: Permite almacenar varios valores en una variable.

Ejemplo:
*/

let frutas = ["Manzanas", "Bananas", "Naranjas"];
console.log(frutas[0]); // Imprime Manzanas
console.log(frutas.length()); // Imprime la cantidad de elementos (3)

/* 
Características Principales:
- Se definen usando [] (corchetes).
- Cada elemento tiene un índice, comenzando desde 0 (ordenado).
- Se puede modificar y recorrer fácilmente. 
*/

// Declaración

let myArray = []; // se recomienda usar este tipo de sintaxis
let myOtherArray = new Array();

console.log(myArray); // Imprime un array vacio []
console.log(myOtherArray); // Imprime un array vacio []

// Inicialización

myArray = ["Ivan", true, 4];
myOtherArray = new Array("Ivan", true, 4);
console.log(myArray);
console.log(myOtherArray);

// Métodos Comunes: Los métodos comunes son el push() y el pop()

myArray = [];

// push: Agrega elementos al final del array.

myArray.push("Ivan");
myArray.push("Madrid");
myArray.push("Daza");

console.log(myArray);

// pop: Elimina el último elemento del array y lo devuelve.

myArray.pop();
console.log(myArray);
console.log(myArray.pop());
console.log(myArray);

// shift: Elimina el primer elemento del array y lo devuelve.

myArray.push("Esteban");
myArray.push("Ismael");

console.log(myArray);

console.log(myArray.shift());
console.log(myArray);

//unshift: Agrega uno o más elementos al inicio del array.

myArray.unshift("Madrid", "Gamez");
console.log(myArray);

// length: Indica la longitud del array

console.log(myArray.length);

//clear: Elimina el contenido del array.

myArray = [];
console.log(myArray);

// slice: Se usa para extraer una parte de un array sin modificar el original.

myArray.push("Ivan", "Madrid", 39, true);

let myNewArray = myArray.slice(1, 3);

console.log(myArray);
console.log(myNewArray);

// splice: Modifica un array agregando, eliminando o reemplazando elementos de manera flexible.

myArray = ["Ivan", "Madrid", 39, true, "Ismael"];
console.log(myArray);

myArray.splice(2, 1);
console.log(myArray);
