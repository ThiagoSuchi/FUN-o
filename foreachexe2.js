/*
02

Converta o for loop abaixo em um forEach.

O seu forEach deve ter a mesma funcionalidade do for. Isto é, ele deve 
preencher o array lettersInUppercase com a versão maiúscula das letras. 

Deve ficar assim: ['V', 'E', 'P']

Após converter, verifique se lettersInUppercase realmente está armazenando 
o valor que você deseja.
*/

const letters = ['v', 'e', 'p']
const lettersInUppercase = []

for (let i = 0; i < letters.length; i++) {
  lettersInUppercase.push(letters[i].toUpperCase())
}

//  PASSANDO PARA O FOREACH

const letterS = ['v', 'e', 'p']
const lettersInUppercasee = []
letterS.forEach((i) => lettersInUppercasee.push(i.toUpperCase()))

console.log(lettersInUppercasee);
