// 02 - Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

const secondArry = ['THIAGO', 'LUCIA', 'MARIA'];

function primaryArry(arry) {
    for(index in arry){
      console.log(`${index} => ${arry[index]}`);
    }
}

primaryArry(secondArry);