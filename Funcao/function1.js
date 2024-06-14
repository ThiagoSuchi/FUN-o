function compareTriplets(a, b) {

    let Alice = 0;
    let Bob = 0;

for(let index = 0; index < a.length; index++){
  if(a[index] > b[index]){
    Alice += 1;
  }
  else if(a[index] < b[index]){
    Bob += 1;
  }
 }
 return[Alice, Bob];
}
console.log(compareTriplets([17, 28, 30], [99, 16, 8]));


//ESTÁ É FORMA SEM ESTAR EM FUNÇÃO!//

/*let a = [17, 28, 30];
let b = [17, 16, 8];

    let Alice = 0;
    let Bob = 0;

for(let index = 0; index < a.length; index++){
  if(a[index] > b[index]){
    Alice += 1;
  }
  else if(a[index] < b[index]){
    Bob += 1;
  }
}
console.log(`Alice receberá [${Alice}], Bob receberá [${Bob}]`);*/