// Ejercicio 4: Validación de contraseña
// Simula un programa que pida una contraseña hasta que sea correcta.

//Exercise 4: Password validation
//Simulates a program that asks for a password until it is correct.

const password = "1234";
let userPassword;

do {
  userPassword = prompt('Enter the password: ');
  if (userPassword !== password) {
    console.log('Incorrect password, please try again.');
  }
} while (userPassword !== password);

console.log('Correct pasword');
