const estudantes = require('./estudantes.json');


function filtraPorProprieadade(lista, propriedade) {

    return lista.filter((estudante) => {

        return !estudante.endereco.hasOwnProperty(propriedade);// O método hasOwnProperty() retorna um booleano indicando se o objeto possui a propriedade especificada como uma propriedade definida no próprio objeto em questão (ao contrário de uma propriedade herdada).

    })

}

const listaEnderecosImcompletos = filtraPorProprieadade(estudantes, 'cep');
console.log(listaEnderecosImcompletos);
