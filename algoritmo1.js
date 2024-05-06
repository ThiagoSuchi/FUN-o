function simpleArraySum(ar) {
   let soma = 0;
    for(let index = 0; index < ar.length; index ++ ){
      soma = soma + ar[index];
     
    }

    return [soma];

}
 
console.log(simpleArraySum([1, 2, 3]));

//Está função irá calcular os valores informados do array
//"for" é um laço de repetição, é possivel declarar uma variavel dentro do parenteses desse laço de repetição!
//"variavel.length" determina o tamanho do arrayio.
