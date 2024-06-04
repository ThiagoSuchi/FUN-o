const dadosVendas = [
    
    {mes: "Janeiro", vendas: 25000, vendedor: "VendedorA"},
    {mes: "Fevereiro", vendas: 32000, vendedor: "VendedorB"},
    {mes: "Março", vendas: 28000, vendedor: "VendedorC"},
    {mes: "Abril", vendas: 35000, vendedor: "VendedorA"},
    {mes: "Maio", vendas: 29000, vendedor: "VendedorB"},
    {mes: "Junho", vendas: 40000, vendedor: "VendedorC"},
    {mes: "Julho", vendas: 35000, vendedor: "VendedorA"},
    {mes: "Agosto", vendas: 31000, vendedor: "VendedorB"},

];
// ESTE FORMATO IMPRIMIRÁ EM COLUNAS:
const vendasS = dadosVendas.reduce((acc, item) =>{
    acc.push(item.vendas);// O ACUMULADOR ESTÁ PUXANDO TODOS OS ARRAYS DE VENDAS ATRAVÉS DO (ITEM.VENDAS), 
    return acc;// E RETORNANDO ESSE VALOR DE ACC, QUE AGORA PASSOU A RECEBER TODOS OS VALORES DE VENDAS.
}, [])// AQUI ETSÁ INICIANDO COM UM ARRAY VAZIO => [].

console.log(vendasS);

// =========================================================================================================================== //

// ESTE FORMATO IMPRIMIRÁ EM LINHA:
const vendass = dadosVendas.reduce((acc, item, index) =>{
      
    return acc + (index > 0 ? ', ' : '') + item.vendas; 
    /*  index > 0: Esta é a condição que está sendo verificada. index é o índice do item atual no array, começando de 0.
    ? ', ': Se index for maior que 0, o operador ternário retorna a string ', '.
    : '': Se index não for maior que 0 (ou seja, index é 0), o operador ternário retorna a string vazia ''.  */

}, '')

console.log(`--> ${vendass}`);

// =========================================================================================================================== //

// ESTÁ É A FORMA MAIS SIMPLES DE SE IMPRIMIR OS VALORES DE VENDAS:
const vendasSs = dadosVendas.reduce((_, item) =>{
    console.log(`-`+` `+ item.vendas);
}, 0)

// NAS TRÊS FORMAS ACIMA SERÁ IMPRIMIDO TODOS OS VALORES DE VENDAS, MAS DE FORMAS DIFERENTES A SEREM EXECUTADAS!!!!

// =========================================================================================================================== //

// AGORA VAMOS USAR O ACUMULADOR PARA SOMAR:
const totalVendas = dadosVendas.reduce((acc,item) => {
    acc += item.vendas 
    return acc
}, 0)
console.log(`Valor total em vendas: ${totalVendas}`);

// =========================================================================================================================== //
// SOME O TOTAL DE VENDA DE CADA VENDEDOR E QUAL VENDEDOR FOI:

const totalDeCadaVendedor = dadosVendas.reduce((acc, item) => {
    if(item.vendedor === 'VendedorA'){
        acc += item.vendas
    } 
    return acc
}, 0)

console.log(totalDeCadaVendedor);


