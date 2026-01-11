/*---------------------
  //! Loops - Bucles
----------------------*/

/*  
Un bucle es una estructura de control que repite un bloque de código mientras se cumpla una condición.
  
Un bucle es una estructura de control que repite un bloque de código mientras una condición sea verdadera.

Es una estructura de control que se utiliza para repetir un bloque de código un número específico de veces. Es ideal cuando conoces de antemano cuántas repeticiones necesitas realizar.

Es una herramienta fundamental en JavaScript para realizar tareas repetitivas de manera eficiente.
*/

//$ Sintaxis: Partes clave de cualquier bucle

/* Todo bucle tiene 3 elementos esenciales: 

1. Inicio => desde dónde empieza
2. Condición => cuándo se repite
3. Actualización => qué cambia para que el bucle termine

Si falta la actualización el bucle es Infinito */

//$ ¿Por qué existen los bucles? 

// Sin bucle, tendría que escribir esto:

console.log('Hola');
console.log('Hola');
console.log('Hola');
console.log('Hola');
console.log('Hola');

// Con un bucle:

for (let i = 0; i <= 5; i++) {
  console.log('Hola');
}
// Menos código, más claro, más eficiente

//$ Los más usados en JavaScript 

/* 
- for
- while
- for...of
*/

//$ Son esenciales para:

/* 
- Arrays
- Canvas
- DOM
- Datos
- Juegos y animaciones
*/

/*--------------------------------------------------------------------------------------*/

//* Bucle - for -

/* 

- Se usa cuando se cuántas veces quiero repetir algo. 
- Usa el bucle for cuando necesites control explícito sobre las repeticiones.

Especialmente para:
- Recorrer Arreglos
- Contar
- Canvas(dibujar píxeles, líneas, grids)

//* Casos de Uso:

1. Cuando conozco el inicio y el final(aunque el final venga de length)
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

2. Cuando necesite el índice (Si necesito la posición)
for (let i = 0; i < nombres.length; i++) {
  console.log(`Posición ${i}: ${nombres[i]}`);
}

3. Cuando el incremento no es de 1 en 1
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

4. Cuando necesito "break" o "continue"
for (let i = 0; i < array.length; i++) {
  if (array[i] === 0) break;
}

//* Cuando no es la mejor opción:

1. Solo recorrer valores sin índice. Mejor (for..of):
for (const valor of array) {
  console.log(valor);
}

2. Transformar arrays:
array.map(valor => valor * 2);

*/

for (inicialización; condición; actualización) {
  // Código a ejecutar en cada iteración
}

/*

1. Inicialización: Se ejecuta una vez al comienzo del bucle. Aquí se suele declarar e inicializar una variable de control. 

2. Condición: Se evalua antes de cada iteración. Si es "true", el bucle continúa; si es "false", el bucle se detiene. 

3. Ejecución del bloque: Si la condión es verdadera, se ejecuta el código dentro del bloque.

4. Actualización: Se ejecuta al final de cada iteración. Normalmente se utiliza para modificar la variable de control. 

Nota: Una iteración es una ejecución de un bloque de código dentro de un bucle. 

*/

for (let i = 0; i < 5; i++) {
  console.log(`Hola, ${i}`);
}

const numbers = [1, 2, 3, 4, 5];

for (i = 0; i < numbers.length; i++) {
  console.log(`Número: ${numbers[i]}`);
}

/*--------------------------------------------------------------------------------------*/

//* Bucle - while -

/*
Es una estructura de control que repite un bloque de código mientras una condición sea verdadera. Es útil cuando no sabes exactamente cuantas veces necesitas repetir algo, pero sí sabes la condición que debe cunplirse para continuar. 
*/

/*
Cómo funciona:
1. Condición: Antes de cada iteración, se evalua la condición.
  - Si es "true", se ejecuta el bloque de código dentro del bucle.
  - Si es "false", el bucle se detiene.
2. Iteración: Cada vez que el bloque de código se ejecuta, se llama una iteración.
3. Cuidado con bucles infinitos: Si la condición nunca se vuelve ", el bucle seguirá ejecutándose indefinidamente. 

Ejemplo básico: 
*/

let contador = 0;

while (contador < 5) {
  console.log(`Contador: ${contador}`);
  contador++; // Incrementamos el contador para evitar un bucle infinito.
}

/*
Diferencia con "for":
- Usa "while" cuando no sabes cuantas iteraciones necesitas, pero tienes una condición clara. 
- Usa "for" cuando sabes exactamente cuántas veces quieres repetir el bloque de código.  
*/

/*--------------------------------------------------------------------------------------*/

//* Bucle "do while"

// Es una variante del bucle "while" que garantiza que el bloque de código se ejecute al menos una vez, independientemente de la condición.

do {
  // Código a ejecutar
} while (condición);

/*
Como funciona:
1. Primero ejecuta el bloque de código dentro del "do".
2. Después evalúa la condición en el while.
3. Si la condición es:
- true: vuelve a ejecutar el bloque.
- false: termina el bucle.

Ejemplo:
*/

let contadorNumero = 0;

do {
  console.log(`El contador está en: ${contadorNumero}`);
  contadorNumero++;
} while (contadorNumero < 5);

/*
Diferencias con "while"

- while: evalúa la condición antes de ejecutar
- do...while: ejecuta primero y luego evalúa

Casos de uso comunes
1. Menú interactivos:

let opcion;
do {
  opcion = prompt("Seleccione: /n1-Continuar /n2-Salir");
} while (opcion != "2");

Ventajas
- Garantiza al menos una ejecución
- Útil cuando necesitas ejecutar código antes de eavluar
- Ideal para validaciones de usuario

Resumen de los tipos de bucles en JavaScript:

for
Usado cuando sabes el número exacto de iteraciones
Control más estructurado

while
Usado cuando no sabes el número de iteraciones
Evalúa la condición antes de ejecutar

do...while
Garantiza al menos una ejecución
Evalúa la condición después de ejecutar

*/