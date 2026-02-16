//! Los 8 ejercicios esenciales:

// 1. Validación de entrada hasta que sea correcta javascript
// Patrón: Formularios, registros, configuraciones
// Mientras la entrada sea inválida, seguir pidiendo

let email;
while (!email || !email.includes('@')) {
  email = prompt("Ingresa un email válido:");
}

// 2. Búsqueda en lista hasta encontrar javascript
// Patrón: Búsqueda de productos, usuarios, registros
// Recorrer hasta encontrar lo que buscas

let productos = ["manzana", "pera", "uva", "naranja"];
let buscar = "uva";
let i = 0;

while (i < productos.length && productos[i] !== buscar) {
  i++;
}

if (i < productos.length) {
  console.log(`Encontrado en posición ${i}`);
}

// 3. Procesar hasta agotar recursos javascript
// Patrón: Inventarios, tickets, tareas pendientes
// Mientras haya stock/items, seguir procesando

let stock = 50;
let pedido = 7;

while (stock >= pedido) {
  stock -= pedido;
  console.log(`Pedido procesado. Stock restante: ${stock}`);
}
// 4. Generar hasta cumplir requisito javascript
// Patrón: Códigos únicos, IDs, contraseñas seguras
// Generar hasta que cumpla los requisitos

let codigoSeguro = '';

while (codigoSeguro.length < 6) {
  let digito = Math.floor(Math.random() * 10);
  codigoSeguro += digito;
}

console.log(`Código generado: ${codigoSeguro}`);

// 5. Acumular hasta alcanzar objetivo javascript
// Patrón: Metas de ventas, objetivos, presupuestos
// Sumar hasta llegar a la meta

let meta = 1000;
let acumulado = 0;
let dia = 1;

while (acumulado < meta) {
  let ventaDia = Math.floor(Math.random() * 100) + 50;
  acumulado += ventaDia;
  console.log(`Día ${dia}: $${ventaDia} - Total: $${acumulado}`);
  dia++;
}

// 6. División sucesiva (algoritmos básicos) javascript
// Patrón: Conversión de unidades, cálculos, algoritmos
// Dividir hasta que no se pueda más

let dinero = 127;
let billetes = [50, 20, 10, 5, 1];
let i = 0;

while (i < billetes.length) {
  let cantidad = Math.floor(dinero / billetes[i]);
  if (cantidad > 0) {
    console.log(`${cantidad} billetes de $${billetes[i]}`);
    dinero -= cantidad * billetes[i];
  }
  i++;
}
// 7. Timeout / Límite de tiempo javascript
// Patrón: Sesiones, temporizadores, límites de espera
// Contar mientras no se agote el tiempo

let tiempoRestante = 10;

while (tiempoRestante > 0) {
  console.log(`Tiempo restante: ${tiempoRestante}s`);
  tiempoRestante--;
  // En real: setTimeout o similar
}

console.log("¡Tiempo agotado!");

// 8. Navegación en menú / opciones javascript
// Patrón: Menús interactivos, CLI, configuraciones
// Repetir hasta que el usuario elija salir

let opcion;

while (opcion !== '0') {
  console.log("1. Ver perfil");
  console.log("2. Configuración");
  console.log("0. Salir");
  opcion = prompt("Elige opción:");
  
  if (opcion === '1') console.log("Mostrando perfil...");
  if (opcion === '2') console.log("Configuración...");
}

//! Por qué estos son LOS importantes:

// Ejercicios 1-3: Bases de cualquier aplicación (validación, búsqueda, gestión)
// Ejercicios 4-6: Algoritmos comunes en sistemas reales
// Ejercicios 7-8: Experiencia de usuario (timeouts, navegación)
// Estos 8 cubren el 90% de los casos donde usarás while en proyectos reales de nivel junior-mid.