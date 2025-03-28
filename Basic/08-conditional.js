/*--------------------------------------------
   //! Conditionals (Estructuras de Control)
----------------------------------------------*/

// if (si)

let age = 39;

if (age == 37) {
  console.log("La edad es 39");
}

// else (si no)

if (age == 37) {
  console.log("La edad es 39");
} else {
  console.log("La edad no es 37");
}

// else if (si no, si)

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

const message = age == 37 ? "La edad es 37" : "La edad no es 37";
console.log(message);

// Switch: Es una alternativa a anidar con if else. Comparar una unica variable con varios valores posibles. Si la variable que se revisa es la misma se utiliza el switch

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
