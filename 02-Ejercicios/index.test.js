const { reemplazar, soloPares } = require("./index");

describe("Test de la funcion reemplazar", () => {
  test("Si el tamaño del array es 0, debe retornar false", () => {
    expect(reemplazar([], 5)).toBe(false);
    expect(reemplazar([], "Hola")).toBe(false);
    expect(reemplazar([], { a: "valor" })).toBe(false);
  });
  test("Si el tamaño del array es mayor a 0, debe reemplazar el último valor del array por el valor recibido por parámtro y retornar el nuevo array", () => {
    expect(reemplazar([1, 2, 3], 5)).toEqual([1, 2, 5]);
    expect(reemplazar([4, 5, 9], "Hola")).toEqual([4, 5, "Hola"]);
    expect(reemplazar(["Adrián", "Juampi", "Nico"], "Un extraño")).toEqual([
      "Adrián",
      "Juampi",
      "Un extraño",
    ]);
  });
});

describe("Test de la funcion soloPares", () => {
  test("Debe recibir un array y retorar un nuevo array con los valores pares", () => {
    expect(soloPares([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    expect(soloPares([10, 12, 14, 16, 100, 102])).toEqual([
      10, 12, 14, 16, 100, 102,
    ]);
    expect(soloPares([-4, 0, 6, 8, 5, 6])).toEqual([-4, 0, 6, 8, 6]);
  });
});

describe("Test del EXTRA HARDCORE", () => {
  test("Si el array recibido no tiene pares, debe retornar el string 'No hay pares'", () => {
    expect(soloPares([1, 3, 5, 7])).toEqual("No hay pares");
    expect(soloPares([5, 9, 13, 15])).toEqual("No hay pares");
    expect(soloPares([-1, -3, -99, 103])).toEqual("No hay pares");
  });
});
