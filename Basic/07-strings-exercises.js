//! Clase 22 - Ejercicios: Strings

// 1. Concatena dos cadenas de texto.

let firstName = "Esteban";
let lastName = "Madrid";

console.log(`Mi nombre completo es, "${firstName} ${lastName}"`);

// 2. Muestra la longitud de una cadena de texto.

let fullName = `Mi hijo se llama Esteban`;
console.log(fullName.length);

// 3. Muestra el primer y último carácter de un string.

console.log(fullName[0]);
console.log(fullName[fullName.length - 1]);

// 4. Convierte a mayúsculas y minúsculas un string.

let minuscula = "ismael";
let mayuscula = "ESTEBAN";

console.log(minuscula.toUpperCase());
console.log(mayuscula.toLowerCase());

// 5. Crea una cadena de texto en varias líneas.

console.log(`Esta es 
una cadena de 
texto de varias
 líneas.`);

// 6. Interpola el valor de una variable en un string.

console.log(`Mi hijo menor se llama ${firstName} ${lastName}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones.

let hijoMayor = `Mi hijo mayor se llama Ismael Madrid Gamez`;
console.log(hijoMayor.replace(/ /g, "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta.

console.log(hijoMayor.includes("Ivan"));

// 9. Comprueba si dos strings son iguales.

console.log(firstName === "Esteban");

// 10. Comprueba si dos strings tienen la misma longitud

console.log(firstName.length == lastName.length);
