/*
 Escopo Global: Acessível de qualquer lugar no código.*/ 
var globalVar = 'Eu sou global';

function globalFunction() {
    console.log(globalVar);
}

globalFunction(); // Saída: Eu sou global

/* 
Escopo de Função: Acessível apenas dentro da função onde é declarada. */ 
function minhaFuncao() {
    var localVar = 'Eu sou local';
    console.log(localVar);
}

minhaFuncao(); // Saída: Eu sou local
console.log(localVar); // Erro: localVar não está definida

/* 
Escopo de Bloco: Acessível apenas dentro do bloco {} onde é declarada. */ 
{
    let blockVar = 'Eu sou um bloco';
    console.log(blockVar); // Saída: Eu sou um bloco
}

console.log(blockVar); // Erro: blockVar não está definida

/* 
Escopo Léxico(escopo estatico): Funções aninhadas podem acessar variáveis de seus escopos externos. */ 
function externa() {
    var variavelExterna = 'Eu sou externa';

    function interna() {
        console.log(variavelExterna);
    }

    interna(); // Saída: Eu sou externa
}

externa();

/* 
Compreender o escopo é crucial para evitar erros relacionados a variáveis não definidas ou colisões de variáveis, além de ajudar a escrever código mais organizado e fácil de manter. */ 