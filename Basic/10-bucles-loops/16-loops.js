/*---------------------
  //! Loops - Bucles
----------------------*/

//* Bucle - for -

/*
Es una estructura de control que se utiliza para repetir un bloque de código un número específico de veces. Es ideal cuando conoces antemano cuántas repeticiones necesitas realizar.

ES una herramienta fundamental en JavaScript para realizar tareas repetitivas de manera eficiente. 


// Sintaxis

for (inicialización; condición; actualización) {
  // Código a ejecutar en cada iteración
}


Inicialización: Se ejecuta una vez al comienzo del bucle. Aquí se suele declarar e inicializar una variable de control. 
Condición: Se evalua antes de cada iteración. Si es "true", el bucle continúa; si es "false", el bucle se detiene. 
Ejecución del bloque: Si la condión es verdadera, se ejecuta el código dentro del bloque.
Actualización: Se ejecuta al final de cada iteración. Normalmente se utiliza para modificar la variable de control. 
Nota: Una iteración es una ejecución de un bloque de código dentro de un bucle. 
*/

for (let i = 0; i < 5; i++) {
  console.log(`Hola, ${i}`);
}

const numbers = [1, 2, 3, 4, 5];

for (i = 0; i < numbers.length; i++) {
  console.log(`Número: ${numbers[i]}`);
}

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