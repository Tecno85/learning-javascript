// !Ejercicios Bucle "do...while"

// Crea un programa que muestre los números del 1 al 10 usando un bucle do-while.

let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);


// Ejercicio 2: Suma de números ingresados
// Simula un programa que pida números al usuario hasta que ingrese un número negativo, luego muestra la suma total.

// Suma de números positivos
console.log(`Suma de números positivos`);

// Inicialización de variables
let suma = 0;
let numero = 0;

//Verificar si es un número válido
do {
  numero = parseFloat(
    prompt(`Ingresa un número positivo para sumar o uno negativo para salir: `)
  );
  if (!isNaN(numero)) {
    if (numero >= 0) {
      suma += numero;
    }
  } else {
    console.log("Por favor ingresa un número válido.");
    // Asignar valor para que el bucle continue
    numero = 0;
  }
} while (numero >= 0);

console.log(`La suma es: ${suma}`);


// Ejercicio 3: Generador de tabla de multiplicar
// Crea un programa que muestre la tabla de multiplicar de un número dado.

const numeroTabla = 7; // Número del cual queremos la tabla
let contador = 1;

do {
  console.log(`${numeroTabla} x ${contador} = ${numeroTabla * contador}`);
  contador++;
} while (contador <= 10);


// Ejercicio 4: Validación de contraseña
// Simula un programa que pida una contraseña hasta que sea correcta.

const passwordCorrecta = "1234";
let intentoPassword;

do {
  // En un entorno real, esto vendría del usuario
  intentoPassword = prompt("Introduce la contraseña:");
  if (intentoPassword !== passwordCorrecta) {
    console.log("Contraseña incorrecta. Intenta de nuevo.");
  }
} while (intentoPassword !== passwordCorrecta);

console.log("¡Contraseña correcta! Acceso permitido.");


// Ejercicio 5: Cuenta regresiva
// Crear un programa que haga una cuenta regresiva desde un número dado hasta 0.

let cuentaAtras = 5;

do {
  console.log(cuentaAtras);
  cuentaAtras--;
} while (cuentaAtras >= 0);

console.log("¡Despegue!");


// Ejercicio 6: Adivinar un número aleatorio
// Crea un juego donde el usuario debe adivinar un número aleatorio entre 1 y 100.

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intento;
let intentos = 0;

do {
  // En un entorno real, esto vendría del usuario
  intento = parseInt(prompt("Adivina el número (entre 1 y 100):"));
  intentos++;
  
  if (intento < numeroSecreto) {
    console.log("El número es mayor");
  } else if (intento > numeroSecreto) {
    console.log("El número es menor");
  }
} while (intento !== numeroSecreto);

console.log(`¡Correcto! Has adivinado en ${intentos} intentos.`);


// Ejercicio 7: Calcular el factorial de un número
// Crea un programa que calcule el factorial de un número dado.

const numeroFactorial = 5;
let factorial = 1;
let j = numeroFactorial;

do {
  factorial *= j;
  j--;
} while (j > 0);

console.log(`El factorial de ${numeroFactorial} es: ${factorial}`);


// Ejercicio 8: Mostrar los dígitos de un número
// Crea un programa que muestre cada dígito de un número por separado.

let numeroDigitos = 3845;
let digito;

do {
  digito = numeroDigitos % 10;
  console.log(digito);
  numeroDigitos = Math.floor(numeroDigitos / 10);
} while (numeroDigitos > 0);


// Ejercicio 9: Menú interactivo
// Simula un menú de opciones que se repite hasta que el usuario elija salir.

let opcion;

do {
  // En un entorno real, la opción vendría del usuario
  console.log("\n--- MENÚ ---");
  console.log("1. Ver saldo");
  console.log("2. Hacer depósito");
  console.log("3. Retirar dinero");
  console.log("4. Salir");
  
  opcion = parseInt(prompt("Selecciona una opción (1-4):"));
  
  switch (opcion) {
    case 1:
      console.log("Tu saldo es: $1000");
      break;
    case 2:
      console.log("Depósito realizado con éxito");
      break;
    case 3:
      console.log("Retiro realizado con éxito");
      break;
    case 4:
      console.log("¡Gracias por usar nuestro servicio!");
      break;
    default:
      console.log("Opción no válida, intenta de nuevo");
  }
} while (opcion !== 4);


// Ejercicio 10: Sumar dígitos de un número
// Crea un programa que sume todos los dígitos de un número.

let numeroSuma = 12345;
let sumaDigitos = 0;
let digitoActual;

do {
  digitoActual = numeroSuma % 10;
  sumaDigitos += digitoActual;
  numeroSuma = Math.floor(numeroSuma / 10);
} while (numeroSuma > 0);

console.log(`La suma de los dígitos es: ${sumaDigitos}`);