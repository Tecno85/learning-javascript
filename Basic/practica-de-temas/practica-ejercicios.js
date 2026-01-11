//! Ejercicios: Bucle "for"

// 1. Imprimir números del 1 al 10.

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// 2. Imprimir números pares del 0 al 20.

// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 3. Imprime los elementos de un array.

// const myArray = [
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
//   'Sunday',
// ];

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// 4. Calcular la suma de los número del 1 al 100.

// let contador = 0;
// for (let i = 1; i <= 100; i++) {
//   contador += i;
// }

// console.log(contador);

// 5. Imprimir una tabla de multiplicar.

// const numero = 5;

// for (let i = 1; i <= 10; i++) {
//   console.log(`${numero} x ${i} = ${numero * i}`);
// }

// 6. Contar cuantos número son mayor que 10 en un array.

const numbers = [1, 4, 7, 9, 23, 54, 67];

let contador = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    contador++;
  }
}
console.log(contador);
