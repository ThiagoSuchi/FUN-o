// 04 - Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.

const nums = [100, 20, 3, 40, 50];

function numberOne(ar) {
   
   let maiorN = ar[0];
   let menorN = ar[0];

   for (index in ar) {
      if (ar[index] > maiorN) {
         maiorN = ar[index];
      }
      if(ar[index] < menorN) {
         menorN = ar[index];
      }
   }

   return `O maior número é ${maiorN} e o menor número é ${menorN}`;
}

console.log(numberOne(nums));
