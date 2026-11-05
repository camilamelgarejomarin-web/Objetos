// Parte A. Con este objeto de códigos de aeropuerto:
// let codigos = { bogota: "BOG", medellin: "MDE", bucaramanga: "BGA", cali: "CLO" };
// Construir un objeto invertido (código: ciudad). El usuario escribe códigos hasta "fin" y el
// programa dice a qué ciudad corresponden.

// Parte B. Ahora invierte este objeto de zonas de reparto, donde un valor se repite:
// let zonas = { centro: "A", laPlaya: "B", pabloVI: "A" };
// Si lo inviertes como en la parte A, se pierde un barrio. Escribe otra función que agrupe: cada
// zona debe guardar un array con todos sus barrios.

let codigos = { bogota: "BOG", medellin: "MDE", bucaramanga: "BGA", cali: "CLO" };
let zonas = { centro: "A", laPlaya: "B", pabloVI: "A" };

function unirConComas(lista) {
  let texto = "";
  for (let i = 0; i < lista.length; i++) {
    if (i > 0) {
      texto += ", ";
    }
    texto += lista[i];
  }
  return texto;
}

function invertir(objeto) {
  let invertido = {};
  Object.entries(objeto).forEach((par) => {
    invertido[par[1]] = par[0];
  });
  return invertido;
}

function invertirAgrupando(objeto) {
  let agrupado = {};
  Object.entries(objeto).forEach((par) => {
    let barrio = par[0];
    let zona = par[1];
    if (zona in agrupado) {
      agrupado[zona].push(barrio);
    } else {
      agrupado[zona] = [barrio];
    }
  });
  return agrupado;
}

let aeropuertos = invertir(codigos);
let codigo = prompt("Código:").toUpperCase();
while (codigo !== "FIN") {
  if (codigo in aeropuertos) {
    console.log(codigo + ": " + aeropuertos[codigo]);
  } else {
    console.log("No hay ciudad con el código " + codigo);
  }
  codigo = prompt("Código:").toUpperCase();
}

let zonasAgrupadas = invertirAgrupando(zonas);
console.log("Zonas agrupadas:");
Object.entries(zonasAgrupadas).forEach((par) => {
  console.log(par[0] + ": " + unirConComas(par[1]));
});