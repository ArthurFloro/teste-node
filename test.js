const parOuImpar = require("./parimpar");
test("Verificar os os números pares ", function () {
  expect(parOuImpar(2)).toBe("par");
  expect(parOuImpar(4)).toBe("par");
  expect(parOuImpar(6)).toBe("par");

  console.log("Números testados: 2, 4 e 6");
});

test("Verificar os números ímpares", function () {
  expect(parOuImpar(3)).toBe("ímpar");
  expect(parOuImpar(7)).toBe("ímpar");
  expect(parOuImpar(9)).toBe("ímpar");

  console.log("Números testados: 3, 7 e 9");
});
