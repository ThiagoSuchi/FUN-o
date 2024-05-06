     const nomeEnotaDoAluno = (media, faltas) => { // ARROW FUNCTION - As arrow functions são uma sintaxe mais concisa e moderna para escrever funções em JavaScript (Mas não substitui outras formas).
       
        if(media >= 7 && faltas < 4){
         return true;
        }
        else{
         return false;
        }

     }
     console.log(nomeEnotaDoAluno(8,3));
     console.log(nomeEnotaDoAluno(3,7));

     

    //  console.log(nomeEnotaDoAluno(8,3));
    //  console.log(nomeEnotaDoAluno(3,7));
    //  function  nomeEnotaDoAluno (media, faltas) {
       
    //     if(media >= 7 && faltas < 4){
    //      return true;
    //     }
    //     else{
    //      return false;
    //     }

    //  }
