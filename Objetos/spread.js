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

function exibirTelefones(num1, num2){
    console.log(`Ligar para ${num1}`);
    console.log(`Ligar para ${num2}`);
}

exibirTelefones(estudante.telefone[0], estudante.telefone[1]);// ESTÁ CHAMANDO OS VALORES DA CHAVE TELEFONE, DO OBJETO ESTUDANTE, PARA DENTRO DA FUNÇÃO (EXIBIRTELEFONES).
// UMA FORMA MAIS PRÁTICA DE SE EXECUTAR ISSO É COM SPREAD, LOGO ABAIXO:
exibirTelefones(...estudante.telefone)// O SPREAD FAZ A MESMA COISA, ELE COPIA OS VALORES DA CHAVE E ESPALHA, DENTRO DA FUNÇÃO.

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.endereco[0]
}

console.log(dadosEnvio);

