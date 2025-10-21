//! Ejercicios: Sets

// 1. Crea un set y agrega elementos.

let mySet = new Set(); // Set inicializado
console.log(mySet);
mySet.add("Ivan"); // Elemento "Ivan" agregado
console.log(mySet);
mySet.add("Katerin").add("Ismael").add("Esteban"); // Agregando varios elementos al set
console.log(mySet);

// 2. Comprobar si un elemento existe.

mySet.has("Ivan"); // Comprobando que el elemento "Ivan" existe
console.log(mySet.has("Ivan"));

// 3. Eliminar un elemento.

mySet.delete("Ivan");
console.log(mySet);

// 4. Tamaño del set.

console.log(mySet.size);

// 5. Recorrer un set.

for (let item of mySet) {
  console.log(item);
}

// 6. Convertir un "Set" en un "Array".

let myArray = Array.from(mySet);
console.log(myArray);
mySet = new Set(myArray);
console.log(mySet);

// 7. Eliminar todos los elementos.

let numberSet = new Set([1, 2, 3, 4, 5]);
numberSet.clear(); // Se emplea el método "clear"
console.log(numberSet);


