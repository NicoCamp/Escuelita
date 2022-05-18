class Auto {
  constructor() {
    this.n_ruedas = 4;
    this.n_puertas = 5;
    this.n_asientos = 3;
    this.arrancado = false;
    this.velocidad = 0;
  }
}
Auto.prototype.arrancar = function () {
  this.arrancado = !this.arrancado;
};

Auto.prototype.acelerar = function (velocidad) {
  if (!this.arrancado)
    return console.log("No se pude acelerar porque el vehículo está apagado");
  this.velocidad = velocidad;
};

let chevrolet = new Auto();

/*console.log(chevrolet.arrancado); //false
chevrolet.arrancar(); // un método que va a arrancar el auto
console.log(chevrolet.arrancado); // true
console.log("Velocidad: ", chevrolet.velocidad);
chevrolet.acelerar(100);
console.log("Velocidad: ", chevrolet.velocidad);*/

let unArray = ["Bélgica", "Croacia", "Argentina"];
unArray.reverse();
console.log(unArray);
unArray.sort();
console.log(unArray);
