// 4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

function numeros(arrayNum) {
    const par = i => i % 2 == 0;
    const numsPares = arrayNum.filter(par);
    return numsPares;

}
console.log(numeros([1, 2, 3, 4, 5, 6, 7, 8]));