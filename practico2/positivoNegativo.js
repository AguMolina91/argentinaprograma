// EJERCICIO 1: Condicionales.

const readlineSync = require('readline-sync');

// 1. Inciso b.

let numero = readlineSync.question("Ingrese un numero: ");

if (numero > 0) {
    console.log ("El numero es positivo");
} else if (numero < 0) {
    console.log ("El numero es negativo");
} else {
    console.log ("El numero es cero");
}






