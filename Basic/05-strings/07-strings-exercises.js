//! Ejercicios: Strings

// 1. Concatena dos cadenas de texto

let firstName = 'Ivan';
let lastName = 'Madrid';

let fullName = 'Mi nombre es: ' + firstName + ' ' + lastName;
console.log(fullName);

// 2. Muestra la longitud de una cadena de texto

console.log(fullName.length);

// 3. Muestra el primer y el último carácter de un String

console.log(
  `El primer carácter es: ${fullName[0]} y el último es: ${
    fullName[fullName.length - 1]
  }`
);

// 4. Convierte a Mayúscula y a Minúscula un string

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

// 5. Crea una cadena de texto con varias líneas

let variasLineas = `Esta es una
cadena de texto 
con varias 
líneas`;
console.log(variasLineas);

// 6. Interpola el valor de una variable en un String.

let fullName2 = `My name is: ${firstName} ${lastName}`;
console.log(fullName2);

// 7. Reemplaza todos los espacios en blanco de un string por guiones.

console.log(fullName.replaceAll(' ', '_'));

// 8. Comprueba si una cadena de texto tiene una palabra concreta.

console.log(fullName.includes('Ivan'));
console.log(fullName.includes('Carlos'));

// 9. Comprueba si dos Strings son iguales

console.log(fullName === fullName2);
console.log(fullName2 === 'My name is: Ivan Madrid');

// 10. Comprueba si dos strings tienen la misma longitud.

console.log(fullName.length === fullName2.length);

