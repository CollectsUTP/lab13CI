

const { mult } = require("./mult");

// Cambia 'jest' por 'test' o 'it'
test('probarmltiplicacion 2*2 = 4', () => {

  expect(mult(2, 2)).toBe(4);
  
});
