const listaEstudantes = 
['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 
 'Guilherme','Aline', 'Fabiana', 'André', 'Carlos', 
 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 
 'Renata', 'Daisy', 'Camilo', 'Paulo'];

 listaEstudantes.splice(1,2, 'Professor Thiago');
// O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
    
const salaA = listaEstudantes.slice(0, listaEstudantes.length/2);
const salaB = listaEstudantes.slice(listaEstudantes.length/2);
// O método slice() retorna uma cópia de parte de um array a partir de um subarray(linha) criado entre as posições início e fim (fim não é incluído) de um array original. O Array original não é modificado.

const uniaoDasSalas = salaA.concat(salaB);
// O método concat() é utilizado para mesclar(unir/concatenar) dois ou mais arrays. Esse método não altera os arrays existentes, mas, em vez disso, retorna um novo array.

console.log(uniaoDasSalas);
console.log(salaA);
console.log(salaB); 