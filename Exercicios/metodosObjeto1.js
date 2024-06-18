/* 
11 - Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.
Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada. Utilize as seguintes categorias:

Desempenho excelente: média >= 9
Bom desempenho: 7.5 <= média entre 7.6 e 8.9
Desempenho regular: 6 <= média entre 6 e 7.5
Desempenho insuficiente: média < 6

Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.

Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa.
*/

const pessoas = {

    nome: 'João Neto',
    notas: [10, 9, 6, 8, 8, 10],

    calcularMediaNotas: function() {
        const somaNotas = this.notas.reduce((soma, nota) => soma + nota, 0)
        const media = somaNotas / this.notas.length
        return media
    },

    classificarDesempenho: function() {
        const media = this.calcularMediaNotas()
        if(media >= 9){
           return `Desempenho excelente`
        }
        else if(media >= 7.5 && media <= 8.9){
            return `Bom desempenho`
        }
        else if(media >= 6 && media <= 7.5){
            return `Desempenho regular`
        }
        else{
            return `Desempenho insuficiente`
        }
    }
}
console.log(pessoas.calcularMediaNotas());
console.log(pessoas.classificarDesempenho());