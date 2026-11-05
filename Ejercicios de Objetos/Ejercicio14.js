// Con este inventario:
// let inventario = { arepas: 20, empanadas: 8, jugos: 0, tintos: 40, pandebonos: 5 };
// Mostrar cuántos productos hay, el total de unidades, los productos con stock bajo (más de 0 y
// menos de 10) con su cantidad, y los agotados. Usa Object.entries, Object.values, filter
// y map; nada de for ni for...in.


let inventario = { arepas: 20, empanadas: 8, jugos: 0, tintos: 40, pandebonos: 5 };

function contarUnidades(inventario) {
  return Object.values(inventario).reduce((total, cantidad) => total + cantidad, 0);
}

function obtenerStockBajo(inventario) {
  return Object.entries(inventario).filter((par) => par[1] > 0 && par[1] < 10);
}

function obtenerAgotados(inventario) {
  return Object.entries(inventario)
    .filter((par) => par[1] === 0)
    .map((par) => par[0]);
}

function unirConComas(lista) {
  return lista.join(", ");
}

function formatearPares(pares) {
  return unirConComas(pares.map((par) => par[0] + " (" + par[1] + ")"));
}

let agotados = obtenerAgotados(inventario);
console.log("Productos: " + Object.entries(inventario).length);
console.log("Unidades en total: " + contarUnidades(inventario));
console.log("Stock bajo: " + formatearPares(obtenerStockBajo(inventario)));
console.log("Agotados: " + (agotados.length > 0 ? unirConComas(agotados) : "ninguno"));