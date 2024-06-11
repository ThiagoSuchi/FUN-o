/*ForEach é uma ação que permite executar uma função para cada elemento, sejam eles arrays simples ou de objetos. Diferente do FOR o Foreach precisa de um array inicial pois ele é um método que se executa apartir de um parametro existente. O FOREACH É UM MÉTODO SÍNCRONO!!!!!! */

const notas = [10, 3, 44, 4.5, 10];

let somaDasNotas = 0

notas.forEach((nota) =>{
    somaDasNotas += nota;
   })
   console.log(somaDasNotas);

nome.forEach((item, index, array) => {// ESSA É A ORDEM E OS PARAMETROS DE UM FOREACH 
   console.log(index, item, array);
})

// ------------------ OU NA FORMA ARROW-FUNCTION ------------------ //

// notas.forEach((nota) => somaDasNotas += nota);

// const media = somaDasNotas / notas.length;

// console.log(`A média das notas é ${media.toFixed(0)}`);

// -----------------------------------------------------------------//
/* O método forEach() recebe uma função como parâmetro, e esta função por sua vez utiliza como parâmetro cada um dos elementos do array. A lógica interna do forEach() vai manejar a iteração do primeiro ao último item do array e fazer com que o código definido dentro da função callback (no caso, apenas um incremento 'soma += numero') seja executado a cada iteração. 
// EXEMPLO:                                                                            */
// const lista = [1, 2, 3, 4, 5];

// let soma = 0;

// lista.forEach(numero => soma += numero);

// console.log(soma) //15 

/* OU em function:

const listaa = [1, 2, 3, 4, 5];                 

let somaa = 0;

 lista.forEach(function(numero){
    somaa += numero;  
 })

console.log(somaa) */

