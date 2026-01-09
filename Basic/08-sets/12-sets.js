/*------------
  //! Sets
-------------*/

/*
Set: Es una estructura de datos (colecciones) que almacena valores únicos. No permite valores duplicados. Si se agregan dos valores iguales, el "set" no tendra encuenta el valor duplicado.  

Carácteristicas Principales:

- Únicos: Solo puede haber un valor único en un set.
- Aunque los Sets no son "desordenados", tampoco tienen un orden basado en criterios como clasificación alfabética o numérica. Simplemente respetan el orden de inserción de los elementos. Si necesitas un orden específico, puedes convertir el Set en un array y ordenarlo manualmente 
- Iteración: Es posible recorrer un set, pero no es posible acceder a sus elementos por índice como en un array. 

Los Sets son útiles cuando necesitas trabajar con valores únicos y no te importa el orden de los elementos. Son ideales para eliminar duplicados de un array o para realizar operaciones como uniones e intersecciones.

Regla Mental Rápida:

¿Importa que no haya duplicados y solo saber si algo existe?
Usar Set
¿Importa el orden o el índice?
Usar Array
*/

//* Declaración

let mySet = new Set();

//* Inicialización

mySet = new Set([
  "Ivan",
  "Katerin",
  "Ismael",
  "Esteban",
  39,
  true,
  "proyectgithubgit@gmail.com",
]);

//* Métodos Comunes

//* add y delete: Métodos para añadir y eliminar datos

mySet.add("Emma");
console.log(mySet);

mySet.delete("Emma"); // A diferencia de los arrays no se emplea indice, se coloca el nombre del elemento
console.log(mySet);

console.log(mySet[4]); // Imprime: Undefined

console.log(mySet.delete("Ivan")); // Retorna "true" si el elemento existe y fue eliminado
console.log(mySet.delete(4)); // Retorna un "false" si el elemento no existe.

//* has: Nos permite comprobar si un elemento existe.

console.log(mySet.has("Katerin")); // Imprime "true"
console.log(mySet.has("Ivan")); // Imprime "false", porque fue eliminado

//* Size: Indica la longitud o el tamaño del set

console.log(mySet.size);
console.log(mySet.add("Ivan"));
console.log(mySet.size);

//* Convertir un set a un array

let myArray = Array.from(mySet);
console.log(myArray);

//* Convertir un array a un set

mySet = new Set(myArray);
console.log(mySet);

//* Diferencia Principal de los Arrays: No admite duplicados, pero el elemento debe ser exactamente igual al otro, de lo contrario si admitira el elemento

console.log(mySet);
console.log(mySet.add("ivan")); // En este ejemplo se crea un elemento "ivan" con la i en minúscula, por consiguinte si lo incluye
console.log(mySet);




