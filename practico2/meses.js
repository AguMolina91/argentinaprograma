// EJERCICIO 2: Condicionales.

const readlineSync = require('readline-sync');

let mes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio",
 "agosto", "septiembre", "octubre" , "noviembre", "diciembre"];

let dias = [28, 30, 31];

const numero = readlineSync.questionInt("Ingrese un numero del 1 al 12: ");

if (numero === 1 || numero === 3 || numero === 5 || numero === 7 || numero === 8 || numero === 10 || numero === 12) {
    console.log ("La cantidad de dias del mes de %s es %i.", mes[numero-1], dias[2]);
} else if (numero === 4 || numero === 6 || numero === 9 || numero === 11) {
    console.log ("La cantidad de dias del mes de %s es %i.", mes[numero-1], dias[1]);
} else if (numero === 2) {
    console.log ("La cantidad de dias del mes de %s es %i.", mes[numero-1], dias[0]);
} else {
    console.log ("Ingrese un numero correcto");
}
