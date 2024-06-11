const estudante = {
    nome:'José Silva',
    idade: 32,
    cpf:'03403344931',
    turma: 'JavaScript',
    bolsista: true,
    telefone: ['43434-3322', '45567-3422'],
    endereco: [{
        rua: 'Rua Armando Valadares',
        numero: '45',
        complemento: 'apto 43'
    },
    {
        rua: 'Rua Almirante Cunha',
        numero: '60',
        complemento: null
    }]
}

for(let chave in estudante){

    // typeof: É um operador em JavaScript que retorna uma string indicando o tipo do operando. 
    // OBS: não existe typeof array

    const tipo = typeof estudante[chave];//  typeof estudante[objeto], está acessando a propriedade específica do objeto estudante cujo nome é armazenado na variável chave. 

    if(tipo !== 'object' && tipo !== 'function'){// Se o tipo for diferente de objeto e diferente de função irá dar um console.log nos valores dentro da variavel chave do objeto estudante.

        const texto = `O ${chave} tem o valor ${estudante[chave]}` // Vai pegar os valores que estao dentro das variaveis que estao no objeto estudante.

        console.log(texto); /* saída: O nome tem o valor José Silva
                                      O idade tem o valor 32
                                      O cpf tem o valor 03403344931
                                      O turma tem o valor JavaScript
                                      O bolsista tem o valor true */

    }

   
}


