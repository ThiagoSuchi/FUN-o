// 4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

function numeros(arrayNum) {
    const par = i => i % 2 == 0;
    const numsPares = arrayNum.filter(par);
    return numsPares;

}
console.log(numeros([1, 2, 3, 4, 5, 6, 7, 8]));

//  OUUUU //

function numerosPares(arrd){
    return arrd.filter(i => i % 2 == 0);
}

const nums = [3, 4, 8, 6, 7, 5, 2, 1, 1, 2, 9, 10];
const numeroPar = numerosPares(nums);
console.log(numeroPar);