// É importante lembrar que cada método pode aceitar receber parâmetros diferentes! Alguns são obrigatórios, outros opcionais. Consulte sempre a documentação da linguagem.

const cursoJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const cursoJava = [6, 5, 8, 9, 5, 6];
const cursoPython = [7, 3.5, 8, 9.5];

function calculaMedia(listaDeNotas){
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) =>  acumulador + nota, 0) /*Caso você tenha mais de uma linha de instrução dentro de uma arrow function, as chaves {} e a palavra-chave return voltam a ser necessários.*/
    const media = somaDasNotas /listaDeNotas.length;
    return media;
}

console.log(calculaMedia(cursoJS));
console.log(calculaMedia(cursoJava));
console.log(calculaMedia(cursoPython));

/* OUUU */

// function calculaMedia(listaDeNotas){
// const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => {
//     return acumulador + nota;
// }, 0)
// const media = somaDasNotas /listaDeNotas.length;
//     return media;
// }

// console.log(calculaMedia(cursoJS));
// console.log(calculaMedia(cursoJava));
// console.log(calculaMedia(cursoPython));

