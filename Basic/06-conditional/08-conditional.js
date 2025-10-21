/*--------------------------------------------
   //! Conditionals (Estructuras de Control)
----------------------------------------------*/

//$ Cuando utilizar el if: Cuando queremos evaluar una condición y ejecutar un bloque de código si esa condición es verdadera.

// if (si)

let age = 39;

if (age == 37) {
  console.log("La edad es 39");
}

// else (si no)

//$ Cuando utilizar el else: Cuando queremos ejecutar un bloque de código si la condición del if es falsa.

if (age == 37) {
  console.log("La edad es 39");
} else {
  console.log("La edad no es 37");
}

// else if (si no, si)

//$ Cuando utilizar el else if: Cuando queremos evaluar múltiples condiciones y ejecutar un bloque de código específico si una de esas condiciones es verdadera.

age = 37;

if (age == 37) {
  console.log("La edad es 37");
} else if (age < 18) {
  console.log("Es menor de edad");
} else if (age >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("La edad no es 37, ni es menor de edad");
}

// Operador Ternario

//$ Cuando utilizar el operador ternario: Es una forma abreviada de escribir una expresión condicional. Se utiliza para asignar un valor basado en una condición.

const message = age == 37 ? "La edad es 37" : "La edad no es 37";
console.log(message);

// Switch: Es una alternativa a anidar con if else. Comparar una unica variable con varios valores posibles. Si la variable que se revisa es la misma se utiliza el switch

//$ Cuando utilizar el switch: Cuando queremos comparar una variable con múltiples valores posibles y ejecutar un bloque de código específico para cada valor.

let day = 8;
let dayName;

switch (day) {
  case 0:
    dayName = "Lunes";
    break;
  case 1:
    dayName = "Martes";
    break;
  case 2:
    dayName = "Miercoles";
    break;
  case 3:
    dayName = "Jueves";
    break;
  case 4:
    dayName = "Viernes";
    break;
  case 5:
    dayName = "Sabado";
    break;
  case 6:
    dayName = "Domingo";
    break;
  default:
    dayName = "Ingresa un valor del 1 al 6.";
}

console.log(dayName);
