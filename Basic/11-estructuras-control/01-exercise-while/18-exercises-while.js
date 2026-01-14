//! Ejercicios: Bucle "while"

// Ejercicio 1: Contar del 1 al 10: Escribe un programa que imprima los números del 1 al 10 usando un bucle while.

/*
let contador = 1;
while (contador <= 10) {
  console.log(contador);
  contador++;
}
*/

// Ejercicio 2: Sumar los primeros 10 números naturales: Calcula la suma de los números del 1 al 10 usando while y muestra el resultado.

let contador = 1;
let suma = 0;

while (contador <= 10) {
  suma += contador;
  contador++;
}

console.log(`La suma es: ${suma}`);

// Ejercicio 3: Tabla de multiplicar del 5: Muestra la tabla de multiplicar del 5 (del 1 al 10) usando un bucle while.

const number = 5;
let i = 1;

console.log(`Tabla de Multiplicar del número ${number}`);

while (i <= 10) {
  console.log(`${number} x ${i} = ${number * i}`);
  i++;
}

// Ejercicio 4: Cuenta regresiva: Muestra una cuenta regresiva del 10 al 1 y luego imprime "¡Despegue!".

let contadorRegresivo = 10;

while (contadorRegresivo > 0) {
  console.log(contadorRegresivo);
  contadorRegresivo--;
}
console.log('');
console.log('¡Despegue!');

// Ejercicio 5: Números pares: Muestra todos los números pares del 2 al 20 usando un bucle while.

let contadorNumerosPares = 2;

while (contadorNumerosPares <= 20) {
  console.log(contadorNumerosPares);
  contadorNumerosPares += 2;
}

// Ejercicio 6: Múltiplos de 3: Imprime todos los múltiplos de 3 que sean menores a 30.

let multiplo = 3;

while (multiplo < 30) {
  console.log(multiplo);
  multiplo += 3;
}

// Ejercicio 7: Factorial: Calcula el factorial de 5 (5! = 5×4×3×2×1 = 120) usando un bucle while.

let a = 5; // Número a calcular (contador)
let factorial = 1; // Resultado acumulado (acumulador del resultado)

while (a >= 1) {
  factorial *= a;
  a--;
}

console.log(factorial);



// Ejercicio 8: Serie Fibonacci: Muestra los primeros 8 números de la serie Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13

/*
Conceptos Básicos
La secuencia Fibonacci es una serie donde cada número es la suma de los dos anteriores: 0, 1, 2, 3, 5, 8, 13...
*/

//$ Serie Fibonacci
console.log('Serie Fibonacci');

//$ Inicializamos las variables
let contar = 0;
let numeroAnterior = 0; // Primer número de la seria
let numeroActual = 1; // Segundo número de la serie
let resultado = []; // Array para almacenar la secuencia

//$ Generamos los primeros 8 números
while (contar < 8) {
  //$ Agregamos el número anterior a nuestra secuencia
  resultado.push(numeroAnterior);

  //$ Calculamos el siguiente número de Fibonacci
  let numeroSiguiente = numeroAnterior + numeroActual;

  //$ Actualizamos las variables para la segunda iteración
  numeroAnterior = numeroActual;
  numeroActual = numeroSiguiente;

  contar++;
}

//$ Mostramos toda la secuencia completa
console.log(`Secuencia Completa: ${resultado.join(', ')}`);

// Ejercicio 9: Suma de dígitos: Calcula la suma de los dígitos de un número (por ejemplo, para 123: 1+2+3 = 6)

// Suma de Dígitos
console.log('=== Suma de Dígitos ===');

// Inicialización de variables
let numero = 3567;
let numeroArray = String(numero).split('').map(Number);
let contadorNumeros = 0;
let sumaNumeros = 0;

// Suma de dígitos usaando while
while (contadorNumeros < numeroArray.length) {
  sumaNumeros += numeroArray[contadorNumeros];
  contadorNumeros++;
}

// Se imprime por pantalla el resultado
console.log(`La suma es: ${sumaNumeros}`);

// Ejercicio 10: Divisibilidad: Encuentra el primer número que sea divisible tanto por 7 como por 11

// Divisibilidad
console.log('=== Divisibilidad ===');

// Inicializar el número desde donde empezamos a buscar
let numeroDivisible = 1;

while (true) {
  // Verificamos que el número actual es divisible por ambos
  if (numeroDivisible % 7 == 0 && numeroDivisible % 11 == 0) {
    console.log(
      `El primer número divisible por 7 y por 11 es: ${numeroDivisible}`
    );
    break;
  }
  numeroDivisible++;
}
