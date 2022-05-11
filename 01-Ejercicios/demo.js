/*function sumar(num1, num2) {
  var suma = num1 + num2; 
  console.log(suma) 
}

sumar(5, 7);*/

/*function mostrarArray(miArray) {
  for (var i = 0; i < miArray.length; i++) {
    console.log(miArray[i]);
  }
}

mostrarArray([4, 5, 6, 7, 8]);
console.log("*******************");
mostrarArray([4, 5, 6, "Hola"]);*/

/*function sumar(num1, num2) { // 5,7
  var suma = num1 + num2; // 12
  return suma; // 12
}

var laSuma = sumar(5, 7); // 12

console.log(laSuma); //12*/

function mayorQue(num1, num2) {
  // Si num1 es mayor que num2
  // Si num1 es mayor que num2, que me retorne true
  // Si num1 NO es mayor que num2, que me retorne false
  if (num1 > num2) {
    return true; //terminó
  } else {
    return false; //terminó
  }

  console.log("Esto nunca va a pasar");
}

var esMayor = mayorQue(10, 5); //true
