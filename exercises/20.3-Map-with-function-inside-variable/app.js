let names = ['Alice','Bob','Marry','Joe','Hilary','Stevia','Dylan'];

let prepender = function(name){
	let result = 'My name is: '+name;

	return result;
};

// Use the map() function to apply the prepender function on each name in names
let newArray = names.map(function(name) {
    // Call the prepender function on each name and store the result in newArray
    return prepender(name);
});

// Print the new array
console.log(newArray);
