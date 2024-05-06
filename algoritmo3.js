function aVeryBigSum(ar){
    let soma = 0;
    for(let index = 0; index < ar.length; index++){
        soma += ar[index]; 
    
    }
    return soma;
}

console.log(aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005]));

//"soma += ar[index]" é igual a expreção "soma = soma + ar[index]"//


/*ESTA É A FORMA DO EXERCICÍO SEM ESTAR EM FUNÇÃO*/

// ar = [1000000001,1000000002,1000000003,1000000004,1000000005]
// let soma = 0;
// for(let index = 0; index < ar.length; index++){
//     soma += ar[index];
    
// }
// console.log(soma);
