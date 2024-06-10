// Um Set é como uma lista de coisas onde cada coisa aparece só uma vez. Imagine que você tem uma lista de nomes e quer ter certeza de que nenhum nome se repita. Um Set é perfeito para isso.

const letraS = [`A`, `B`, `C`, `D`, `E`, `F`, `D`, `D`, `A`, `E`, `G`];

const letrasFiltradas = new Set(letraS);// O Set objeto permite armazenar valores únicos de qualquer tipo, sejam valores primitivos ou referências de objetos.

console.log(letrasFiltradas);

const letras = [`A`, `B`, `C`, `D`, `E`, `F`, `D`, `D`, `A`, `E`, `G`];
                          // spread operator //
const listaDeLetrasAtualizada = [...new Set(letras)];// O new permite que os desenvolvedores criem uma instância de um tipo de objeto definido pelo usuário ou de um dos tipos de objeto integrados que possui uma função construtora.

console.log(listaDeLetrasAtualizada);

/* Como usar um Set? Aqui estão algumas coisas que você pode fazer com um Set: */

// Criando um novo Set
// let frutas = new Set();

// // Adicionando frutas
// frutas.add('Maçã');
// frutas.add('Banana');
// frutas.add('Maçã'); // Não vai adicionar de novo, pois ja existe um 'maçã'

// // Verificando se certas frutas estão no Set
// console.log(frutas.has('Maçã')); // true
// console.log(frutas.has('Laranja')); // false

// // Mostrando quantas frutas estão no Set
// console.log(frutas.size); // 2 (Maçã e Banana)

// // Removendo uma fruta
// frutas.delete('Banana');
// console.log(frutas.size); // 1 (só Maçã agora)

// // Limpando o Set
// frutas.clear();
// console.log(frutas.size); // 0 (está vazio agora)






