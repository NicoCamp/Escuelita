// Implementar la función determinarMayor, la cual debe recibir por parámetros dos valores numéricos
// y retornar el mayor.
// Si los números ingresados son iguales, debe retorar el string "Son iguales"

function determinarMayor(num1, num2) {
<<<<<<< HEAD
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
=======
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
>>>>>>> 739c32eb9c13e1f9d6b48be866edf61c356f2577
}

// Implementar la función parImpar, la cual debe recibir por parámetros un número entero.
// Retornar true... si el número es par.
// Retornar false... si el número es impar

function parImpar(num) {
<<<<<<< HEAD
  // Armar acá el cuerpo de la función
=======
>>>>>>> 739c32eb9c13e1f9d6b48be866edf61c356f2577
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
<<<<<<< HEAD
  // Armar acá el cuerpo de la función
  if (isNaN(num)) {
    return false;
  } else {
    return true;
  }
=======
  if (typeof num === "number") return true;
  return false;
>>>>>>> 739c32eb9c13e1f9d6b48be866edf61c356f2577
}

//No tocar nada debajo de esta línea
module.exports = { determinarMayor, parImpar, esNumero };
