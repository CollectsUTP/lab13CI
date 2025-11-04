// math.test.js

const { suma } = require("./math");

// Cambia 'jest' por 'test' o 'it'
test('probar suma 2+3 = 5', () => {

  expect(suma(2, 3)).toBe(5);
  
});


const {multiplicar} = require("./math");
test('probar multiplicaicon 2*2=4', ()=>{
expect(multiplicar(2,2)).toBe(4);
});
