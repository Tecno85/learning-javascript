/*----------------
  //! Variables
-----------------*/

// var

console.log(helloWorld); // undefined

var helloWorld = "Hola Mundo";
console.log(helloWorld); // Hola Mundo

var helloWorld = "Hello Ivan";
console.log(helloWorld); // Hello Ivan

// let

let helloJavascript = "Hello JavaScript";
console.log(helloJavascript); // Hello JavaScript

helloJavascript = "Hello Visual Studio Code";
console.log(helloJavascript); // Hello Visual Studio Code

// const

const helloWorld3 = "Hola, JavaScript 3!";
console.log(helloWorld3);

//$ Palabras Reservads en JavaScript

/* 
Los nombres de las variables deben ser descriptivos, no pueden empezar con números ni caracteres especiales (excepto guión bajo), no pueden ser iguales a las palabras reservadas en JavaScript, es recomendable usar nombres en ingles y usar la convención camelCase - lowercamelCase. 

//$ ¿Porque no es recomendable usar la palabra reservada var para declarar variables?

No es recomendable usar var para declarar variables en JavaScript por varias razones:

1. Ámbito de función: Las variables declaradas con var tienen un ámbito de función, lo que puede llevar a comportamientos inesperados si se usan dentro de bloques como if o for.

2. Hoisting: Las variables declaradas con var se elevan (hoisting) al inicio de su ámbito, lo que puede causar confusión y errores difíciles de detectar.

3. Reasignación: Las variables declaradas con var pueden ser reasignadas y redeclaradas dentro del mismo ámbito, lo que puede llevar a errores si no se tiene cuidado.

Es preferible usar let y const:

- let tiene un ámbito de bloque y permite reasignación.
- const tiene un ámbito de bloque y no permite reasignación, lo que es útil para declarar constantes.

//$ Diferecias entre declaración, inicilización y asignación de variables

1. Declaración: Definir una variable.
2. Inicialización: Asignar un valor inicial a una variable en el momento de su declaración.
3. Asignación: Dar un valor a una variable, ya sea en el momento de su declaración (inicialización) o posteriormente.
*/
