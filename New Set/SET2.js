const nomes = ['Lucao', 'larissa', 'joana', 'Lucao', 'joana', 'joana'];

const nomesAtualizados = new Set(nomes);// OBS: o Set não torna o resultado que será imprimido, em array, para tornar o Set um array use o espalhador exe:
const listaNomesAtualizados = [...new Set(nomes)];

console.log(listaNomesAtualizados);
console.log(nomesAtualizados);

