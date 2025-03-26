/*----------------
  //! Strings
------------------*/

//? Concatenación

let myName = "Ivan";
let greeting = "Hola, " + myName + "!";
console.log(greeting); // Imprime: Hola, Ivan!.
console.log(typeof greeting); // Imprime: String.

//? Longitud 

console.log(greeting.length); // Imprime: 11 carácteres.

//? Acceso a carácteres

console.log(greeting[0]); // Imprime: H
console.log(greeting[1]); // Imprime: o
console.log(greeting[10]); // Imprime: !

//? Métodos comunes

console.log(greeting.toUpperCase()); // Cambia a mayúscula el texto.
console.log(greeting.toLowerCase()); // Cambia a minúscula el texto.
console.log(greeting.indexOf("Ivan")); // Indice donde se encuentra la palabra "Ivan", indice 6.
console.log(greeting.includes("Hola")); // Valida si está incluida la cadena de texto "Hola".
console.log(greeting.slice(0, 7)); // Toma la posición seleccionada.  
console.log(greeting.replace("Ivan", "Ismael")); // Reemplaza el string por otro.  
console.log(greeting); // 
console.log(greeting); // 

