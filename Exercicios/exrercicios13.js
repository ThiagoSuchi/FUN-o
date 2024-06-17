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