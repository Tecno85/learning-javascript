//! Ejercicios: Condicionales

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

let month = "febrero";
month = month.toLowerCase();

if (month == "diciembre" || month === "enero" || month == "febrero") {
  console.log(`${month} pertenece a la estación de Invierno.`);
} else if (month == "marzo" || month === "abril" || month == "mayo") {
  console.log(`${month} corresponde a la estación de Primavera.`);
} else if (month == "junio" || month === "julio" || month == "agosto") {
  console.log(`${month} pertenece a la estación de Verano.`);
} else if (
  month == "septiembre" ||
  month == "octubre" ||
  month == "noviembre"
) {
  console.log(`${month} pertenece a la estación de Otoño.`);
} else {
  console.log(`Valor incorrecto, "Ingresa el nombre de un mes del año."`);
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior.

if (
  month == "enero" ||
  month == "marzo" ||
  month == "mayo" ||
  month == "julio" ||
  month == "agosto" ||
  month == "octubre" ||
  month == "diciembre"
) {
  console.log(`El mes de ${month} tiene 31 días`);
} else if (
  month == "abril" ||
  month == "junio" ||
  month == "septiembre" ||
  month == "noviembre"
) {
  console.log(`El mes de ${month} tiene 30 días`);
} else if (month == "febrero") {
  console.log(`El mes de ${month} tiene 29 días`);
} else {
  console.log(
    "El valor ingresado no corresponde al nombre de los meses del año."
  );
}

//* switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.

//$ Nota: El método .trim(), elimina espacios extras al inicio o al final del texto.

let idioma = "  INGLES   ";
idiomaSeleccionado = idioma.toLowerCase().trim();
let mensaje;

switch (idiomaSeleccionado) {
  case "español":
    mensaje = "Hola, como estas? este idioma es Español.";
    break;
  case "english":
  case "ingles":
  case "inglés":
    mensaje = "Hello, how are you? this language is English.";
    break;
  case "alemán":
  case "aleman":
  case "german":
    mensaje = "Hallo, wie geht es dir? Diese Sprache ist Deutsch.";
    break;
  default:
    mensaje =
      "Ingresa por favor cualquiera de estos idiomas: Español, English o Alemán, para recibir un saludo en el idioma seleccionado.";
}

console.log(mensaje);

// 9. Usa un switch para hacer de nuevo el ejercicio 6.

let mes = 10;
let estacion;

switch (mes) {
  case 12:
  case 1:
  case 2:
    estacion = "Invierno";
    break;
  case 3:
  case 4:
  case 5:
    estacion = "Primavera";
    break;
  case 6:
  case 7:
  case 8:
    estacion = "Verano";
    break;
  case 9:
  case 10:
  case 11:
    estacion = "Otoño";
    break;
  default:
    estacion = "Valor incorrecto, ingresa un número del 1 al 12.";
}

console.log(`Estamos en ${estacion}`);

// 10. Usa un switch para hacer de nuevo el ejercicio 7 (Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior).

let months = "abril";
let selectedMonths = months.toLowerCase().trim();
let numberDays;

switch (selectedMonths) {
  case "enero":
  case "marzo":
  case "mayo":
  case "julio":
  case "agosto":
  case "octubre":
  case "diciembre":
    numberDays = `${selectedMonths} tiene 31 días.`;
    break;
  case "abril":
  case "junio":
  case "septiembre":
  case "noviembre":
    numberDays = `${selectedMonths} tiene 30 días.`;
    break;
  case "febrero":
    numberDays = `${selectedMonths} tiene 29 días.`;
    break;
  default:
    numberDays = "El valor ingresado no corresponde a un mes del año.";
}

console.log(numberDays);
