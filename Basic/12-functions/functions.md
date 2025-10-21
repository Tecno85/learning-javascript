## FUNCIONES

**Funciones**: Son bloque de códigos diseñados para realizar una tarea específica. Hay que llamarlas o invocarlas. Nos permiten escribir buen código, código limpio y facil de entender. Una función define una tarea especifica.

**Las funciones sin parámetros** se usan para ejecutar un bloque de código que no necesita ninguna información externa para hacer su trabajo. Son como un botón de "play": siempre realizan la misma acción específica cada vez que se presionan.

Vamos a desglosarlo en "para qué" y "cuándo".

---

### ¿Para qué se usan las funciones simples (sin parámetros)?

El propósito principal es la **encapsulación** y la **reutilización**.

1.  **Para Encapsular una Tarea Específica:** Agrupan una serie de pasos bajo un nombre descriptivo. En lugar de tener 5 líneas de código sueltas que hacen una cosa (por ejemplo, mostrar un menú), las metes dentro de una función llamada `mostrarMenu()`. Esto hace el código mucho más legible y organizado.

2.  **Para Evitar Repetir Código (Principio DRY - Don't Repeat Yourself):** Si necesitas realizar la misma tarea en tres lugares diferentes de tu aplicación (como actualizar la hora en un reloj digital), en lugar de escribir el código tres veces, escribes la función `actualizarReloj()` una vez y la llamas tres veces. Si necesitas cambiar cómo funciona, solo lo cambias en un lugar.

3.  **Para Crear "Disparadores" (Triggers):** Son perfectas para responder a eventos que no dependen de un dato variable. Por ejemplo, "cuando el usuario haga clic en el botón de cerrar sesión", se ejecuta la función `cerrarSesion()`. La acción de cerrar sesión no necesita que el usuario le dé ninguna información extra en ese momento.

---

### ¿Cuándo se usan? (Ejemplos prácticos)

Aquí tienes los escenarios más comunes donde verás y usarás funciones sin parámetros.

#### 1. Manejadores de Eventos (Event Handlers)
Este es el uso más frecuente. Se asocian a acciones del usuario como clics, pasar el ratón por encima, o presionar una tecla.

**Ejemplo:** Un botón para mostrar una alerta.

```html
<button id="miBoton">¡Haz clic aquí!</button>
```

```javascript
// La función no necesita parámetros. Su trabajo es siempre el mismo: mostrar una alerta.
function saludar() {
  alert("¡Hola, mundo!");
}

// Asociamos la función al evento 'click' del botón.
document.getElementById("miBoton").addEventListener("click", saludar);
```
Cuando el usuario hace clic, se llama a `saludar()`. La función ya sabe qué hacer y no necesita más información.

#### 2. Tareas de Inicialización
Cuando una página web carga, a menudo necesitas ejecutar una serie de tareas para preparar la aplicación.

**Ejemplo:** Iniciar la página.

```javascript
function iniciarAplicacion() {
  console.log("Cargando datos iniciales...");
  configurarMenu(); // Podría llamar a otras funciones sin parámetros
  cargarProductosDestacados();
  console.log("¡Aplicación lista!");
}

// Se ejecuta una vez que todo el contenido de la página ha cargado.
window.addEventListener("DOMContentLoaded", iniciarAplicacion);
```
`iniciarAplicacion()` actúa como un guion de inicio que se ejecuta automáticamente.

#### 3. Obtener Datos de una Fuente Fija o del Sistema
Cuando la función tiene que obtener información de un lugar que no cambia, como la fecha actual del sistema o una configuración interna.

**Ejemplo:** Obtener la fecha y hora actual.

```javascript
function obtenerFechaActual() {
  // La función usa el objeto `Date` que está disponible globalmente.
  // No necesita que le pases nada.
  const ahora = new Date();
  return ahora.toLocaleDateString(); // Devuelve la fecha en formato local, ej: "10/26/2023"
}

// Uso:
console.log("La fecha de hoy es:", obtenerFechaActual());
```

#### 4. Alternar un Estado (Toggle)
Muy común para elementos de la interfaz como menús de hamburguesa, modo oscuro, etc.

**Ejemplo:** Un botón que muestra u oculta un menú.

```javascript
const menu = document.getElementById("menu-navegacion");

// La función revisa el estado actual del menú y lo invierte.
// No necesita parámetros porque su única fuente de información es el propio menú.
function alternarMenu() {
  menu.classList.toggle("visible"); // 'toggle' añade la clase si no está, y la quita si está.
}

document.getElementById("boton-menu").addEventListener("click", alternarMenu);
```

---

### Contraste clave: Con vs. Sin Parámetros

Para que quede aún más claro, comparemos.

*   **Función SIN parámetros (simple):** Es un interruptor de luz. Lo presionas y siempre hace lo mismo (enciende o apaga). Es **específica** y **autónoma**.
    ```javascript
    function apagarLuces() {
      // código para apagar las luces
    }
    ```

*   **Función CON parámetros:** Es un regulador de intensidad (dimmer). Necesita que le digas *cuánto* quieres de luz (el parámetro). Su acción es **flexible** y **depende de la entrada**.
    ```javascript
    function ajustarIntensidadLuz(nivel) { // `nivel` es el parámetro
      // código que ajusta la luz al `nivel` indicado (ej: 0 a 100)
    }

    ajustarIntensidadLuz(80); // Luz brillante
    ajustarIntensidadLuz(20); // Luz tenue
    ```

### Conclusión

Las funciones sin parámetros son una herramienta fundamental para **organizar, reutilizar y simplificar el código**. Se usan cuando una acción es **autocontenida y predecible**, como responder a un evento simple, inicializar un sistema o realizar una tarea que no depende de datos variables externos. Son los "ladrillos" básicos con los que se construyen acciones claras y mantenibles en cualquier aplicación JavaScript.

Espero que esta explicación sea de gran ayuda. ¡Es un concepto clave para escribir código limpio y eficiente

---

## DIFERENCIAS ENTRE "PARÁMETRO" y "ARGUMENTO"

En pocas palabras:

*   Un **parámetro** es la **variable** que se lista dentro de los paréntesis en la **definición** de una función. Es un placeholder, un nombre para el dato que la función *espera* recibir.
*   Un **argumento** es el **valor real** que se pasa a la función cuando esta es **invocada** (o llamada). Es el dato concreto con el que la función trabajará.

Piénsalo con esta analogía:

> **Un PARÁMETRO es el ESPACIO RESERVADO en un parking. Un ARGUMENTO es el COCHE que aparca en ese espacio.**

---

### El Desglose

Veámoslo por separado con más detalle.

#### 1. Parámetro (La Variable / El Placeholder)

Es la variable que nombras cuando creas la función. Vive *dentro* de la función y actúa como una puerta de entrada para los datos.

*   **¿Dónde está?** En la **declaración** de la función.
*   **¿Qué es?** Un nombre de variable.
*   **¿Su propósito?** Definir qué tipo de información necesita la función para operar.

**Ejemplo:**
En esta función, `nombre` y `edad` son los **parámetros**. Son como cajas vacías esperando a ser llenadas.

```javascript
//         parámetro 1   parámetro 2
//              ↓             ↓
function registrarUsuario(nombre,       edad) {
  console.log(`Registrando a ${nombre}, que tiene ${edad} años.`);
}
```

#### 2. Argumento (El Valor / El Dato Real)

Es el valor específico que le das a la función cuando la ejecutas. Este valor se asigna al parámetro correspondiente.

*   **¿Dónde está?** En la **llamada** o **invocación** de la función.
*   **¿Qué es?** Un valor concreto (un string, un número, un objeto, etc.).
*   **¿Su propósito?** Proveer la información real con la que la función va a trabajar.

**Ejemplo:**
Aquí, `"Ana"` y `30` son los **argumentos**. `"Ana"` es el coche que aparca en el espacio `nombre`, y `30` es el coche que aparca en el espacio `edad`.

```javascript
//                argumento 1   argumento 2
//                    ↓             ↓
registrarUsuario(  "Ana",          30  );
// Salida en consola: "Registrando a Ana, que tiene 30 años."

// Podemos llamar la misma función con diferentes ARGUMENTOS
registrarUsuario("Luis", 25);
// Salida en consola: "Registrando a Luis, que tiene 25 años."
```

---

### Tabla Comparativa (El Momento Clave)

| Característica | Parámetro | Argumento |
| :--- | :--- | :--- |
| **¿Qué es?** | Una variable. | Un valor. |
| **¿Dónde se encuentra?** | En la **definición** de la función. `function miFuncion(param) {}` | En la **llamada** a la función. `miFuncion(arg);` |
| **Propósito** | Actúa como un **placeholder** o plantilla para recibir datos. | Es el **dato real** que se envía a la función. |
| **Analogía** | La **receta** dice "añadir (cantidad) de azúcar". `cantidad` es el parámetro. | Tú **añades "2 tazas"** de azúcar. `"2 tazas"` es el argumento. |

---

### Puntos Importantes en JavaScript

JavaScript tiene un comportamiento flexible que es bueno conocer:

1.  **Si pasas menos argumentos que parámetros:** Los parámetros que no reciben un argumento se quedan con el valor `undefined`.

    ```javascript
    function saludar(nombre, saludo) {
      console.log(`${saludo}, ${nombre}`);
    }

    saludar("Carlos"); // Solo pasamos un argumento
    // Salida: "undefined, Carlos"
    ```

2.  **Si pasas más argumentos que parámetros:** JavaScript simplemente ignora los argumentos extra. No da error.

    ```javascript
    function sumar(a, b) {
      return a + b;
    }

    sumar(5, 10, 20); // El '20' es ignorado. La función devuelve 15.
    ```

3.  **Parámetros por defecto (ES6+):** Puedes asignar un valor por defecto a un parámetro. Este valor se usará si no se proporciona un argumento para ese parámetro.

    ```javascript
    function saludar(nombre = "invitado") { // 'invitado' es el valor por defecto
      console.log(`Hola, ${nombre}`);
    }

    saludar("Maria"); // Salida: "Hola, Maria"
    saludar();        // No se pasa argumento, usa el valor por defecto. Salida: "Hola, invitado"
    ```

### En Resumen

*   **Parámetro:** La variable en la firma de la función. Es el **molde**.
*   **Argumento:** El valor que pasas cuando llamas a la función. Es la **galleta** que sale del molde.

Espero que esta analogía y los ejemplos te ayuden a solidificar la diferencia. ¡Es un pilar fundamental de la programación