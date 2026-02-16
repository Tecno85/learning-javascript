/* 
    Ejercicio 10: Divisibilidad
    Objetivo: Encuentra el primer número que sea divisible tanto por 7 como por 11
*/

let numero = 1;

while (true) {
  if (numero % 7 === 0 && numero % 11 === 0) {
    console.log(numero);
    break;
  }
  numero++;
}
