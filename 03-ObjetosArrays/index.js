// Implementar la función crearArray, que recibe un número entero como parámetro.
// Si el número recibido es menor a 1, debe retornar false.
// Si el número recibido es mayor a 1, retornar el array de cuenta de 1 hasta el número recibido.
// EJEMPLO:
// crearArray(5)=>[1,2,3,4,5]
// crearArray(3)=>[1,2,3]
// crearArray(0)=>false
// crearArray(-5)=>false

function crearArray(num) {
  // codear acá
}

// Implementar la función introdocirElementos, que recibe como parámetro un array
// y un elemento cualquiera.
// La función debe verificar si el elemento recibido existe dentro del array.
// Si el elemento ya existe, debe retornar el string "El elemento ya existe".
// Si el elemento no existe, debe agregarlo al final del array y retornar el array
// con el nuevo elemento agregado.

function introducirElementos(array, elemento) {
  // codear acá
}

// Implementar la función validarArray, que recibe como parámetro un array.
// Se espera que el array recibido tenga 3 posiciones, que corresponden a
// [nombre,apellido,fdn] de una persona.
// La función debe verificar que en las tres posiciones haya información,
// caso contrario retornará false.
// En caso de tener la información en las 3 posiciones, rotornar true.
//
// EJEMPLO:
// validarArray(["Jorge","Vega","11/12/1991"]) => true
// validarArray(["","Vega","11/12/1991"]) => false
// validarArray(["Jorge",null,"11/12/1991"]) => false
// validarArray(["Jorge","Vega",undefined]) => false

function validarArray(array) {
  // codear acá
}

module.exports = { crearArray, introducirElementos, validarArray };
