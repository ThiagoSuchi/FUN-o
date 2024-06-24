const estudantes = require('./estudantes.json')

function buscarInfo(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor));
    // "find" geralmente se refere a uma função ou método usado para buscar por um elemento específico dentro de uma coleção de dados, como um array, lista, ou estrutura de dados similar. A função "find" geralmente retorna o primeiro elemento que corresponde a um critério específico de busca.
}

const estudanteEcontrado = buscarInfo(estudantes, 'nome', 'Jerrome')
const telefoneEcontrado = buscarInfo(estudantes, 'telefone', '24992442110')

console.log(telefoneEcontrado);
console.log(estudanteEcontrado);