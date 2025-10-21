//! Ejercicios: Bucle "for"

// 1. Imprimir números del 1 al 10.

console.log("Números del 1 al 10");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Imprimir números pares del 0 al 20.

console.log("Número pares del 0 al 20");

for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

// 3. Imprime los elementos de un array.

const frutas = ["Manzana", "Banana", "Naranja", "Uva"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// 4. Calcular la suma de los número del 1 al 100.

let suma = 0;
for (let i = 1; i <= 100; i++) {
  suma += i;
}
console.log(`La suma total es: ${suma}`);

// 5. Imprimir una tabla de multiplicar.

console.log(`Tabla de Multiplicación del Número 5`);

for (let i = 0; i <= 10; i++) {
  let multiplicacion = i * 5;
  console.log(`5 * ${i} = ${multiplicacion}`);
}

// 6. Contar cuantos número son mayor que 10 en un array.

const numeros = [2, 4, 12, 34, 23, 9];
let contador = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 10) {
    contador++;
  }
}

console.log(`${contador} números son mayores que 10.`);
