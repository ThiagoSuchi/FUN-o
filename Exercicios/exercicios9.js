// 6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.

const numeros = [37, 22, 20 ,23, 40, 10]

function somaDosNumeros(somados){

    const total = somados.reduce((acc, element) => acc + element, 0)
    return total

}

console.log(somaDosNumeros(numeros));