//! Funciones

// Funciones: Son bloque de códigos diseñados para realizar una tarea específica. Hay que llamarlas o invocarlas. Nos permiten escribir buen código, código limpio y facil de entender. Una función define una tarea especifica.

//! Función sin parámetros(simple)

function myFunc() {
  console.log("Hola Función");
}

for (i = 0; i < 5; i++) {
  myFunc();
}

// En esta función la tarea especifica es imprimir por consola "Hola Función" cinco veces

//! Función con parámetros

function myfuncWithParams(name) {
  console.log(`Hola, ${name}`);
}

myfuncWithParams("Ivan");
myfuncWithParams("Esteban");

//! Funciones Anónimas
// Funciones que no tienen un nombre definido. Hay que asignarlas a variables o constante para poder invocarla.

const myFunc2 = function (name) {
  console.log(`Hola, ${name}`);
};

myFunc2("Ismael");

//! Funciones Flecha - Arrow functions
// Forma concisa de escribir funciones. Hay que asignarlas a variables o constantes y se invocan como las anónimas. Se emplean cuando la queremos utilizar en una sola línea.

const myFunc3 = (name) => {
  console.log(`Hola, ${name}`);
};

myFunc3("Katerin");

const myFunc4 = (name) => console.log(`Hola, ${name}`);

myFunc4("Mama");

// Parámetros

function sum(a, b) {
  console.log(a + b);
}

sum(5, 5);
sum(5); // El resultado es NA porque no puede realizar la suma
sum(); // El mismo resultado que la anterior

function defaultSum(a = 0, b = 0) {
  // En este caso se asigna un valor inicial al parámetro
  console.log(a + b);
}

// Valores por defecto

defaultSum();
defaultSum(5);
defaultSum(4, 7);
defaultSum((b = 8));

// Retorno de Valores: Una fucnión desencadena lógica dentro de una función.

function mult(a, b) {
  return a * b;
}

mult(5, 10);

// En este caso la función no imprime por pantalla el resultado de la multiplicación, por el contrario retorna el resultado de la operación cuando la función es llamada.

console.log(mult(5, 10));

let result = mult(5, 10);
console.log(result);

//! Funciones anidadas

function extern() {
  console.log("Función Externa");
  function intern() {
    console.log("Función Interna");
  }
  intern();
}

extern(); // En este ejemplo se tiene encuenta el alcance o scope de la función

//! Funciones de Orden Superior
// Son funciones que reciben otras funciones como argumenos

function applyFunc(func, param) {
  func(param);
}

applyFunc(myFunc4, "Función de orden superior");

//! forEach
// Es una función que nos sirve para ejecutar bucles asociados a elementos iterales

// Ejemplo con un array

myArray = [1, 2, 3, 4];

myArray.forEach(function (value) {
  console.log(value);
});

myArray.forEach((value) => console.log(value));

// Ejemplo con un set

mySet = new Set(["Ivan", "Dario", "Madrid", "Daza", 39, "tecno85@gmail.com"]);

mySet.forEach((value) => console.log(value));



// Quede por el minuto 3:56
