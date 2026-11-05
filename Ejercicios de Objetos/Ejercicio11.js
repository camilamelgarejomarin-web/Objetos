// El programa arranca con el menú de precios:
// let precios = { arepa: 3500, empanada: 2500, jugo: 4000, tinto: 1500 };
// El usuario agrega productos y cantidades hasta escribir "fin". Los productos se guardan en un
// objeto items (producto: cantidad). Si pide un producto que ya estaba, la cantidad se suma. Si
// no está en el menú, se rechaza. Al final se muestra el detalle, el subtotal, el domicilio (000 si
// el subtotal es menor a 0000; si no, gratis) y el total.

let precios = { arepa: 3500, empanada: 2500, jugo: 4000, tinto: 1500 };
let items = {};

function agregarItem(items, producto, cantidad) {
  if (producto in items) {
    items[producto] = items[producto] + cantidad;
  } else {
    items[producto] = cantidad;
  }
}

function calcularSubtotal(items, precios) {
  let subtotal = 0;
  for (let producto in items) {
    subtotal += items[producto] * precios[producto];
  }
  return subtotal;
}

function calcularDomicilio(subtotal) {
  if (subtotal < 20000) {
    return 3000;
  }
  return 0;
}

function mostrarDetalle(items, precios) {
  console.log("Detalle:");
  for (let producto in items) {
    console.log(producto + " x" + items[producto] + " = $" + items[producto] * precios[producto]);
  }
}

let producto = prompt("Producto:").toLowerCase();
while (producto !== "fin") {
  let cantidad = Number(prompt("Cantidad:"));
  if (!(producto in precios)) {
    console.log(producto + " no está en el menú");
  } else if (isNaN(cantidad) || cantidad <= 0) {
    console.log("Cantidad no válida");
  } else {
    agregarItem(items, producto, cantidad);
  }
  producto = prompt("Producto:").toLowerCase();
}

mostrarDetalle(items, precios);
let subtotal = calcularSubtotal(items, precios);
let domicilio = calcularDomicilio(subtotal);
console.log("Subtotal: $" + subtotal);
console.log("Domicilio: $" + domicilio);
console.log("Total: $" + (subtotal + domicilio));