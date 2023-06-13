// Parte 2: COMANDOS BÁSICOS.

let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";

// 4. Inciso a.
let tamañoDeCita = cita.length; 
console.log("El tamaño de la cita es: "+ tamañoDeCita);

// 4. Inciso b.
let indice = cita.indexOf(substring);
console.log("El indice del substring es: "+ indice);

// 4. Inciso c.
let citaRevisada = cita.slice(0,31);
console.log(citaRevisada);