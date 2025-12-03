<<<<<<< HEAD
=======

console.log("Sesión JS-04: Arrays y Bucles");

/* ================================================================
   ARRAYS (ARREGLOS) 
   ================================================================
   Un Array es una estructura de datos que nos permite almacenar 
   múltiples valores en una sola variable.
   
   Analogía: Una cajonera donde cada cajón tiene un número (índice)
   para identificar qué hay dentro.
*/
const myArray = [true, 42, "Hola", null, { nombre: "Juan" }, [1, 2, 3 ]];

// --- 1. Definición ---
// Sintaxis moderna: Usamos corchetes [] (Array Literal)
// Nota: Usamos 'const' aunque el contenido cambie. Lo que es constante
// es la referencia en memoria, no los datos internos.

const frutas = []; // empty array
const fruits = new Array(); // array using constructor (less common)

const numeros = [ 5 ]; // array with one element
const numbers = new Array(5); // array with 5 empty slots [ <5 empty items> ]

>>>>>>> main
// --- 2. Acceso a Elementos ---
// Los índices comienzan en 0 (Zero-based indexing).
// [0] -> Primer elemento
// [length - 1] -> Último elemento
<<<<<<< HEAD
const techStack = ["HTML", "CSS", "JavaScript"];

// Acceder al primer elemento
console.log(`Accediendo al primer elemento:  ${ techStack[0] }` ); // "HTML"

// Acceder al primer elemento
console.log( techStack.length ); // 3
console.log(`Accediendo al primer elemento:  ${ techStack[0] }` ); // "HTML"
// Accediendo al segundo elemento
// Acceder al último elemento (longitud - 1)

// Acceder al primer elemento
console.log( techStack.length ); // 3
console.log(`Accediendo al primer elemento:  ${ techStack[0] }` ); // "HTML"
// Accediendo al segundo elemento
console.log(`Accediendo al primer elemento:  ${ techStack[1] }` ); // 
// Acceder al último elemento (longitud - 1)
console.log(`Accediendo al primer elemento:  ${ techStack[2] }` ); // 
console.log(`Accediendo al primer elemento:  ${ techStack[techStack.length -1]}` ); // 
=======

const techStack = ["HTML", "CSS", "JavaScript"];

// Acceder al primer elemento
console.log( techStack.length ); // 3
console.log(`Accediendo al primer elemento:  ${ techStack[0] }` ); // "HTML"

// Accediendo al segundo elemento
console.log(`Accediendo al segundo elemento: ${ techStack[1] }`);

// Acceder al último elemento (longitud - 1)
console.log(`Accediendo al último elemento: ${ techStack[ techStack.length - 1 ] }`);

// --- 3. Modificación de Elementos ---
techStack[1] = "Sass"; // Cambiando "CSS" por "Sass"
console.log("Después de la modificación:", techStack); // ["HTML", "Sass", "JavaScript"]

// Agregar un nuevo elemento al final
// techStack[3]
techStack[ techStack.length ] =  "TypeScript"; // ["HTML", "Sass", "JavaScript", "TypeScript"]


/* ================================================================
   BLOQUE 2: MÉTODOS DE ARRAYS (Add/Remove) 
   ================================================================
   JavaScript nos da métodos para manipular la lista como una pila o cola.
*/
const shoppingList = ["Leche", "Huevos"];

// 1. push(): Agrega al FINAL (El más usado)
// Retorna la nueva longitud del array.
shoppingList.push("Pan"); 
console.log("Push:", shoppingList); // ["Leche", "Huevos", "Pan"]

// 2. unshift(): Agrega al INICIO (Mueve todos los índices, es más lento)
shoppingList.unshift("Café");
console.log("Unshift:", shoppingList); // ["Café", "Leche", "Huevos", "Pan"]


// --- Eliminar Elementos ---

// 3. pop(): Elimina el ÚLTIMO y lo devuelve
const removedItem = shoppingList.pop();
console.log(`Eliminado con pop: ${removedItem}`); // "Pan"
console.log("Lista actual:", shoppingList);

