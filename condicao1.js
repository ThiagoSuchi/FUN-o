const notaPrimeiroBi = 2;
const notaSegundoBi = 29;
const notaTerceiroBi = 73;
const notaQuartoBi = 3;
const faltas = 2;

let media = ((notaPrimeiroBi +  notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4);

 if(media >= 7 && faltas < 4){ 
// O operador lógico AND - ( && ) - (conjunção lógica) para um conjunto de operandos booleanos será true se e somente todos os operandos forem true. Caso contrário, será false 
  media += media * 0.1;
  console.log(`O aluno está aprovado --
    Média: ${media.toFixed(1)}
    Faltas: ${faltas}`);
    
}
else if(media < 7 && faltas > 4){
  console.log(`O aluno está reprovado, por não alcançar a média, e ultrapassar a quantidade máxima de faltas --
    Média: ${media}
    Faltas: ${faltas}`);
}
else if(media < 7) {
    console.log(`O aluno está reprovado, por não alcançar a média --
    Média: ${media}`);
}
else{
  console.log(`O aluno está reprovado, por quantidade excessiva de faltas --
    Faltas: ${faltas}`);
    
}



