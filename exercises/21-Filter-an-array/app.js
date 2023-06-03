let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

let resultingNames = allNames.filter(function(names){
     return names.startsWith('R');
})

console.log(resultingNames);