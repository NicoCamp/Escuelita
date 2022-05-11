const { determinarMayor, parImpar, esNumero } = require("./index");

describe("Test de la funcion determinarMayor", () => {
  test("La función recibe dos números y retorna el mayor", () => {
    expect(determinarMayor(5, 6)).toBe(6);
    expect(determinarMayor(0, 8)).toBe(8);
    expect(determinarMayor(5.5, 5.8)).toBe(5.8);
    expect(determinarMayor(-10, 0)).toBe(0);
  });
  test("Si los números son iguales, la función debe retornar el string 'Son iguales'", () => {
    expect(determinarMayor(5, 5)).toBe("Son iguales");
    expect(determinarMayor(6, 6)).toBe("Son iguales");
    expect(determinarMayor(0, 0)).toBe("Son iguales");
  });
});

describe("Test de la funcion parImpar", () => {
  test("Si el número recibido es par, la función debe retornar true", () => {
    expect(parImpar(2)).toBe(true);
    expect(parImpar(8)).toBe(true);
    expect(parImpar(20)).toBe(true);
    expect(parImpar(100)).toBe(true);
  });
  test("Si el número recibido es impar, la función debe retornar false", () => {
    expect(parImpar(3)).toBe(false);
    expect(parImpar(9)).toBe(false);
    expect(parImpar(21)).toBe(false);
    expect(parImpar(101)).toBe(false);
  });
});

describe("Test de la funcion esNumero", () => {
  test("Si el valor recibido es un número, debe retornar true", () => {
    expect(esNumero(2)).toBe(true);
    expect(esNumero(0)).toBe(true);
    expect(esNumero(10.8)).toBe(true);
    expect(esNumero(-10)).toBe(true);
  });
  test("Si el número recibido NO es un número, debe devolver false", () => {
    expect(esNumero("No soy un número")).toBe(false);
    expect(esNumero("Yo tampoco")).toBe(false);
    expect(esNumero([1, 2, 3])).toBe(false);
    expect(esNumero(["a", "b", "c"])).toBe(false);
    expect(esNumero({ clave: "valor" })).toBe(false);
  });
});