// 4. shift(): Elimina el PRIMERO y lo devuelve
const firstRemoved = shoppingList.shift();
console.log(`Eliminado con shift: ${firstRemoved}`); // "Café"
>>>>>>> main

// --- Método splice() ---
// Permite eliminar o agregar elementos en cualquier posición
const colors = ["Rojo", "Verde", "Azul", "Amarillo", "Morado", "Naranja"];
<<<<<<< HEAD
=======
console.log("Colores iniciales:", colors.toString() ); // "Rojo,Verde,Azul,Amarillo,Morado,Naranja"
console.log("Colores iniciales:", colors.join(" - ") ); // "Rojo - Verde - Azul - Amarillo - Morado - Naranja"

// Agregar 2 elementos en el índice 2, sin eliminar otros elementos
colors.splice(2, 0, "Rosa", "Cian");
console.log("Después de agregar con splice:", colors.toString() );
>>>>>>> main

// TODO EJERCICIO RÁPIDO:
// 1. Crea un array 'guestList' con 2 nombres.
// 2. Agrega un invitado al final.
// 3. Agrega un invitado al principio
// 4. Elimina al segundo invitado (índice 1) y agrega a otro en su lugar.
// 4. Muestra la lista final.
<<<<<<< HEAD

const arrayNombres = () => {
  const guestList = ["Amaya", "Bruno"];
  console.log(guestList.join(" - "));

  guestList.push("Fancy");
  guestList.unshift("Sergio");
  guestList.splice(1, 1, "Blanca");

  return guestList.join(" - ");
};

console.log(arrayNombres());
=======
const guestList = ['Walter', 'Jesse'];// paso 1
guestList.push('Hank'); // paso 2
guestList.unshift('Mike'); // paso 3
guestList.splice(1, 1, 'Gustavo'); // paso 4 
console.log('Lista final de invitados:', guestList.join(', ')); // paso 5
>>>>>>> main

/*================================================================
   BLOQUE 3: ESTRUCTURAS DE DATOS - PILAS Y COLAS 
   ================================================================
   Las pilas y colas son estructuras de datos que organizan cómo se 
   almacenan y acceden a los elementos.
<<<<<<< HEAD
   1. LIFO (Last-In, First-Out) - Pila (Stack)
   Concepto: El último elemento en entrar es el primero en salir.
*/
//Navegamos a sitios (push)
=======

   1. LIFO (Last-In, First-Out) - Pila (Stack)
   Concepto: El último elemento en entrar es el primero en salir.
*/

// Navegamos a sitios (push)
>>>>>>> main
const historyStack = [];
historyStack.push("google.com");
historyStack.push("youtube.com");
historyStack.push("github.com");

<<<<<<< HEAD
console.log("Historial actual:", historyStack);
=======
console.log("Historial actual:" + historyStack); // ["google.com", "youtube.com", "github.com"]

// Presiono el botón de "atrás"
console.log(`Regresando a: ${ historyStack.pop() }`); // "github.com"
>>>>>>> main

/*   2. FIFO (First-In, First-Out) - Cola (Queue)
   Concepto: El primer elemento en entrar es el primero en salir.
*/
const printQueue = [];
printQueue.push("thesis.pdf");
printQueue.push("meme.png");
printQueue.push("invoice.docx");
<<<<<<< HEAD
console.log("Cola de impresión:", printQueue); // ["thesis.pdf", "meme.png", "invoice.docx"]
// La impresora termina el primer trabajo (shift)
const printingNow = printQueue.shift();
console.log(`Imprimiendo: ${printingNow}`); // thesis.pdf (El primero que llegó)

=======

console.log("Cola de impresión:", printQueue); // ["thesis.pdf", "meme.png", "invoice.docx"]

// La impresora termina el primer trabajo (shift)
const printingNow = printQueue.shift();

console.log(`Imprimiendo: ${printingNow}`); // thesis.pdf (El primero que llegó)
>>>>>>> main

