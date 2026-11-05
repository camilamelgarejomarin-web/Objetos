// El programa arranca con este glosario:
// let glosario = {
//   api: "Conjunto de reglas para que dos programas se comuniquen.",
//   servidor: "Programa que recibe peticiones y devuelve respuestas.",
//   ruta: "Dirección a la que llega una petición, como /productos.",
//   middleware: "Función que se ejecuta entre la petición y la respuesta.",
//   endpoint: "Combinación de un método HTTP y una ruta."
// };
// El usuario escribe términos hasta "fin" y el programa muestra la definición, sin importar
// mayúsculas. Si el término no está, pregunta si quiere agregarlo y, si sí, pide la definición y lo
// agrega. Al final dice cuántos términos tiene el glosario.


let glosario = {
  api: "Conjunto de reglas para que dos programas se comuniquen.",
  servidor: "Programa que recibe peticiones y devuelve respuestas.",
  ruta: "Dirección a la que llega una petición, como /productos.",
  middleware: "Función que se ejecuta entre la petición y la respuesta.",
  endpoint: "Combinación de un método HTTP y una ruta."
};

function buscarDefinicion(glosario, termino) {
  return glosario[termino];
}

function contarClaves(objeto) {
  let cantidad = 0;
  for (let clave in objeto) {
    cantidad++;
  }
  return cantidad;
}

let termino = prompt("Término:").toLowerCase();
while (termino !== "fin") {
  let definicion = buscarDefinicion(glosario, termino);
  if (definicion !== undefined) {
    console.log(termino + ": " + definicion);
  } else {
    console.log('"' + termino + '" no está en el glosario');
    let agregar = prompt("¿Quieres agregarlo? (si/no):").toLowerCase();
    if (agregar === "si") {
      glosario[termino] = prompt("Definición:");
      console.log("Agregado");
    }
  }
  termino = prompt("Término:").toLowerCase();
}
console.log("El glosario tiene " + contarClaves(glosario) + " términos");