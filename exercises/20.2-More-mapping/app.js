let myNumbers = [23,234,345,4356234,243,43,56,2];

// Define the myFunction to multiply each number by 3
 function myFunction(number) {
    // Multiply the number by 3
    let result = number * 3;
  
    // Return the multiplied value
    return result;
}

// the map() function to run myFunction on each value in myNumbers
 let newArray = myNumbers.map(function(value) {
    // Call myFunction on each value and store the result in newArray
    return myFunction(value);
});

// Print the new array
console.log(newArray);
