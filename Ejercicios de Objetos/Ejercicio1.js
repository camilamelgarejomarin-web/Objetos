// Leer el nombre, la edad, el número de ficha y el programa de un aprendiz, y guardarlos en un
// objeto. Agregar al objeto una propiedad mayorDeEdad con true o false según la edad.

let aprendiz = prompt("ingrese nombre del aprendiz:");
let ficha = prompt("ingrese el  numero de ficha");
let formacion = prompt("ingrese el programa al que pertenece :");

let años = Number(prompt("ingrese su edad"));
while (años <=0 ){
    años = Number(prompt("Ingrese una edad válida"));
}

const persona = {
    nombre: aprendiz,
    NoFicha: ficha,
    programa: formacion,
    edad: años,
}
 MayorDeEdad:
   if (persona.edad >= 18) {
    persona.MayorDeEdad = true;
} else {
    persona.MayorDeEdad = false;
}
console.log(persona);

