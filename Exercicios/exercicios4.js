// 1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

function variosArray(...arrs) {

   return arraysUnidos = arrs.reduce((acc, item) => acc + item, []);

}

let letras1 = ['A', 'B', 'C'];
let letras2 = [, 'D', 'E', 'F'];
let letras3 = [, 'G', 'H', 'I'];

const alfabeto = letras1 + letras2 + letras3;
console.log(alfabeto);



