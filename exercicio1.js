const argumento = process.argv.slice(2)

let senhas = ["FSLAB2023", "FSLAB2024", "FSLAB2025", "FSLAB2026","FSLAB2027", "FSLAB2028", "FSLAB2029", "FSLAB2030", "FSLAB2031", "FSLAB2032"];
let senhaInformada = argumento[0];
let senhaExiste = false;

 for(let index = 0; index < senhas.length; index++){
    if(senhaInformada == senhas[index]){
        senhaExiste = true;
        break;
    }
}
if (senhaExiste == true) {
    console.log(`SENHA CORRETA!,SEJA BEM-VINDO`);
} 
else {
    console.log(`A senha está incorreta tente novamente:`);
}

console.log(senhaInformada);

