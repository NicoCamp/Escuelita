// Implementar la función determinarMayor, la cual debe recibir por parámetros dos valores numéricos
// y retornar el mayor.
// Si los números ingresados son iguales, debe retorar el string "Son iguales"

function determinarMayor(num1, num2) {
  // Armar acá el cuerpo de la función
  if (num1 < num2) {
    return num2;
  } else {
    if (num1 > num2) {
      return num1;
    } else {
      return "Son iguales";
    }
  }
}

// Implementar la función parImpar, la cual debe recibir por parámetros un número entero.
// Retornar true... si el número es par.
// Retornar false... si el número es impar

function parImpar(num) {
  // Armar acá el cuerpo de la función
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Implementar la función esNumero, la cual debe recibir por parámetros un valor cualquiera.
// Retornar true... si el valor recibido es un número.
// Retornar false... si el valor recibido NO es un número

function esNumero(num) {
  // Armar acá el cuerpo de la función
  if (isNaN(num)) {
    return false;
  } else {
    return true;
  }
}

//No tocar nada debajo de esta línea
module.exports = { determinarMayor, parImpar, esNumero };
