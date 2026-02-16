/*
    Ejercicio 12: Buscar un valor en un array
    Objetivo: Dado un array de números, recórrelo con while y detente 
              cuando encuentres el número 0.
    Concepto: Muy común cuando buscas un valor específico y paras al encontrarlo.
*/
let myArray = [12, 15, 17, 34, 35, 56];
let i = 0;
let encontrado = false;

while (i < myArray.length) {
  if (myArray[i] === 0) {
    console.log(`Encontré el número cero en la posición ${i}`);
    encontrado = true;
    break;
  }
  i++;
}

// Variantes de la solución

if (!encontrado) {
  console.log('No se encontró el número cero');
}

while (i < myArray.length) {
  if (myArray[i] === 0) {
    console.log(`Encontré el número cero en la posición ${i}`);
    break;
  }
  i++;
}

// Variantes de la solución

while (i < array.length) {
  if (array[i] === 0) {
    break;
  }
  console.log(array[i]);
  i++;
}
console.log(`El número cero esta ubicado en la posición ${i}`);
