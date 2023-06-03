let contact = {
    fullname: "Jane Doe",
    phone: "321-321-4321",
    email: "test@test.com"
}
let newContact = []
for (let key in contact) {
      newContact = contact[key];
      console.log(key + ' : ' + newContact);
     
}


// // Iterate over the properties of the contact object using a for...in loop
// for (let key in contact) {
//     // Get the value associated with the current property
//     let value = contact[key];

//     // Print the property and its value on the console
//     print(key + " : " + value);
// }
