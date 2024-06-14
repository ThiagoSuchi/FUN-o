// 06 - Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
soma = 0;

for ( index in numeros) {
    soma += numeros[index];
    media = soma / numeros.length;
}

console.log(media);