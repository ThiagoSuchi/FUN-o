
let x = 1;
let y = 3;
let z = 2;

let distanciaGatoA = Math.abs(x - z);
let distanciaGatoB = Math.abs(y - z);
// Math.abs - Retorna o valor absoluto de um número especificado (não importa se vai estar negativo, sempre retornará um valor positivo).//

if(distanciaGatoA < distanciaGatoB){
    console.log('Cat A');
}
else if(distanciaGatoB < distanciaGatoA){
    console.log('Cat B');
}
else if(distanciaGatoA == distanciaGatoB){
    console.log('Mouse c');
   
}


/* ESTA È A FORMA EM FUNÇÃO*/

//     }function catAndMouse(x, y, z) {

//     let distanciaGatoA = Math.abs(x - z);
//     let distanciaGatoB = Math.abs(y - z);
    
    
    
//     if(distanciaGatoA < distanciaGatoB){
//         return 'Cat A';
//     }
//     else if(distanciaGatoB < distanciaGatoA){
//         return 'Cat B';
//     }
//     else if(distanciaGatoA == distanciaGatoB){
//         return 'Mouse C';
    
        
//     }
//     }
//     console.log(catAndMouse(1, 2, 3));
//     console.log(catAndMouse(1, 3, 2));

