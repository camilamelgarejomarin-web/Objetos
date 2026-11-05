// Leer una frase, pasarla a minúsculas y separarla en palabras con split(" "). Contar cuántas
// veces aparece cada palabra usando un objeto. Mostrar cada palabra con su conteo en el orden
// en que apareció por primera vez, cuántas palabras distintas hay y cuál es la más repetida. Si
// hay empate, gana la que apareció primero.


function contarPalabras(frase) {
  let palabras = frase.toLowerCase().split(" ");
  let contador = {};
  for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    if (palabra === "") {
      continue;
    }
    if (palabra in contador) {
      contador[palabra] = contador[palabra] + 1;
    } else {
      contador[palabra] = 1;
    }
  }
  return contador;
}

function contarClaves(objeto) {
  let cantidad = 0;
  for (let clave in objeto) {
    cantidad++;
  }
  return cantidad;
}

function buscarClaveMayor(objeto) {
  let claveMayor;
  let valorMayor;
  for (let clave in objeto) {
    if (claveMayor === undefined || objeto[clave] > valorMayor) {
      claveMayor = clave;
      valorMayor = objeto[clave];
    }
  }
  return claveMayor;
}

let frase = prompt("Frase:");
let contador = contarPalabras(frase);
for (let palabra in contador) {
  console.log(palabra + ": " + contador[palabra]);
}
console.log("Palabras distintas: " + contarClaves(contador));
let masRepetida = buscarClaveMayor(contador);
console.log("Más repetida: " + masRepetida + " (" + contador[masRepetida] + " veces)");
