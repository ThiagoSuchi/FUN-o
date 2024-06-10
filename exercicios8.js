// 5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.


function multiplosDe3(arrryDeNums){
    arrryDeNums.filter((element) => element > 5 ).forEach((elemento) => {
       if(elemento % 3 === 0){
           console.log(elemento);
       } 
    });
}

multiplosDe3([7, 9, 3, 6, 10, 12, 33, 29, 9]);


// OUU TAMBEM NESTA FORMA //

const numeraOS = [7, 9, 3, 6, 10, 12, 33, 29, 9];

function multiplosDeTres(arrryDeNums){
    return arrryDeNums.filter(element => element > 5 && element % 3 === 0);
    
}
const result = multiplosDeTres(numeraOS)
 
console.log(result);