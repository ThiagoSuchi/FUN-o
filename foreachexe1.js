/*
01 

Apenas olhando o código abaixo (sem escrever código), você sabe qual valor 
cada let está armazenando após a execução do forEach?

Apenas pense em qual valor cada let armazenou. Você pode escrever um comentário 
temporário para ajudar a entender o fluxo. 

Só após concluir o raciocínio sobre os valores das lets, confira se os valores 
que você supôs estão corretos. Você pode usar console.log para visualizar os 
valores (após concluir seu raciocínio). 

O principal objetivo deste exercício é checar se você entendeu o fluxo de 
execuções da função do forEach.
*/
const fruits = ['maçã', 'banana', 'laranja']

let firstLet = 0 // 2 - 4 - 6
let secondLet = 3// 0 - 0 - 0
let thirdLet = ''// Laranja

fruits.forEach((fruit, index, array) => {
//          2
  const lastIndex = array.length - 1
//                  2   =   true || false
  if (index === lastIndex) {
    thirdLet = fruit// --> Laranja
  }
  
  firstLet = firstLet + lastIndex
  secondLet = secondLet * index
  
  console.log(thirdLet);
  console.log(secondLet);
  console.log(firstLet);
})


