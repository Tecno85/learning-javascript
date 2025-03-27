# Características Principales de JavaScript

## 1. Lenguaje Interpretado
JavaScript no necesita ser compilado como C o Java. En su lugar, el navegador o un entorno de ejecución como **Node.js** lee y ejecuta el código directamente. Esto permite probar cambios al instante sin necesidad de compilar cada vez.

## 2. Multiparadigma
JavaScript permite diferentes estilos de programación:
- **Imperativa**: Se dan instrucciones paso a paso para resolver un problema.
- **Orientada a Objetos**: Usa objetos y prototipos en lugar de clases tradicionales.
- **Funcional**: Soporta funciones de orden superior, inmutabilidad y programación declarativa.

## 3. Basado en Objetos (Prototype-based)
En lugar de clases como en Java o Python, JavaScript usa **prototipos**. Cada objeto puede heredar propiedades de otro objeto llamado **prototipo**, lo que permite reutilizar código de manera flexible.

## 4. Dinámicamente Tipado
No es necesario definir el tipo de dato al declarar variables. Una variable puede cambiar de tipo durante la ejecución:

```js
let dato = 42;      // Número
dato = "Hola";      // Ahora es un String
dato = true;        // Ahora es un Booleano
```

Esto hace que sea flexible, pero también puede causar errores si no se maneja con cuidado.

## 5. Lenguaje de Alto Nivel
JavaScript tiene una sintaxis sencilla y fácil de leer en comparación con lenguajes de bajo nivel como C o ensamblador. Esto permite escribir código más rápidamente sin preocuparse por la gestión de memoria.

## 6. Ejecutado en el Navegador
JavaScript se ejecuta directamente en el navegador sin necesidad de instalaciones adicionales. Esto lo convierte en el lenguaje estándar para crear sitios web dinámicos. Además, se puede usar en el servidor con **Node.js**, lo que permite crear aplicaciones completas con JavaScript.

## 7. Asíncrono y No Bloqueante
JavaScript usa un modelo de ejecución basado en eventos y el **Event Loop**, lo que permite ejecutar código sin bloquear otras tareas. Esto es crucial para manejar operaciones como:
- **Solicitudes a servidores (APIs) sin detener la ejecución**
- **Animaciones y cambios en la interfaz de usuario sin que la página se congele**
- **Manejo de múltiples tareas al mismo tiempo**

Se utilizan técnicas como:
- **Callbacks**
- **Promesas**
- **Async/Await**

Ejemplo de código asíncrono con `fetch`:

```js
async function obtenerDatos() {
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let datos = await respuesta.json();
    console.log(datos);
}
obtenerDatos();
```

Esto permite realizar una solicitud sin detener la ejecución del resto del código.

## 8. Compatible con HTML y CSS
JavaScript puede acceder y modificar elementos de una página web usando el **DOM (Document Object Model)**. Esto permite crear contenido dinámico e interactivo.

Ejemplo de manipulación del DOM:

```js
document.getElementById("titulo").innerText = "Hola, JavaScript!";
```

Esto cambia el texto del elemento con `id="titulo"` en la página.

## 9. Gran Comunidad y Soporte
JavaScript es uno de los lenguajes más usados en el mundo, lo que significa:
- ✅ **Abundante documentación** (Mozilla MDN, W3Schools, Stack Overflow)
- ✅ **Muchos frameworks y bibliotecas** (React, Angular, Vue.js, Node.js)
- ✅ **Actualizaciones constantes** con nuevas funcionalidades

## Conclusión
JavaScript es un lenguaje **versátil, potente y esencial** para el desarrollo web. Se usa en **front-end** (interfaz de usuario) y **back-end** (servidor con Node.js). Gracias a su flexibilidad y comunidad activa, sigue evolucionando y es una excelente opción para aprender y trabajar en programación.


# Interpolación de Variables en JavaScript

La interpolación de variables en JavaScript se refiere a la capacidad de insertar variables dentro de cadenas de texto de manera sencilla y legible. Esto se logra utilizando **Template Literals** (Plantillas Literales), que fueron introducidas en ECMAScript 6 (ES6).

## Uso de Template Literals
Los Template Literals se crean utilizando comillas invertidas (`` ` ``) en lugar de comillas simples o dobles.

### Ejemplo básico:
```javascript
const nombre = "Juan";
const edad = 25;
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);
```
**Salida:**
```
Hola, mi nombre es Juan y tengo 25 años.
```

## Ventajas de la interpolación de variables
1. **Mayor legibilidad**: Evita concatenaciones complejas con `+`.
2. **Facilidad para incluir expresiones**: Se pueden realizar operaciones dentro de la interpolación.
3. **Mejor manejo de saltos de línea**: Se pueden escribir cadenas multilínea sin necesidad de `\n`.

### Ejemplo con expresiones:
```javascript
const a = 5;
const b = 10;
console.log(`La suma de ${a} y ${b} es ${a + b}.`);
```
**Salida:**
```
La suma de 5 y 10 es 15.
```

### Ejemplo de cadena multilínea:
```javascript
const mensaje = `Este es un mensaje
que ocupa múltiples líneas
sin necesidad de usar \n.`;
console.log(mensaje);
```
**Salida:**
```
Este es un mensaje
que ocupa múltiples líneas
sin necesidad de usar \n.
```

## Conclusión
La interpolación de variables con Template Literals en JavaScript facilita la manipulación de cadenas de texto, mejora la legibilidad del código y proporciona una forma más eficiente de incluir valores dinámicos en cadenas.
