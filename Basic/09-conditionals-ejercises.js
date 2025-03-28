//! Condicionales

//* if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor.

let nombre = "Ivan";

if (nombre == "Ivan") {
  console.log("Ivan");
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos.

let usuario = "Ismael";
let contraseña = 850904;

if (usuario == "Ismael" && contraseña == 850904) {
  console.log("El usuario y la contraseña ingresada son correctos.");
} else {
  console.log("El usuario o la contraseña ingresada no son correctos.");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje.

let number = -2;

if (number === 0) {
  console.log("El número ingresado es igual a Cero.");
} else if (number > 0) {
  console.log("El número ingresado es positivo.");
} else {
  console.log("El número ingresado es negativo.");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan.

let age = 10;

if (age >= 18) {
  console.log("La persona puede votar.");
} else {
  let missingYears = 18 - age;
  console.log(`Le faltan ${missingYears} años para poder votar`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad.

let edad = 10;

let ageDefine = edad >= 18 ? "Eres un Adulto" : "Eres menor de Edad";
console.log(ageDefine);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes".



// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior.

//* switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.

// 9. Usa un switch para hacer de nuevo el ejercicio 6.

// 10. Usa un switch para hacer de nuevo el ejercicio 7.
