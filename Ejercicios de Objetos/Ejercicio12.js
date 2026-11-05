// Ejecuta esto y explica el resultado en un comentario:
// let a = { nombre: "Morral", precio: 85000 };
// let b = { nombre: "Morral", precio: 85000 };
// console.log(a === b);
// Después escribe una función que diga si dos objetos tienen exactamente las mismas claves
// con los mismos valores (solo un nivel, sin objetos adentro). Pruébala con los cuatro casos del
// ejemplo.

let a = { nombre: "Morral", precio: 85000 };
let b = { nombre: "Morral", precio: 85000 };
console.log(a === b);

function contarClaves(objeto) {
  let cantidad = 0;
  for (let clave in objeto) {
    cantidad++;
  }
  return cantidad;
}

function sonIguales(a, b) {
  if (contarClaves(a) !== contarClaves(b)) {
    return false;
  }
  for (let clave in a) {
    if (!(clave in b) || a[clave] !== b[clave]) {
      return false;
    }
  }
  return true;
}

let caso1a = { nombre: "Morral", precio: 85000 };
let caso1b = { nombre: "Morral", precio: 85000 };
let caso2b = { nombre: "Morral", precio: 90000 };
let caso3a = { nombre: "Morral" };
let caso3b = { nombre: "Morral", precio: 85000 };
let caso4b = { precio: 85000, nombre: "Morral" };

console.log("Caso 1, iguales: " + sonIguales(caso1a, caso1b));
console.log("Caso 2, distinto precio: " + sonIguales(caso1a, caso2b));
console.log("Caso 3, a tiene menos claves que b: " + sonIguales(caso3a, caso3b));
console.log("Caso 4, mismas claves en otro orden: " + sonIguales(caso1a, caso4b));