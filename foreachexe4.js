/*
05

Na const nameAsArray, insira manualmente seu primeiro nome na string vazia 
antes da invocação do método split. 

Se, por exemplo, o nome é João, deve ficar assim: 'João'.split('').

Abaixo da const nameAsArray, declare uma const messages e atribua a ela um 
array vazio.

Abaixo da const messages, adicione no array, quantas vezes forem necessárias, 
a seguinte string:

'- "X" é a Xª letra do meu nome.'

👆🏻 os "X" da string acima são apenas representações da letra e da posição dela 
em seu nome.

Por exemplo, se o nome é "Roger", as strings que o array messages deve conter 
são:

[
  '- "R" é a 1ª letra do meu nome.',
  '- "o" é a 2ª letra do meu nome.',
  ... e assim por diante, até a última letra do nome.
]

Após terminar de adicionar todas as strings no array messages, na linha 
seguinte, apenas para caráter de visualização, exiba no console cada string 
do array.
*/

const nameAsArray = 'Thiago'.split('');
const messages = [];

nameAsArray.forEach((message, index) => messages.push(`- "${message}" é a ${index + 1} letra do meu nome.`))
console.log(messages );
