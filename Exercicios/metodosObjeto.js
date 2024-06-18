/* 
10 - Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:

ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).
Em seguida, faça o seguinte:

Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
Chame o método obterDetalhes e imprima no console a string retornada.
*/


const carro = {
    marca: 'Volkswagen',
    modelo: 'Gol',
    ano: 2009,
    cor: 'preto',
    ligado: true,
    ligar: function(){
        if(this.ligado === true){
            console.log('O carro está ligado');
        }else{
            console.log('Você ligou o carro!');
        }
    },
    desligar: function(){
        if(this.ligado == true){
            console.log('Você desligou o carro!');
        }else{
            this.ligado == false
            console.log('O carro estava desligado');
        }
    },
    obterDetalhes: function(){
        console.log(
`Marca: ${this.marca}
Modelo: ${this.modelo}
Ano: ${this.ano}
Cor: ${this.cor}
Ligado: ${this.ligado}`
        ); 
    }
}

carro.ligar();
carro.desligar();
carro.obterDetalhes();
