// El programa arranca con este objeto:
// let notas = { matematicas: 4.2, ingles: 3.1, programacion: 4.8, etica: 3.9 };
// Mostrar cada materia con su nota, el promedio con un decimal, la materia con mejor nota y las
// materias por reforzar (nota menor a 3.5). Las funciones deben seguir funcionando si agregas
// una quinta materia sin tocarlas.

let notas = { matematicas: 4.2, ingles: 3.1, programacion: 4.8, etica: 3.9 };

function contarClaves(objeto) {
  let cantidad = 0;
  for (let clave in objeto) {
    cantidad++;
  }
  return cantidad;
}

function calcularPromedioObjeto(objeto) {
  let cantidad = contarClaves(objeto);
  if (cantidad === 0) {
    return 0;
  }
  let suma = 0;
  for (let clave in objeto) {
    suma += objeto[clave];
  }
  return suma / cantidad;
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

function filtrarClavesMenores(objeto, limite) {
  let resultado = [];
  for (let clave in objeto) {
    if (objeto[clave] < limite) {
      resultado.push(clave);
    }
  }
  return resultado;
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

for (let materia in notas) {
  console.log(materia + ": " + notas[materia]);
}
console.log("Promedio: " + calcularPromedioObjeto(notas).toFixed(1));
console.log("Mejor materia: " + buscarClaveMayor(notas));
console.log("Por reforzar: " + unirConComas(filtrarClavesMenores(notas, 3.5)));