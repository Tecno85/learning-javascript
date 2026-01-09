//! Ejercicios: Condicionales

//$ if/else/else if/ternaria

//! 1. Imprime por consola tu nombre si una variable toma su valor.

const myName = 'Ivan Dario Madrid Daza';
// Es buena práctica usar constantes si el valor asignado a esta no va a cambiar

if (myName === 'Ivan Dario Madrid Daza') {
  console.log(myName);
}

//$ Una forma común en la industria

// De esta manera estoy verificando si la variable tiene algún valor, dado que ne la práctica raramente se compara una variable consigo misma como valor fijo. Lo común es verificar si tiene algún valor.

if (myName) {
  console.log(myName);
}

('if (myName)');
// Usando esta forma se verifica que la variable tenga cualquier valor válido (no null, no vacío, no undefined)

let father = 'Ivan';

if (father) {
  console.log(father);
}

//! 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos.

const user = 'Ivan Dario';
const password = '850904';

if (user === 'Ivan Dario' && password === '850904') {
  console.log('El usuario y la contraseña ingresados son correctos.');
} else {
  console.log('El usuario y la contraseña son incorrectos.');
}

//! 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje.

const number = -2;

if (number === 0) {
  console.log('El número es cero.');
} else if (number > 0) {
  console.log('El número es positivo.');
} else {
  console.log('El número es negativo.');
}

//! 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan.

const LEGAL_AGE = 18; // Uso el UPPER_SNAKE_CASE
const userAge = 10;

if (userAge >= LEGAL_AGE) {
  // Uso la constante directamente mas no la edad
  console.log('Usted puede votar');
} else {
  const yearsToAdult = LEGAL_AGE - userAge;
  const yearOrYears = yearsToAdult === 1 ? 'año' : 'años'; // Implemento comparación estricta
  console.log(
    `Usted no puede votar, le faltan ${yearsToAdult} ${yearOrYears} para poder votar`
  );
}

//! 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad.

let age = 19;

let assignedValue = age >= 18 ? 'Adult' : 'Minor';
console.log(assignedValue);

//! 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes".

const monthOfYear = 10;

if (monthOfYear < 1 || monthOfYear > 12) {
  console.log('Mes inválido, Ingresa un valor del 1 al 12');
} else if (monthOfYear >= 3 && monthOfYear <= 5) {
  console.log('Primavera');
} else if (monthOfYear >= 6 && monthOfYear <= 8) {
  console.log('Verano');
} else if (monthOfYear >= 9 && monthOfYear <= 11) {
  console.log('Otoño');
} else {
  console.log('Invierno');
}

//! 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior.

mes = 3;

if (mes < 1 || mes > 12) {
  console.log('Por favor ingresa un número del 1 al 12');
} else if (mes === 2) {
  console.log(`El mes ${mes} tiene 28 días(29 cuando es bisiesto)`);
} else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
  console.log(`El mes ${mes} tiene 30 días`);
} else {
  console.log(`El mes ${mes} tiene 31 días`);
}

//* switch

//! 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.

let selectedLanguage = 'alemán';
let language = selectedLanguage
  .toLowerCase() // Método que convierte cada palabra del srting en minúscula
  .trim() // Método que elimina los espacios extras al inicio o al final de un string
  .normalize('NFD') // Separa la letra y el acento
  .replace(/[\u0300-\u036f]/g, ''); // Borra cualquier marca diacrítica(tildes)
let mensaje;

switch (language) {
  case 'ingles':
    mensaje = 'Welcome!, ¿How are you?';
    break;
  case 'español':
    mensaje = '¡Bienvenido!, ¿Cómo estas?';
    break;
  case 'aleman':
    mensaje = 'Willkommen!, wie geht es dir?';
    break;
  case 'latin':
    mensaje = 'Salve!, quid agis?';
    break;
  default:
    mensaje =
      'Ingresa por favor cualquiera de estos idiomas: Español, Ingles, Alemán o Latín, para recibir un saludo en el idioma seleccionado.';
}

console.log(mensaje);

//! 9. Usa un switch para hacer de nuevo el ejercicio 6.

let month = 10;
let estacion;

switch (month) {
  case 12:
  case 1:
  case 2:
    estacion = 'Invierno';
    break;
  case 3:
  case 4:
  case 5:
    estacion = 'Primavera';
    break;
  case 6:
  case 7:
  case 8:
    estacion = 'Verano';
    break;
  case 9:
  case 10:
  case 11:
    estacion = 'Otoño';
    break;
  default:
    estacion = 'Valor incorrecto, ingresa un número del 1 al 12.';
}

console.log(`Estamos en ${estacion}`);

//! 10. Usa un switch para hacer de nuevo el ejercicio 7 (Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior).

switch (month) {
  case 2:
    message = `El mes ${month} tiene 28 días o 29 en años bisiestos`;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    message = `El mes ${month} tiene 30 días`;
    break;
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    message = `El mes ${month} tiene 31 días`;
    break;
  default:
    message = 'Ingresa un número del 1 al 12';
}

console.log(message);
