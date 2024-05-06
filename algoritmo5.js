n = 8;

let simble = '#';
let inputLine = '';
let inputPosition = n - 1;

  for( let LineIndex = 0; LineIndex < n ; LineIndex++){  //Este for está andando por linhas//
    for( let columIndex = 0; columIndex < n ; columIndex++){  // Este for está andando por colunas//
        if(columIndex < inputPosition){
          inputLine += ' ';
        }
        else{
          inputLine += simble ;
        }
      }
      console.log(inputLine);
      inputLine = '';
      inputPosition -= 1;
      
}


