let num1 = 76;
let num2 = 34;

if(num1 > num2){
    soma = num1 + num2;
    console.log(soma);

}
else if(num1 == num2){
    soma = (num1 + num2) / 2;
    console.log(soma);
}
else{
    console.log(`este número${num1} é menor que ${num2}`);
}

// template string - É utilizado para fazer a interpolação entre valores e strings (Facilitando assim a leitura do programa, substitui a concatenação). A crase é utilizada para definir que aquilo é um template string, e o cifrão($) seguido de chaves ({}) para definir que o que está dentro é um valor, e não uma string.
// EXEMPLO: console.log(`blablablablabla ${variavel}, blablabla`).