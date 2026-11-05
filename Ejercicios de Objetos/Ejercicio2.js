// El programa arranca con este objeto:
// let cliente = { nombre: "Jorge Díaz", telefono: "3001234567", barrio: "La Playa", ciudad: "San Gil" };
// El usuario escribe qué dato quiere cambiar y el valor nuevo. Si la clave no existe, se avisa y no
// se crea. Se repite hasta que escriba "fin". Al final se muestra el perfil.


let cliente = { nombre: "Jorge Díaz", telefono: "3001234567", barrio: "La Playa", ciudad: "San Gil" };

function existeClave(objeto, clave) {
  return clave in objeto;
}

function actualizarDato(objeto, clave, valor) {
  objeto[clave] = valor;
}

function mostrarCliente(cliente) {
  console.log("Perfil final:");
  console.log("Nombre: " + cliente.nombre);
  console.log("Teléfono: " + cliente.telefono);
  console.log("Barrio: " + cliente.barrio);
  console.log("Ciudad: " + cliente.ciudad);
}

let clave = prompt("¿Qué dato quieres cambiar?").toLowerCase();
while (clave !== "fin") {
  if (existeClave(cliente, clave)) {
    let valor = prompt("Nuevo valor:");
    actualizarDato(cliente, clave, valor);
    console.log("Actualizado: " + clave + " = " + valor);
  } else {
    console.log("El dato " + clave + " no existe");
  }
  clave = prompt("¿Qué dato quieres cambiar?").toLowerCase();
}
mostrarCliente(cliente);