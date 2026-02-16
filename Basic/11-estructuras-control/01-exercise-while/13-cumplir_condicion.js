/*
    Ejercicio 13: Contar hasta que se cumpla una condición 
                  (Procesos que esperan algo externo)
    Objetivo: Genera números aleatorios entre 0 y 1 usando Math.random()
              Cuenta cuántos intentos se necesitan hasta que salga un 
              número mayor a 0.8.      
    Concepto: Simula procesos de espera o reintentos.
*/

let i = 1;

while (true) {
  if (Math.random() > 0.8) {
    let resultado = i > 1 ? 'Intentos' : 'Intento';
    console.log(`Se necesitaron ${i} ${resultado}`);
    break;
  }
  i++;
}
