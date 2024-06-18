/* 
09 -  Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes propriedades: 

marca (string): marca do carro.
modelo (string): modelo do carro.
ano (number): ano de fabricação do carro.
cor (string): cor do carro. 

Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.

Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.

Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o nome da propriedade e o seu valor.
*/


const carro = {
    marca: 'Volkswagen',
    modelo: 'Gol',
    ano: 2009,
    cor: 'preto'
}

for(let info in carro) {
    info = Object.entries(carro)
    console.log('INFORMAÇÕES ORIGINAIS:');
    console.log(info);
    break
}

carro.condicao = 'usado - muito bem conservado';
carro.valor = 'R$ 21,000,00';

for(let infoAtualizada in carro) {
   infoAtualizada = Object.entries(carro)
   console.log('INFORMAÇÕES ATUALIZADAS:');
   console.log(infoAtualizada);
   break
}
