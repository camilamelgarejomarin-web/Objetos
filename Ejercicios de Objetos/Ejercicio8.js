// El programa arranca con este inventario:
// let inventario = { arepas: 20, empanadas: 35, jugos: 15, tintos: 40 };
// Se registran ventas: producto y cantidad, hasta que el producto sea "fin". Si el producto no
// existe o no hay suficiente, se avisa y no se modifica nada. Al final se muestra el inventario y los
// productos agotados.

let inventario = { arepas: 20, empanadas: 35, jugos: 15, tintos: 40 };

function vender(inventario, producto, cantidad) {
  if (!(producto in inventario)) {
    return "No vendemos " + producto;
  }
  if (isNaN(cantidad) || cantidad <= 0) {
    return "Cantidad no válida";
  }
  if (cantidad > inventario[producto]) {
    return "Solo quedan " + inventario[producto] + " " + producto;
  }
  inventario[producto] = inventario[producto] - cantidad;
  return "Vendidas " + cantidad + " " + producto + ". Quedan " + inventario[producto];
}

function obtenerAgotados(inventario) {
  let agotados = [];
  for (let producto in inventario) {
    if (inventario[producto] === 0) {
      agotados.push(producto);
    }
  }
  return agotados;
}

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

let producto = prompt("Producto:").toLowerCase();
while (producto !== "fin") {
  let cantidad = Number(prompt("Cantidad:"));
  console.log(vender(inventario, producto, cantidad));
  producto = prompt("Producto:").toLowerCase();
}

console.log("Inventario final:");
for (let item in inventario) {
  console.log(item + ": " + inventario[item]);
}
let agotados = obtenerAgotados(inventario);
console.log("Agotados: " + (agotados.length > 0 ? unirConComas(agotados) : "ninguno"));
