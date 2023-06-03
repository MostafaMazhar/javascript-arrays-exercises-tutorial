function matrixBuilder(num){
   let matrix =[];
   for(let i = 0; i < num; i++){
    let row = [];
    for(let j = 0; j < num; j++){
        let randomNumber = Math.floor(Math.random()*2)
        row.push(randomNumber);
    }
      matrix.push(row)
   }
   return matrix;
}


// do not change anything from this line down
console.log(matrixBuilder(5))