let myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

function findMax(array){
    let maxNumber = array[0];
    for(let i = 0; i < myArray.length; i++){
         if(array[i] > maxNumber){
              maxNumber = array[i];
         }
    }
    return maxNumber;
}
console.log(findMax(myArray));


// function findMax(array) {
//     // Initialize the auxiliary variable 
//     let maxNumber = array[0];
//     // Loop through the array
//     for (let i = 1; i < array.length; i++) {
//         // Compare the current number with the maximum number
//         if (array[i] > maxNumber) {
//             // Update the maximum number
//             maxNumber = array[i];
//         }
//     }
//     // Return the maximum number
//     return maxNumber;
// }



