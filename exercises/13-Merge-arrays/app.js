let chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
      newArray = [...newArray, ...firstArray, ...secondArray];
    
    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));




// JavaScript code:
// const mergeArrays = (firstArray, secondArray) => {
//     let newArray = [];
    
//     // Append all elements from firstArray to newArray
//     newArray = newArray.concat(firstArray);
//     // Or: newArray = [...newArray, ...firstArray];
    
//     // Append all elements from secondArray to newArray
//     newArray = newArray.concat(secondArray);
//     // Or: newArray = [...newArray, ...secondArray];
    
//     return newArray;
// };


// 1. Define a function named mergeArrays that takes two arrays as input: firstArray and secondArray.
// 2. Inside the function, create a new array named newArray to store the merged result.
// 3. Append all the elements from firstArray to newArray.
// 4. Append all the elements from secondArray to newArray.
// 5. Return the newArray from the function.

// Pseudo code:
// 1. Define a function mergeArrays(firstArray, secondArray)
// 2.    Create an empty array named newArray
// 3.    Append all elements from firstArray to newArray
// 4.    Append all elements from secondArray to newArray
// 5.    Return newArray

