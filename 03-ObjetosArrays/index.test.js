const { crearArray, introducirElementos, validarArray } = require("./index");

describe("Test de la función crearArray", () => {
  test("Si recibe un número menor a 1, debe retornar false", () => {
    expect(crearArray(0)).toEqual(false);
    expect(crearArray(-1)).toEqual(false);
    expect(crearArray(-10)).toEqual(false);
  });
  test("Debe retornar un array con la cuenta hasta el número recibido", () => {
    expect(crearArray(3)).toEqual([1, 2, 3]);
    expect(crearArray(5)).toEqual([1, 2, 3, 4, 5]);
    expect(crearArray(8)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});

describe("Test de la función introducirElementos", () => {
  test("Si el elemento ya existe, debe retorar el string 'El elemento ya existe'", () => {
    expect(introducirElementos([1, 2, 3], 3)).toEqual("El elemento ya existe");
    expect(introducirElementos([4, 5, 6], 5)).toEqual("El elemento ya existe");
    expect(introducirElementos(["Juan", 5, "Pedro"], "Juan")).toEqual(
      "El elemento ya existe"
    );
  });
  test("Si el elemento no existe, debe introducirlo al final y retornar el array", () => {
    expect(introducirElementos([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
    expect(introducirElementos([1, 2, 5], 8)).toEqual([1, 2, 5, 8]);
    expect(introducirElementos([1, 2, 5], "Pedro")).toEqual([1, 2, 5, "Pedro"]);
    expect(introducirElementos([], "Pedro")).toEqual(["Pedro"]);
  });
});

describe("Test de la función validarArray", () => {
  test("Si la información está completa, debe retornar true", () => {
    expect(validarArray(["Jorge", "Vega", "11/12/1991"])).toEqual(true);
    expect(validarArray(["Pedro", "Gómez", "12/12/1887"])).toEqual(true);
    expect(validarArray(["Marta", "Sánchez", "11/10/1912"])).toEqual(true);
  });
  test("Si hay información faltante, debe retornar false", () => {
    expect(validarArray(["", "Gómez", "12/12/1887"])).toEqual(false);
    expect(validarArray(["Jorge", null, "12/12/1887"])).toEqual(false);
    expect(validarArray(["Jorge", "Gómez", undefined])).toEqual(false);
  });
});
