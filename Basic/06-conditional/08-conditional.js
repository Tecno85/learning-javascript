/*--------------------------------------------
   //! Conditionals (Estructuras de Control)
----------------------------------------------*/

//! if (si)

//$ Cuando utilizar el if: Cuando queremos evaluar una condición y ejecutar un bloque de código si esa condición es verdadera.

let age = 39;

if (age == 37) {
  console.log('La edad es 39');
}

//! else (si no)

//$ Cuando utilizar el else: Cuando queremos ejecutar un bloque de código si la condición del if es falsa.

if (age == 37) {
  console.log('La edad es 39');
} else {
  console.log('La edad no es 37');
}

//! else if (si no, si)

//$ Cuando utilizar el else if: Cuando queremos evaluar múltiples condiciones y ejecutar un bloque de código específico si una de esas condiciones es verdadera.

age = 37;

if (age == 37) {
  console.log('La edad es 37');
} else if (age < 18) {
  console.log('Es menor de edad');
} else if (age >= 18) {
  console.log('Es mayor de edad');
} else {
  console.log('La edad no es 37, ni es menor de edad');
}

//! Operador Ternario

//$ Cuando utilizar el operador ternario: Es una forma abreviada de escribir una expresión condicional. Se utiliza para asignar un valor basado en una condición. Además me permite asignar el valor obtenido del operador ternario a una variable o constante.

const message = age == 37 ? 'La edad es 37' : 'La edad no es 37';
console.log(message);

//! Switch

/* 
switch es un condicional, porque evalúa una condición y ejecuta el código según el resultado, pero no repite nada. Ejemplo de condicionales: if, else if, else, switch y Operador ternario ? : - Ejecutan el código una sola vez según una condición. 

Es una alternativa a anidar con if else. Comparar una unica variable con varios valores posibles. Si la variable que se revisa es la misma se utiliza el switch.

Cuando utilizar el switch: Cuando queremos comparar una variable con múltiples valores posibles y ejecutar un bloque de código específico para cada valor.
*/

let day = 8;
let dayName;

switch (day) {
  case 0:
    dayName = 'Lunes';
    break;
  case 1:
    dayName = 'Martes';
    break;
  case 2:
    dayName = 'Miercoles';
    break;
  case 3:
    dayName = 'Jueves';
    break;
  case 4:
    dayName = 'Viernes';
    break;
  case 5:
    dayName = 'Sabado';
    break;
  case 6:
    dayName = 'Domingo';
    break;
  default:
    dayName = 'Ingresa un valor del 1 al 6.';
}

console.log(dayName);

//! CUANDO USAR switch

// 1. Necesito comparar una variable contra varios(+4) valores específicos: */

let dia = 1;
switch (dia) {
  case 1:
    return 'Lunes';
  case 2:
    return 'Martes';
  case 3:
    return 'Miercoles';
  // más casos
}

/*
 2. En casos discretos y finitos: Ideal para opciones limitadas y predecibles:
- Días de la semana
- Mese del año
- Estados de un proceso (pendiente, aprobado, rechazado)
- Tipos de usuarios (administrador, editor, viewer)
- Código de respuesta HTTP 
 */

let estadoPedido = 'entregado';
switch (estadoPedido) {
  case 'pendiente':
    cosole.log('Tu pedido está en proceso');
    break;
  case 'enviado':
    console.log('Tu pedidio va en camino');
    break;
  case 'entregado':
    console.log('Tu pedido fue entregado');
    break;
}

// 3. Cuando necesite agrupar varios casos: Switch permite que múltiples casos ejecuten el mismo código:

let mes = 4;

switch (mes) {
  case 12:
  case 1:
  case 2:
    console.log('Invierno');
    break;
  case 3:
  case 4:
  case 5:
    console.log('Primavera');
    break;
}

//! CUANDO NO USAR Switch:

// 1. Comparaciones complejas o rangos

// Mal con switch
switch (true) {
  case edad < 18:
    console.log('Menor');
    break;
  case edad >= 18 && edad < 65:
    console.log('Adulto');
    break;
}

// Mejor con if-else

if (edad < 18) {
  console.log('Menor');
} else if (edad < 65) {
  console.log('Adulto');
}

// 2. Condiciones con diferentes variables

// Confuso con switch
switch (true) {
  case temperatura > 30 && humedad > 70:
    console.log('Caluroso y húmedo');
    break;
}

// Más claro con if
if (temperatura > 30 && humedad > 70) {
  console.log('Caluroso y húmedo');
}

// 3. Cuando son pocos casos u opciones(solo 2-3)

// Innecesario
switch (activo) {
  case true:
    return 'Activo';
  case false:
    return 'Inactivo';
}

// Se resuelve más simple con el operador ternario
return activo ? 'Activo' : 'Inactivo';

