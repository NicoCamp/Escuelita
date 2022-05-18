// Implementar la funcion reemplazar, la cual va a recibir dos parámetros:
// - Un array
// - Un valor cualquiera.
// La función debe evaluar si el array recibido posee un tamaño mayor a 0 (cero).
// Si el tamaño del array es 0, debe retornar false.
// Si el tamaño del array es mayor a 0, debe reemplazar el último valor del array por el valor recibido como parámetro.
// array.push() -- array.pop()
// Finalmente, debe retornar el nuevo array.

function reemplazar(unArray, unValor) {
  if (!unArray.length) return false;
  unArray.pop();
  unArray.push(unValor);
  return unArray;
}

// Implementar la función soloPares, la cual va a recibir por parámetro un array.
// La función debe poder retornar un nuevo array que contenga únicamente los valores pares que se encontraban en el array recibido
// EXTRA HARDCORE: Si el array de pares que voy a retornar no tiene números (es decir, no habia números pares en el array original),
// debe retornar el string "No hay pares"

function soloPares(unArray) {
  let pares = [];
  for (let i = 0; i < unArray.length; i++)
    if (unArray[i] % 2 === 0) pares.push(unArray[i]);

  if (pares.length) return pares;
  return "No hay pares";
}

module.exports = { reemplazar, soloPares };
