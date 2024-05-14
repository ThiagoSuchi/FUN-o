const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara'];
const medias = [10, 6, 8.5, 8, 7.5];

const lista = [alunos, medias];

function exibaNomeENota(aluno) {
    if(lista[0].includes(aluno)){ 
        // .includes - Determina se um array inclui um determinado valor entre suas entradas, retornando true ou false conforme apropriado.
        const indice = lista[0].indexOf(aluno);
        // .indexOF - Ira procurar o índice que tenha o valor fornecido, ou seja, ele ira dizer em qual posição o valor que foi inserido está!
        const mediaAluno = lista[1][indice];
        console.log(`${aluno} tem a média ${mediaAluno}`);
    }else{
        console.log(`O estudante ${aluno} não está cadastrado no sitema`);
    }
}
exibaNomeENota('João');
exibaNomeENota('Jo soares');