// 03 - Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

const numeros = [10, 3, 5, 20, 30];
let soma = 0;

function arrayNumber(arrys) {
    for(index of arrys){
        soma += (index);
        
    }
    return soma
}
console.log(arrayNumber(numeros));