/* ================================================================
 Ejercicio:
   Crea un array llamado 'taskList' para gestionar tareas.
   1. Agrega 3 tareas usando 'push'.
   2. Muestra la lista completa de tareas.
   3. Las tareas normales se atienden en orden de llegada (FIFO)
   3.1 Retira (elimina) la primera tarea de la lista y muéstrala.
   4. No dan un tarea URGENTE que debe ser atendido inmediatamente.
    Por lo que debes poner al inicio de la lista.
   5. Muestra la lista actualizada.
   6. Atiende (elimina) la primera tarea de la lista y muéstrala.
*/
<<<<<<< HEAD
const taskListFunction = () => {
    const taskList = [];
    taskList.push("taskOne", "taskTwo", "taskThree");
    console.log(taskList.join(" - "));
    taskList.shift();
    console.log(taskList.join(" - "));
    taskList.unshift("taskFour");
    console.log(taskList.join(" - "));
    taskList.shift();
    console.log(taskList.join(" - "));
    return taskList;
}

console.log(taskListFunction());
=======
// Crea un array llamado 'taskList' para gestionar tareas.
   const taskList = [];
// 1. Agrega 3 tareas usando 'push'.
   taskList.push("Barrer", "Trapear", "Sacudir");
// 2. Muestra la lista completa de tareas.
   console.log("Lista de tareas inicial: " + taskList.join(", "));
// 3. Las tareas normales se atienden en orden de llegada (FIFO)
// 3.1 Retira (elimina) la primera tarea de la lista y muéstrala.
   console.log("Tarea completada: " + taskList.shift());
// 4. No dan una tarea URGENTE que debe ser atendida inmediatamente. Por lo que debes ponerla al inicio de la lista.
   taskList.unshift("Limpiar arenero");
// 5. Muestra la lista actualizada.
   console.log("Tarea URGENTE añadida, lista de tareas actualizada: " + taskList.join(", "));
// 6. Atiende (elimina) la primera tarea de la lista y muéstrala.
   console.log("Tarea URGENTE completada: " + taskList.shift());
   console.log("Lista de tareas final: " + taskList.join(", "));

>>>>>>> main

/* ================================================================
   BLOQUE 3: BUCLES (LOOPS) 
   ================================================================
   Estructuras que repiten un bloque de código mientras una condición sea verdadera.
*/
<<<<<<< HEAD
// --- 1. Ciclo FOR (Controlado) ---
// Úsalo cuando sabes cuántas veces quieres repetir algo (ej. recorrer un array).
// Sintaxis: for (expresión_inicial; condición; expresión_final) { ... }
// Imprimier los números del 1 al 5
for(let i = 1; i <=5 ; i++ ) {
    console.log(`Número ${i}`);
};

// ------------------- Uso de break en ciclos ----------------------------
// break detiene la ejecución de la iteración en curso y termina el ciclo.
for(let i = 1; i <=10 ; i++ ) {
    if(i === 6) {
        console.log("¡Se alcanzó el número 6!");
        break; 
    }
      console.log(`(con break) Número ${i}`);
};

// =============================================
let iteracion = 0;
=======

// --- 1. Ciclo FOR (Controlado) ---
// Úsalo cuando sabes cuántas veces quieres repetir algo (ej. recorrer un array).
// Sintaxis: for (expresión_inicial; condición; expresión_final) { ... }

// Imprimier los números del 1 al 5

for(let i = 1; i <=5 ; i++ ) {
    console.log(`Número ${i}`);
}

// ------------------- Uso de break en ciclos ----------------------------
// break detiene la ejecución de la iteración en curso y termina el ciclo.

for(let i = 1; i <=10 ; i++ ) {
    if(i === 6) {
        console.log("¡Se alcanzó el número 6");
        break; 
    }
      console.log(`(con break) Número ${i}`);
}

// ===============Ejercicio mentales ====================

let iteracion = 0;

>>>>>>> main
for (  ;   ;  ){
    console.log( `Núm de iteración: ${iteracion}` ); // 0 , 1, 2, 3, 4
    iteracion++;
    if ( iteracion === 5 ){
        break;
    }
<<<<<<< HEAD
};

// =====================================================
 let jiteration;
=======
}
console.log("Final", iteracion); // 5

// =====================================================

let myIteration; 

