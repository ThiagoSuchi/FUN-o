// =========================== ALUNO REPROVADO ==================================================== //

const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const reprovado = alunos.filter((_, indice) => { // o "_" é para mostrar que não está sendo ultilizado o primeiro parâmetro, e para não perder o parâmetro por ordem coloca-se o "_".
    return medias[indice] < 7;

})

console.log(reprovado);

// ==================== FILTRO DE NÚMEROS REPETIDOS =============================================== //

const numbers = [1, 2, 3, 55, 66, 2, 55, 66, 3, 40];

const numbersFilter = numbers.filter((elem, index, arr) => arr.indexOf(elem) === index)

console.log(numbersFilter);

// ======================== VALORES ACIMA DE 37 =================================================== //

const randomNumbers = [30, 33, 59, 100, 202, 37];

const numbersGeratorThan100 = randomNumbers.filter((number) => number >= 37)

console.log(numbersGeratorThan100);

// =============================== IMPAR / PAR ==================================================== //

const meus_numeros = [1, 2, 3, 4, 5, 6, 7, 8]

const par = i => i % 2 == 0
const impar = i => i % 2 == 1

console.log(` Os seguintes números são pares -->  ${meus_numeros.filter(par).join(' - ')}`)
console.log(` Os seguintes números são ímpares -->  ${meus_numeros.filter(impar).join(' - ')}`)

// ===============================  ==================================================== //
