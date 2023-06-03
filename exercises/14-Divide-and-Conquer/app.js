let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
function mergeTwoList (numbers){
    let even = [];
    let odd = [];

    for(i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
           even.push(numbers[i]);
    } else {
           odd.push(numbers[i]);
    }
   }
    let mergeArr = [...odd, ...even];

    return mergeArr;
};

// console.log(mergeTwoList([1, 2, 33, 10, 20, 4]));
console.log(mergeTwoList(list_of_numbers));


// Loop through the array of numbers
 // Check if the number is odd or even
   // If even, push it to the 'even' array
    // If odd, push it to the 'odd' array
    // Concatenate the 'odd' and 'even' arrays
    // Return the merged array