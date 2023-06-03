let myArray = [3344,34334,454543,342534,4563456,3445,23455,234,262,2335,43323,4356,345,4545,452,345,434,36,345,4334,5454,345,4352,23,365,345,47,63,425,6578759,768,834,754,35,32,445,453456,56,7536867,3884526,4234,35353245,53244523,566785,7547,743,4324,523472634,26665,63432,54645,32,453625,7568,5669576,754,64356,542644,35,243,371,3251,351223,13231243,734,856,56,53,234342,56,545343];

// Declare an auxiliary global variable
let minValue = Infinity;

// Iterate over the array using the forEach function
myArray.forEach(item => {
    // Compare the current item with the minimum value
    if (item < minValue) {
        // Update the minimum value if the item is smaller
        minValue = item;
    }
});
console.log(minValue);


// // Declare an auxiliary global variable
// let minValue = a very big number;
// // Iterate over the array using the forEach function
// forEach item in the array {
//     // Compare the current item with the minimum value
//     if (item is smaller than minValue) {
//         // Update the minimum value
//         set minValue to the value of item
//     }
// }
// Print the minimum value in the console

