let pessoa = {// objeto
    nome: "jonatas",// Propriedade string dentro de objeto.
    idade: 35,// Propriedade número dentro de objeto.
    feliz: true,// Propriedade boolean dentro de objeto.
    pets: ["cachorro", "gato"],// Propriedade array dentro de objeto
    carro: {// Propriedade objeto dentro de objeto
        Gol: {
            cor: "Branco",
            placa: "be4451n"
        },
        andou: function(km){// Método(função) dentro do objeto.
           pessoa.nome + "andou" + km + "km"
        }
    }
}

// PARA REATRIBUIR UM VALOR DA PROPRIEDADE, DECLARE NOME DO OBJETO PONTO E A PROPRIEDADE(pessoa.propriedade) QUE TERÁ QUE MUDAR E ATRIBUA UM OUTRO VALOR EXEMPLO:

pessoa.nome = "Thiago";
pessoa.pets[0] = "Coelho";


console.log(pessoa.carro.Gol.cor);