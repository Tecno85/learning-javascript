//! Ejercicios: Operadores

// 1. Crea una variable para cada operación aritmética.

let a = 5;
let b = 10;
let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;
let exponente = a ** b;
let modulo = a % b;

let incremento = ++a;
let decremento = --a;

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas.

c -= 2; // Operador de asignación de resta
c += 2; // Operador de asignación de suma
c *= 2; // Operador de asignación de multiplicación
c /= 2; // Operador de asignación de división
c %= 2; // Operador de asignación de Modulo
c **= 2; // Operador de asignación de exponente

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación.

console.log(a < b);
console.log(a <= b);
console.log(b > a);
console.log(b >= a);
console.log(a != b);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación.

console.log(a > b);
console.log(a >= b);
console.log(b < a);
console.log(b <= a);
console.log(b === a);

// 5. Utiliza el operador lógico and.

console.log(a < b && b > a); // Da true como resultado
console.log(a > b && b < a); // Da false como resultado
console.log(a == b && b > a); // Da false como resultado

// 6. Utiliza el operador lógico or.

console.log(a < b || b < a); // Da true como resultado
console.log(a < b || b > a); // Da true como resultado
console.log(a > b || a == b); // Da false como resultado

// 7. Combina ambos operadores lógicos.

console.log((a < b && b != a) || b == a); // Da true como resultado
console.log((a >= b && b === a) || b > a); // Da true como resultado
console.log(a === b || (b <= a && a >= b)); // Da false como resultado

// 8. Añade alguna negación.

console.log(!((a < b && b != a) || b == a)); // Da false como resultado
console.log(!((a >= b && b === a) || b > a)); // Da false como resultado
console.log(!(a === b || (b <= a && a >= b))); // Da true como resultado

// 9. Utiliza el operador ternario.

const soyEstudiante = !true;
soyEstudiante
  ? console.log("Soy Estudiante")
  : console.log("No soy estudiante");

// 10. Combina operadores aritméticos, de comparáción y lógicas.

console.log((a + b > b || b > a) && a > b);
