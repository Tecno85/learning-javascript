// Ejercicio 3: Generador de tabla de multiplicar
// Crea un programa que muestre la tabla de multiplicar de un número dado.

/*
- Definir variable número e inicializar al solicitar al usuario
- Definir contador para generar los número del 1 al 10 mediante el bucle
- Definir variable resultado para almacenarlo
*/
let numeroIngresado;
let contador = 1;

console.log('Tabla de Multiplicar');
do {
  numeroIngresado = parseInt(prompt('Ingresa un numero del 1 al 10: '));
  if (numeroIngresado >= 1 && numeroIngresado <= 10) {
    console.log(
      `${numeroIngresado} * ${contador} = ${numeroIngresado * contador}`
    );
  }
  contador++;
} while (numeroIngresado >= 1 && numeroIngresado <= 10);
