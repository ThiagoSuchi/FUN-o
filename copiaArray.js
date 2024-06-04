// // NESTE MÉTODO É APLICADO O SPEED OPERATOR PRA COPIAR O ARRAY NÚMEROS:
const numeros = [2, 4, 8, 16, 32];

const novosNumeros = [...numeros, 64]// Aqui vemos uma nova variável no qual recebeu o método speed operator pra expalhar os valores do array de números, assim copiando o array e reatribuindo um novo número após a virgula.
console.log('Uma das formas:');
console.log(numeros);
console.log(novosNumeros);

// OUTRA FORMA DE COPIAR ARRAYS É ULTILIZANDO O MÉTODO SLICE:

const numeroS = [2, 4, 8, 16, 32];
const novosNumeroS = numeros.slice();

novosNumeroS.push(64);
console.log('Outra forma:');
console.log(numeroS);
console.log(novosNumeroS);


