let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here

for(let i = 0; i < par.length; i++){
    let char = par[i].toLowerCase();
    if(char !== ' '){
        if(counts[char]){
            counts[char]++;
        } else {
           counts[char] = 1;
        }
    }
}

console.log(counts);                  

// Initialize an empty object called counts to keep track of letter counts.
// Loop through each character in the string par.
// For each character:
// Convert it to lowercase to ensure accurate counting, regardless of casing.
// Ignore the character if it is a space.
// Check if the character already exists as a property in the counts object.
// If it does, increment the count by one.
// If it doesn't, initialize the property with a value of 1.
// After looping through all the characters, the counts object will contain the letter counts.
// Print the counts object to the console to see the letter counts.
