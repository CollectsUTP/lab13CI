const {suma} =require("./math");

jest('probar suma 2+3 =5',()=>{

expect(suma(2,3)).toBe(5);
});
