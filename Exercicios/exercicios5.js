/* 2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce. */

const valores = [2, 3, 4, 6, 88, 10];

const somaDosValores = valores.reduce((acc, index) => acc + index, 0);

console.log(somaDosValores);