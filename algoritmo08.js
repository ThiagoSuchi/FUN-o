const readlineSync = require('readline-sync')
// CONST - Declara uma variavel na qual seus valores não poderão ser alteradas.
// LET - Declara uma variavel na qual seus valores poderão sofrer alteração.

let alunoa = 'Marcos';
let inserirNome = readlineSync.question('Insira seu nome: ');
let notaPrimeiroBi = 10;
let notaSegundoBi = Number.parseFloat("10.5"); // Number.parseFloat - converte string em número quebrado (número com vírgula)//
let notaTerceiroBi = 15;
let notaQuartoBi = Number.parseInt("20"); // Number.parseInt - converte string em número inteiro//


let total = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;
if(inserirNome == alunoa){
    if(total > 7){
        console.log(`Parabéns ${inserirNome}, você foi aprovado!`)
    }else{
        console.log(`Lamentamos ${inserirNome}, mas você foi reprovado!`)
    }
        console.log(`Sua nota foi: ${total.toFixed(1)}`); // 'variavel'.toFixed(0) - permite formatar um número com uma quantidade específica de casas decimais. Essa função é muito útil quando se deseja controlar a precisão e o formato da exibição de números em JavaScript.

}
else{
    console.log(`Usuário ${inserirNome} não encontrado, tente novamente: `);
}
