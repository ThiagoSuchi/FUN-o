const notas = [10, 2, 3, 40];

const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1 );
// O map()método de Arrayinstâncias cria um novo array preenchido com os resultados da chamada de uma função fornecida em cada elemento do array de chamada.

console.log(notasAtualizadas);
//--------------------------------------------------------------------------------------
const notass = [10, 20, 30, 40];

const notasAtualizadass = notass.map(function (nota) {
    return nota + 10;
})
console.log(notasAtualizadass);

//-OU TAMBEM FUNCIONA NESSE FORMATO >> (ARROW-FUNCTION)----------------------------------

const notasss = [10, 20, 30, 40];

const notasAtualizadasss = notasss.map((nota) => nota + 10)
console.log(notasAtualizadasss);