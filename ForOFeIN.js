const frutas = ['Maça', 'Uva', 'Morango', 'Pessego', 'Amora', 'Melão', 'Melancia'];

for(indice in frutas) {
    console.log(`${[indice]} - ${frutas[indice]}`);
}


const frutass = ['Maça', 'Uva', 'Morango', 'Pessego', 'Amora', 'Melão', 'Melancia'];

for(indice of frutass) {
    console.log(indice);
}
// const lista = [1, 2, 3, 4, 5];
// let soma = 0;
 
// for (let elemento of lista) {
//  soma += elemento;
// }
 
// console.log(soma) //15



// O 'of' substitui o laço de repetição tambem, mas a variavel que vem antes do of não será um indice, igual no caso do 'in', mas será uma variavel que foi atribuida um valor pelo array que esta depois de of.

// O 'in' substitui o laço de repetição abaixo! Porém a variavel que vem antes do in se torna o indice.

// for(let index = 0; index < frutas.length; index++){
//     console.log(`${index} - ${frutas[index]}`);
// }
