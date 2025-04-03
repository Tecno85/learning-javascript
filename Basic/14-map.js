/*---------------------------
  //! Mapas o Diccionarios
---------------------------*/

/*
Son estructuras de datos que permiten almacenar pares clave-valor(key-value). A diferencia de los objetos, los mapas pueden ser cualquier tipo de dato como clave, ya sea un número, cadena, objeto, función, etc. 

Los Mapas son una estructura de datos poderosa y flexible en JavaScript, especialmente cuando necesitas trabajar con claves que no son cadenas o cuando necesitas mantener el orden de inserción. Son ideales para casos en los que los objetos tradicionales no son suficientes.
*/

// Declaración

let myMap = new Map();
console.log(myMap);

// Inicialización

myMap = new Map([
  ["name", "Ivan Madrid"],
  ["age", 39],
  ["email", "tecno85@gmail.com"],
]);

console.log(myMap);

// Métodos y Propiedades

// set: Permite agregar elementos

myMap.set("HijoMayor", "Ismael Madrid Gamez");

myMap.set("primogenito", "Esteban Madrid Gamez");

console.log(myMap);

// get: Nos permite recuperar el valor asignado a la clave

console.log(myMap.get("name"));
console.log(myMap.get("surname"));

// has: Indica si el elemento clave-valor existe.

console.log(myMap.has("name"));
console.log(myMap.has("surname"));

// delete

myMap.delete("name");
console.log(myMap);

// keys: Muestra el listado de las claves

console.log(myMap.keys());

// values: Muestra el listado de los valores

console.log(myMap.values());

// entries: Nos muestra el listado de las claves y los valores

console.log(myMap.entries());

// size: Indica el tamaño del mapa

console.log(myMap.size);

// clear

myMap.clear();
console.log(myMap);
