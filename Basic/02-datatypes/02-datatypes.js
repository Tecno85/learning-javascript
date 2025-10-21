/*----------------------
  //! Datos Primitivos
------------------------*/

// 1. Cadena de texto (String)
let myName = "Ivan Madrid";
let alias = 'Ivancho';
let email = `tecno85@gmail.com`;

// 2. Números (number)
let age = 39; // Entero
let height = 1.64; // Decimal

// 3. Booleanos (booleans)
let isTeacher = true;
let isStudent = false;

// 4. Undefined (no definida)
let undefinedValue; // No tiene un valor definido
console.log(undefinedValue);

// 5. Null (sin valor, nula)
let nullValue = null; // No tiene un valor asignado de manera intencional

// 6. Symbol
let mySymbol = Symbol("mysymbol"); // Representan valores o identificadores únicos, usados como identificadores de propiedades de futuros objetos. Estos evitan colisiones

// 7. BigInt
let myBigInt = BigInt(7239458739485679348759384759348759348579347593n);
let myBigInt2 = 7239458739485679348759384759348759348579347593n;
// Son números enteros extremadamente grandes.

// Mostrar tipos de Datos

console.log(typeof myName);
console.log(typeof alias);
console.log(typeof email);
console.log(typeof age);
console.log(typeof height);
console.log(typeof isTeacher);
console.log(typeof isStudent);
console.log(typeof undefinedValue);
console.log(typeof nullValue);
console.log(typeof mySymbol);
console.log(typeof myBigInt);
console.log(typeof myBigInt2);

// Quedé por el minuto 17
