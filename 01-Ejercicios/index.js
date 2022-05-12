// Implementar la función determinarMayor, la cual debe recibir por parámetros dos valores numéricos
// y retornar el mayor.
// Si los números ingresados son iguales, debe retorar el string "Son iguales"

function determinarMayor(num1, num2) {
  /*if (num1 > num2) {
    return num1;
  } else {
    if (num2 > num1) {
      return num2;
    } else {
      return "Son iguales";
    }
  }*/
  if (num1 > num2) return num1;
  if (num2 > num1) return num2;
  return "Son iguales";
}

// Implementar la función parImpar, la cual debe recibir por parámetros un número entero.
// Retornar true... si el número es par.
// Retornar false... si el número es impar

function parImpar(num) {
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
  if (typeof num === "number") return true;
  return false;
}

//No tocar nada debajo de esta línea
module.exports = { determinarMayor, parImpar, esNumero };
