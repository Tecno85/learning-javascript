//! Ejercicios: Estructuras

// 1. Crea un array que almacene cinco animales.

let animals = ["Lobo", "Aguila", "Serpiente", "Elefante", "Hormiga"];
console.log(animals);

// 2. Añade dos más. Uno al principio y otro al final.

animals.unshift("Tigre Siberiano");
console.log(animals);

animals.push("Gato");
console.log(animals);

// 3. Elimina el que se encuentra en tercera posición.

animals.splice(3, 1);
console.log(animals);

// 4. Crea un set que almacene cinco libros.

let libros = new Set([
  "Naturales",
  "Sociales",
  "Religión",
  "Física",
  "Matemáticas",
]);

console.log(libros);

// 5. Añade dos más. Uno de ellos repetido.

libros.add("Inglés");
console.log(libros);
libros.add("Física");
console.log(libros);

// 6. Elimina uno concreto a tu elección.

libros.delete("Naturales");
console.log(libros);

// 7. Crea un mapa que asocie el número del mes a su nombre.

let numeroMes = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
  [6, "Junio"],
  [7, "Julio"],
  [8, "Agosto"],
  [9, "Septiembre"],
  [10, "Octubre"],
  [11, "Noviembre"],
  [12, "Diciembre"],
]);

console.log(numeroMes);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor.

console.log(numeroMes.has(5)); // Conprueba si existe el més 5.
console.log(numeroMes.get(5)); // Muestra el nombre del mes 5.

if (numeroMes.has(12)) {
  console.log(numeroMes.get(12));
} else {
  console.log("El mes seleccionado no existe en el mapa.");
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano.

let mesesVerano = ["Diciembre", "Enero", "Febrero"];

numeroMes.set("Meses de Verano", mesesVerano);
console.log(numeroMes);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let newArray = ["Ivan Dario Madrid Daza"];

let newSet = new Set(newArray);

console.log(newSet);

numeroMes.set("nombre", newSet);

console.log(numeroMes);
