/*--------------
 //! Operadores
----------------*/

//? Operadores Aritméticos

let a = 5;
let b = 10;

console.log(a + b); // Suma
console.log(a - b); // Resta
console.log(a * b); // Multiplación
console.log(a / b); // División

console.log(a % b); // Módulo
console.log(a ** b); // Exponente

a++; // Incremento
console.log(a);

b--; // Decremento
console.log(b);

//? Operadores de Asignación

let myVariable = 2;
console.log(myVariable);
myVariable += 2;
console.log(myVariable);

myVariable -= 2;
myVariable *= 2;
myVariable /= 2;
myVariable %= 2;
myVariable **= 2;

//? Operadores de Comparación

console.log(b);

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a == 5); // Igualdad por valor
console.log(a == a);
console.log(a === 6); // Igualdad por identidad (tipo y valor) Igualdad estricta.
console.log(a === "6"); // Igualdad por valor, pero no por tipo.
console.log(a != 6); // Desigualdad por valor, pero no por tipo.
console.log(a !== "6");
console.log(0 == false); // true
console.log(1 == false); // false
console.log(2 == false); // false

//* Thruthy Values (Valores verdaderos)

// Todas las cadenas de texto menos las vacías.
// El boolean true.
// Todos los números positivos y negativos menos el cero.

//* Falsy Values (Valores Falsos)

// 0
// 0n
// null
// underfined
// NaN
// El olean false
// Cadenans de texto vacías

//? Operadores Lógicos

//  and (&&)
console.log(5 > 10 && 15 > 20);
console.log(5 < 10 && 15 < 20);
console.log(5 < 10 && 15 > 20);

// or (||)
console.log(5 > 10 || 15 > 20);
console.log(5 < 10 || 15 < 20);
console.log(5 < 10 || 15 > 20);

console.log((5 < 10 && 15 > 20) || 15 < 20);

// not (!)
console.log(true);
console.log(!true);
console.log(false);
console.log(!false);
console.log(!(5 > 10 && 15 > 20));
console.log(!(5 > 10 || 15 > 20));

//? Operadores Ternarios

const isRaining = true;
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo");