for (myIteration = 0; myIteration <= 5; myIteration++) {
    console.log("For loop", myIteration ); // 0 , 1, 2
     if( myIteration === 2) break;  
}
console.log("Final", myIteration); //  2

// =====================================================
 let jiteration;

>>>>>>> main
for ( jiteration = 0; jiteration < 3; jiteration++ ) {
   console.log("For loop", jiteration ); //
}
console.log("Final", jiteration); //

// =====================================================
let k;
<<<<<<< HEAD
for ( k = 0; k < 5; k++ )         ; 
=======
for ( k = 0; k < 5; k++ )   ; 

>>>>>>> main
{
   console.log("Valor de", k ); // 5
}
console.log("Final", k); // 5

<<<<<<< HEAD
=======

// ------------------- Uso de continue en ciclos ----------------------------
// break: Termina completamente un bucle (for, while, switch, etc.).
// continue: Salta la iteración actual y pasa a la siguiente sin salir del bucle.

for (let i = 0 ; i <= 5; i++ ){
    if ( i === 3) continue;
    console.log("Estoy dentro del ciclo for"); 
    console.log("Valor de i ", i ); // 0,1,2,4,5
}


>>>>>>> main
// --- 2. Ciclo WHILE (Basado en condición) ---
// Úsalo cuando NO sabes cuántas veces se repetirá, depende de algo externo.
// Cuidado: Si la condición nunca es falsa, creas un bucle infinito (Infinite Loop).

<<<<<<< HEAD
=======
/*
>>>>>>> main
while(  confirm("¿Quieres tu número de la suerte")  ){
    const numeroSuerte = Math.random(); // 0....1.0(sin incluir 1.0)
    console.log("Tu número de la suerte es: " + numeroSuerte);
}
console.log("Gracias por participar");
<<<<<<< HEAD

/* Imprimier los números del 1 al 5 (usando WHILE)
for(let i = 1; i <=5 ; i++ ) {
    console.log(`Número ${i}`);
}
    */

let i = 1;

while (i <= 5) {
   console.log(`El valor de i es : ${i}`);
   i++;
};
=======
*/

/* ================================================================
   BLOQUE 4: DIFERENCIAS Y EJERCICIO INTEGRADO 
   ================================================================
   
   FOR vs WHILE:
   - FOR: Ideal para iterar colecciones (arrays) o rangos numéricos fijos.
          "Repite esto 10 veces".
          
   - WHILE: Ideal para lógica de estado.
            "Repite esto MIENTRAS el usuario no presione SALIR".
*/

// Imprimier los números del 1 al 5 (usando WHILE)
for(let i = 1; i <=5 ; i++ ) {
    console.log(`Número ${i}`);
}

let i = 1;
while(i<=5){
   console.log("Valor de i es:", i);
   i++
}

// ================================================================
>>>>>>> main

const countries = ["México", "USA", "Canadá", "Japón"];
// Usando FOR LOOP
for (let index = 0; index < countries.length; index++) {
   const element = countries[index];
   console.log(`(for) País en índice ${index}: ${element}`);   
<<<<<<< HEAD
};

=======
}

// Usando For OF (ES6+)
for (const country of countries) {
   console.log(`(for of) País: ${country}`);
}
>>>>>>> main

// TODO: RETO FINAL (Simulación de Cajero)
// Tienes un array de movimientos: [100.00, -50.00, 200.00, -100.00]
// 1. Usa un ciclo FOR, o WHILE o FOR-OF para recorrer los movimientos.
// 2. Suma los valores a una variable 'totalBalance'.
// 3. Imprime el balance final.
<<<<<<< HEAD
const transactions = [100.00, -50.00, 200.00, -100.00, 500.00];
let totalBalance = 0;

for(let i = 0; i < transactions.length; i++){
   totalBalance += transactions[i];
    console.log(`Iteración numero ${i}, suma actual: ${totalBalance}`);
}

console.log(`El total es igual a: ${totalBalance}`);

=======

const transactions = [100.00, -50.00, 200.00, -100.00, 500.00];
let totalBalance = 0;

// usando for-each
transactions.forEach( (transaction, index, array)=> totalBalance += transaction );
>>>>>>> main
