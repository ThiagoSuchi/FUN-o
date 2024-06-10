let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
// let soma = 0;

// console.log(numeros);

// for(let numero of numeros){
//     soma += numero
// }

// console.log(soma);

// ============ NO MÉTODO ARRAY.REDUCE() FICARIA ASSIM: =========================================== //

                                     // (valor-atual) //
let total = numeros.reduce((acumulador, currentValue, index, numeros) =>{ 

    console.log(acumulador, currentValue);// O ACUMULADOR PEGA O VALOR QUE FOI ATRIBUÍDO DEPOIS DA CHAVE LOGO ABAIXO (QUE É CHAMADO DE VALOR INICIAL!!) E SOMA COM O VALOR RECEBIDO FUTURAMENTE PELO CURRENTVALUE. TUDO ISSO GRAÇAS AO BLOCO DEACLARADO POR RETURN ABAIXO, QUE ATRIBUIU ESTA FUNÇÃO AO ACUMULADOR(obs: o acumulador obrigatóriamente precisa de um bloco atribuindo uma função para ele, ou seja ele é uma Callback).
    return acumulador += currentValue;
    
}, 0);// OBS - Se não for passado um valor inicial " }, valorQualquer) ", o acumulador irá automáticamente passar o valor do primeiro elemento, ou seja o valor do primeiro índice do array.
console.log(total);

/* 
 FUNÇÃO DE CALLBACK: ESTA É A FUNÇÃO QUE SERÁ EXECUTADA EM CADA ELEMENTO DO ARRAY. ELA PODE RECEBER ATÉ QUATRO PARÂMETROS: O ACUMULADOR, O CURRENTVALUE, O INDEX E A PRÓPRIA ARRAY.  

 O MÉTOD REDUCE POSSUI PARÂMETROS =>> (acumulador, currentValue, index, numeros(array)): 
 (OBS) =>>> O método reduce() recebe apenas dois parâmetros obrigatórios: uma função de callback e um valor inicial opcional para o acumulador.

 O PARÂMETRO ACUMULADOR; Ele armazena o resultado parcial da redução a cada iteração sobre o array. Esse acumulador pode ser qualquer valor (número, string, objeto, etc.) e é atualizado a cada iteração com base no resultado da operação definida na função de redução, ou seja, o parâmetro acumulador possuí o mesmo papel da variavel soma declarada la em cima.(OBRIGATÓRIO)

 O PARÂMETRO CURRENTVALUE(VALOR-ATUAL); Em JavaScript é simplesmente o valor do elemento que está sendo examinado em um determinado momento durante uma operação de percorrer uma lista de coisas, como um array. Ele é usado para fazer algo com esse número, como multiplicá-lo, somá-lo, verificar alguma condição.(OBRIGATÓRIO)
 
 O PARÂMETRO INDEX(índice); No método reduce() em JavaScript representa o índice do elemento atual sendo processado durante a iteração sobre o array.
 Este parâmetro é opcional e pode ser utilizado dentro da função de redução para acessar o índice do elemento atual.(OPCIONAL)

 Array (array): A própria array sobre a qual reduce() foi chamado, no caso acima (numeros).(OPCIONAL)

 */