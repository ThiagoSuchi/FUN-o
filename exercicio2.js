let elementos = [11,22,33,44,55,
                 66,77,88,99,111];
let soma = 0;
let maior = Math.max(...elementos);
let menor = Math.min(...elementos);

for(let index = 0; index < elementos.length; index++){
    soma += elementos[index];   
}

let media = soma / elementos.length;

console.log(`O maior número da lista é: ${maior}
O menor número da lista é: ${menor}
A média dos valores são: ${media}`);

