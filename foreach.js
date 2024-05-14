const notas = [10, 3, 44, 4.5, 10];

let somaDasNotas = 0

notas.forEach(function(nota){//ForEach é uma ação que permite executar uma função para cada elemento, sejam eles arrays simples ou de objetos. 
    somaDasNotas += nota;
});

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);
