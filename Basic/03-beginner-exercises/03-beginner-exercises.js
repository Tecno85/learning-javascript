//! Ejercicios: Primeros Pasos

//? 1. Escribe un comentario de una línea.

// "Este es un comentario de una línea."

//? 2. Escribe un comentario de varias líneas.

/*
Este es un 
comentario de 
varias líneas.
*/

//? 3. Declara variables con valores asociados a todos los datos de tipo primitivos.

// Strings
let firstName = "Ivan";
// Numbers
let age = 39;
// Booleans
let isMarried = true;
// Null
let nullValue = null;
// Undefined
let undefinedValue;
//Symbol
let mySymbol = Symbol("mysymbol");
// BigInt
let myBigInt = 97497293874923874923874n;
let myBigInt2 = BigInt(3804702397840238402398402983402n);

//? 4. Imprime por consola el valor de todas las variables.

console.log(firstName);
console.log(age);
console.log(isMarried);
console.log(nullValue);
console.log(undefinedValue);
console.log(mySymbol);
console.log(myBigInt);
console.log(myBigInt2);

//? 5. Imprime por consola el tipo de todas las variables.

console.log(typeof firtsName);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof nullValue);
console.log(typeof undefinedValue);
console.log(typeof mySymbol);
console.log(typeof myBigInt);
console.log(typeof myBigInt2);

//? 6. A continuación, modifica los valores de las variables por otros del mismo tipo.

firstName = "Ismael";
age = 8;
isMarried = false;
nullValue = 10;
undefinedValue;
mySymbol = Symbol("mysymbol2");
myBigInt = 212812037491027319028n;
myBigInt2 = BigInt(55239482034804234234n);

//? 7. A continuación, modifica los valores de las variables por otros de distinto tipo.

firstName = 8;
age = "Ismael";
isMarried = 10;
nullValue = false;
undefinedValue = Symbol("mysymbol2");
mySymbol = 5;
myBigInt = true;
myBigInt2 = "BigInt(55239482034804234234n)";

//? 8. Declara constantes con valores asociados a todos los tipos de datos primitivos.

const lastname = "Madrid";
const height = 1.64;
const isStudent = true;
const undefinedValue1 = Symbol("mysymbol2");
const yourSymbol = Symbol("yoursymbol");
const valorNulo = null;
const yourBigInt = 238402938402389402938n;

//? 9. A continuación, modifica los valores de las constantes.

lastname = "Gamez";
height = 1.65;
isStudent = true;
undefinedValue1 = Symbol("mysymbol");
yourSymbol = Symbol("yoursymbol");
valorNulo = null;
BigInt = 238402938402389402938n;

//? 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse.

// Todas las líneas arrojaran error al ejecutarse porque son constantes y no puede ser reasignadas.
