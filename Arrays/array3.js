const notas = [10,6,8];

notas.push(7);
// O método 'push()' adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array(mesmo que esse array seja declarado por 'const').
// O método 'pop()' remove o último elemento de um array e retorna aquele elemento.

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;


console.log(media.toFixed(1));



// // NA FORMA DE LAÇO DE REPETIÇÃO:

// let notas = [10,6,8,7];
// let soma = 0;

// for(index = 0; index < notas.length; index++){
//     soma += notas[index]; 
//     media = soma / notas.length;
// }

// console.log(media);


// // NA FORMA DE ARRAY:

// let notas = [10,6,8,7];

// const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

// console.log(media);


// // NA FORMA BÁSICA DE JS:

// let nota1 = 10;
// let nota2 = 6;
// let nota3 = 8;
// let nota4 = 7;

// const media = (nota1 + nota2 + nota3 + nota4) / 4;

// console.log(media);