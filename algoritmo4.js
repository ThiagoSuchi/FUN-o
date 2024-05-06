let leftDiagonal = 0;
let rigthDiagonal = 0;

arr =[
    [11,2,4,],
     [4,5,6,], 
     [10,8,-12]
    ]

 for( let index = 0; index < arr.length; index++){
   leftDiagonal += arr[index][index];
   rigthDiagonal += arr[index][arr.length - 1 - index];
  }
let soma = leftDiagonal + rigthDiagonal;
  
console.log(leftDiagonal);
console.log(rigthDiagonal);
console.log(`O total será = ${soma}`);


