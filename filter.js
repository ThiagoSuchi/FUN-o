// --- O MÉTODO FILTER() EM JAVASCRIPT É COMO UMA PENEIRA PARA UM ARRAY. ELE PEGA UM ARRAY CHEIO DE COISAS (COMO NÚMEROS, PALAVRAS, OBJETOS) E PASSA POR CADA UM DELES, VERIFICANDO SE ELES SE ENCAIXAM EM UMA REGRA QUE VOCÊ DEFINE. SE UM ELEMENTO PASSA NA REGRA (OU SEJA, A FUNÇÃO DE CALLBACK QUE VOCÊ ESCREVEU RETORNA TRUE PARA ESSE ELEMENTO), ELE É COLOCADO EM UM NOVO ARRAY. NO FINAL, VOCÊ TEM UM NOVO ARRAY APENAS COM OS ELEMENTOS QUE PASSARAM NO TESTE DA REGRA. --- //

// É importante ressaltar que tanto o map quanto o filter e o reduce criam novas instancias do array. Os arrays originais continuam inalterados.

// // =========================== ALUNO REPROVADO ================================================== //

const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [10, 4.5, 8, 9.5];

const reprovado = alunos.filter((_, indice) => { // o "_" é para mostrar que não está sendo ultilizado o primeiro parâmetro, e para não perder o parâmetro por ordem coloca-se o "_".
    return medias[indice] < 7;
})

console.log(reprovado);

// ==================== FILTRO DE NÚMEROS REPETIDOS =============================================== //

const numbers = [1, 2, 3, 55, 66, 2, 55, 66, 3, 40];

const numbersFilter = numbers.filter((elem, index, arr) => arr.indexOf(elem) === index)

console.log(numbersFilter);

// // ======================== VALORES ACIMA DE 37 =================================================== //

const randomNumbers = [30, 33, 59, 100, 202, 37];

const numbersGeratorThan100 = randomNumbers.filter((number) => number >= 37)

console.log(numbersGeratorThan100);

// // =============================== IMPAR / PAR ==================================================== //

const meus_numeros = [1, 2, 3, 4, 5, 6, 7, 8]

const par = i => i % 2 == 0
const impar = i => i % 2 == 1

console.log(` Os seguintes números são pares -->  ${meus_numeros.filter(par).join(' - ')}`)
console.log(` Os seguintes números são ímpares -->  ${meus_numeros.filter(impar).join(' - ')}`)

// =============================== FILTRANDO OBJETOS ==================================================== //

const concurseiros = [
    { nome: 'Alisson', idade: '23', nota: 7},
    { nome: 'Luíza', idade: '23', nota: 9},
    { nome: 'Roberto', idade: '23', nota: 8.5},
    { nome: 'João', idade: '23', nota: 4},
    { nome: 'Sabrina', idade: '23', nota: 2},
    { nome: 'Beatriz', idade: '23', nota: 10},
]

console.log(concurseiros.filter((aluno) => {
   
    if(aluno.nota >= 7){
     console.log(`O aluno(a) ${aluno.nome}, com as notas ${aluno.nota} foi aprovado(a)!` );
    } 
   
}));

