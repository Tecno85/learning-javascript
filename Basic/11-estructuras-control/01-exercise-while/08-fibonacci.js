/* 
    Ejercicio 8: Serie Fibonacci
    Objetivo: Muestra los primeros 8 números de la seria fibonacci
    Salida: 0, 1, 1, 2, 3, 5, 8, 13
*/

let a = 0;
let b = 1;

let contador = 1;

while (contador <= 8) {
  console.log(a);

  let siguiente = a + b;
  a = b;
  b = siguiente;

  contador++;
}
