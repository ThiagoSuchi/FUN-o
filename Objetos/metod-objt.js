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

const chavesObjeto = Object.keys(estudante);//O Object.keys()método estático retorna uma matriz de nomes de propriedades enumeráveis ​​com chave de string do próprio objeto.
/* 
- Propriedades enumeráveis são aquelas que aparecem quando listamos as propriedades de um objeto usando for...in ou Object.keys.
Propriedades não enumeráveis são aquelas que não aparecem na lista, mas ainda estão presentes no objeto e podem ser acessadas diretamente. 
*/
console.log(chavesObjeto);

if(!chavesObjeto.includes('endereco')){
    console.error('Não possui um endereço cadastrado, por favor cadastre um');
}// A função verifica se um objeto tem uma informação específica chamada 'endereco'. Se não tiver, ela mostra uma mensagem de erro.