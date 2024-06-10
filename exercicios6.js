/* 3 - Considere duas listas de cores:

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final. */

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];


const coresJuntas = coresLista1.concat(coresLista2)
const listaDeCores = [...new Set(coresJuntas)];
console.log(listaDeCores);

// OUU // 

const coresLista11 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista22 = ['Laranja', 'Verde', 'Roxo', 'Azul'];


const coresJuntass = coresLista11.concat(coresLista22).filter((cor,index,array) => {
    return array.indexOf(cor) === index;
})

console.log(coresJuntass);

//  EM REDUCE //

const coresLista111 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista222 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

const coresJuntaS = coresLista111.concat(coresLista222).reduce((elem, indexx) => elem + ', ' + indexx)
console.log(coresJuntaS.split());



