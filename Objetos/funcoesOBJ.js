const estudante = {
    nome:'José Silva',
    idade: 32,
    cpf:'03403344931',
    turma: 'JavaScript',
    bolsista: true,
    telefone: ['43434-3322', '45567-3422'],
    media: 7.5,
    estaAprovado: function(mediaBase){
        return this.media >= mediaBase ? true : false// Aqui está retornando que se a media do estudante(this.media) for maior ou igual a mediaBase(valor dado em console.log) recebera TRUE caso ao contrario FALSE.

         // this - Significa (isso aqui),  Ela geralmente é usada para se referir ao objeto atual, o objeto ao qual a função está ligada no momento em que é chamada.

         // Operador ternário - é uma maneira concisa de escrever uma expressão condicional. A sintaxe básica do operador ternário: condicao ? valorSeVerdadeiro : valorSeFalso
    }
}

console.log(estudante.estaAprovado(7));