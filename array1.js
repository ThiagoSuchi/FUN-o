//               [0],      [1],     [2],   [3],    [4]
const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara'];
//             [0],[1],[2],[3],[4]
const medias = [10, 6, 8.5, 8, 7.5];

//              [0]  ,  [1]
const lista = [alunos, medias];
//                 ([variavel que vira array na lista]  [array da variavel]);
console.log(
`O aluno que tirou a maior nota foi: ${lista[0][1]}
A nota dessa aluna é: ${lista[1][0]}`);
