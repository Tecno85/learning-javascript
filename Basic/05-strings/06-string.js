/*-----------------
  //! Strings
------------------*/

//$ Concatenación

let myName = "Ivan";
let greeting = "Hola, " + myName + "!";
console.log(greeting); // Imprime: Hola, Ivan!.
console.log(typeof greeting); // Imprime: String.

//$ Longitud

console.log(greeting.length); // Imprime: 11 carácteres.
// .length es una propiedad que se aplica a la variable (objeto) "greeting"

//$ Acceso a carácteres

console.log(greeting[0]); // Imprime: H
console.log(greeting[1]); // Imprime: o
console.log(greeting[10]); // Imprime: !

//$ Métodos comunes

console.log(greeting.toUpperCase()); // Cambia a mayúscula el texto.
console.log(greeting.toLowerCase()); // Cambia a minúscula el texto.
console.log(greeting.indexOf("Ivan")); // Indice donde se encuentra la palabra "Ivan", indice 6.
console.log(greeting.includes("Hola")); // Valida si está incluida la cadena de texto "Hola".
console.log(greeting.slice(0, 7)); // Toma la posición seleccionada.
console.log(greeting.replace("Ivan", "Ismael")); // Reemplaza el string por otro.

//$ Template literals (Plantillas literales): Nos permite interpolar variables y utilizar string de varias líneas.

// Este es un ejemplo de "templates literals", sin interpolación de variables
let message = `Hola, 
este es
mi curso
de JavaScript`;
console.log(message);

// Este es un ejemplo de "templates literals", con interpolación de variables
console.log(`Hola, ${myName}!`);

let email = "tecno85@gmail.com";
console.log(`Hola ${myName}, tu email es: ${email}`);

/* 
//$ - backtics
Se usan para crear "templates literals"(plantillas de cadenas de texto) y tiene varias ventajas sobre las comillas normales:
*/

//$ - Interpolación de variables:
const nombre = "Carlos";
const edad = 25;

// Con backticks puedemos insertar variables fácilmente
const mensaje = `Hola, soy ${nombre} y tengo ${edad} años`;
console.log(mensaje); // "Hola, soy Carlos y tengo 25 años"

// Sin backticks tendríamos que concatenar así:
const mensajeViejo = "Hola, soy " + nombre + " y tengo " + edad + " años";

//$ - Strings multilinea:
// Con backticks podemos escribir en varias líneas sin problemas
const texto = `Esta es la primera línea
Esta es la segunda línea
Esta es la tercera línea`;

// Sin backticks tendrías que usar \n
const textoViejo = "Primera línea\nSegunda línea\nTercera línea";

//$ - Expresiones dentro del texto:
const precio = 100;
const impuesto = 0.19;

const total = `El total a pagar es: ${precio * (1 + impuesto)} pesos`;
console.log(total); // "El total a pagar es: 119 pesos"