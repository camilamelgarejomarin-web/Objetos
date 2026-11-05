// leer el nombre del cliente y la cantidad de adultos, y crear una reserva con la actividad "Rafting
// río Fonce" y seguro: true. Preguntar si van menores; si sí, agregar la propiedad menores con
// su cantidad. Preguntar si rechaza el seguro; si sí, eliminar la propiedad seguro. Calcular el
// total: $70000 por adulto, $50000 por menor y $8000 por persona si hay seguro. Mostrar solo los
// datos que existen en la reserva.


function crearReserva(cliente, adultos) {
  return {
    cliente: cliente,
    actividad: "Rafting río Fonce",
    adultos: adultos,
    seguro: true
  };
}

function calcularTotal(reserva) {
  let personas = reserva.adultos;
  let total = reserva.adultos * 70000;
  if ("menores" in reserva) {
    total += reserva.menores * 50000;
    personas += reserva.menores;
  }
  if ("seguro" in reserva) {
    total += personas * 8000;
  }
  return total;
}

function mostrarReserva(reserva) {
  console.log("--- Reserva ---");
  console.log("Cliente: " + reserva.cliente);
  console.log("Actividad: " + reserva.actividad);
  console.log("Adultos: " + reserva.adultos);
  if ("menores" in reserva) {
    console.log("Menores: " + reserva.menores);
  }
  console.log("Seguro: " + ("seguro" in reserva ? "incluido" : "no incluido"));
  console.log("Total: $" + calcularTotal(reserva));
}

let nombre = prompt("Cliente:");
let adultos = Number(prompt("Adultos:"));
let reserva = crearReserva(nombre, adultos);

let hayMenores = prompt("¿Van menores de edad? (si/no):").toLowerCase();
if (hayMenores === "si") {
  reserva.menores = Number(prompt("¿Cuántos menores?:"));
}

let rechaza = prompt("¿Rechaza el seguro? (si/no):").toLowerCase();
if (rechaza === "si") {
  delete reserva.seguro;
}

mostrarReserva(reserva);