/* O que são new, add, has, delete, size, e clear no contexto de um Set em JavaScript, de uma maneira bem simples. */

// Criando um novo Set
let frutass = new Set();

// Adicionando frutas
frutass.add('Maçã');
frutass.add('Banana');
frutass.add('Maçã'); // Não vai adicionar de novo

// Verificando se certas frutas estão no Set
console.log(frutass.has('Maçã')); // true
console.log(frutass.has('Laranja')); // false

// Mostrando quantas frutas estão no Set
console.log(frutass.size); // 2 (Maçã e Banana)

// Removendo uma fruta
frutass.delete('Banana');
console.log(frutass.size); // 1 (só Maçã agora)

// Limpando o Set
frutass.clear();
console.log(frutass.size); // 0 (está vazio agora)