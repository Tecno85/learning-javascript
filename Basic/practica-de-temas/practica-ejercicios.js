//! Ejercicios: Bucle "for"

// 1. Imprimir números del 1 al 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Imprimir números pares del 0 al 20.

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

// 3. Imprime los elementos de un array.

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

for (let i = 0; i < daysOfWeek.length; i++) {
  console.log(daysOfWeek[i]);
}

// 4. Calcular la suma de los número del 1 al 100.

let suma = 0;

for (let i = 0; i <= 100; i++) {
  suma += i;
}

console.log(suma);

// 5. Imprimir una tabla de multiplicar.

let tabla = 2;

for (let i = 1; i <= 10; i++) {
  let multiplicacion = tabla * i;
  console.log(`${tabla} x ${i}  = ${multiplicacion}`);
}

// 6. Contar cuantos número son mayor que 10 en un array.

const myArray = [2, 12, 4, 56, 6, 7, 98];

let contador = 0;

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] > 10) {
    contador += 1;
  }
}

console.log(contador);

const nombres = ['Ivan', 'Katerin', 'Ismael', 'Esteban', 'Mamá'];

for (let i = 0; i < nombres.length; i++) {
  console.log(`Posición ${i}: ${nombres[i]}`);
}

for (let i = 0; i < nombres.length; i++) {
  if (nombres[i] === 0) break;
} 
