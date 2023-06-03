let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let simplifier = function(person){
	let age = calculateAge(person.birthDate); 
	return `Hello, my name is ${person.name} and I am ${age} years old`;
};

function calculateAge(birthDate){
	let currentDate = new Date();
	let years = currentDate.getFullYear() - birthDate.getFullYear();
	let month = currentDate.getMonth() - birthDate.getMonth();
	let days = currentDate.getDay() - birthDate.getDay();

	if(month < 0 || (month === 0 && days < 0)){
       years--;
	}
      return years;
}

console.log(people.map(simplifier));

   
