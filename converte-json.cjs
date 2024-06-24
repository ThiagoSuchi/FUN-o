const estudante = require('./estudante.json');

const stringEstudante = JSON.stringify(estudante);// O método JSON.stringify é usado em JavaScript para converter um objeto JavaScript em uma string JSON. Isso é útil quando você precisa enviar dados de um objeto para um servidor ou armazenar dados no formato JSON.

const objEstudante = JSON.parse(stringEstudante);// O método JSON.parse é usado em JavaScript para converter uma string JSON de volta em um objeto JavaScript. Isso é útil quando você recebe dados em formato JSON, como de uma API ou de um arquivo, e precisa trabalhar com eles como objetos no seu código.

console.log(objEstudante);
console.log(typeof objEstudante);
console.log(objEstudante.nome);
