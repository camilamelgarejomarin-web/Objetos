// El programa arranca con este objeto:
// let producto = { nombre: "Morral", precio: 85000, stock: 12 };
// Leer un porcentaje de descuento. Una función debe retornar un objeto nuevo con el precio
// rebajado y una propiedad extra precioAnterior. Las demás propiedades se copian igual.
// Mostrar ambos objetos para demostrar que el original quedó intacto.

let producto = { nombre: "Morral", precio: 85000, stock: 12 };

function aplicarDescuento(producto, porcentaje) {
  let oferta = {};
  oferta.nombre = producto.nombre;
  oferta.precio = Math.round(producto.precio - (producto.precio * porcentaje) / 100);
  oferta.stock = producto.stock;
  oferta.precioAnterior = producto.precio;
  return oferta;
}

function textoProducto(producto) {
  let linea = producto.nombre + " - $" + producto.precio;
  if ("precioAnterior" in producto) {
    linea += " (antes $" + producto.precioAnterior + ")";
  }
  linea += " - " + producto.stock + " unidades";
  return linea;
}

function mostrarProducto(titulo, producto) {
  console.log(titulo + ": " + textoProducto(producto));
}

let porcentaje = Number(prompt("Porcentaje de descuento:"));
let productoEnOferta = aplicarDescuento(producto, porcentaje);
mostrarProducto("Original", producto);
mostrarProducto("En oferta", productoEnOferta);