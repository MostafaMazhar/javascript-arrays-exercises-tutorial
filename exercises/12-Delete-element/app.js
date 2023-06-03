let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below
function deletePerson(person){
    return people.filter(function(p) {
        return p !== person;
    });
}
console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));



// function deletePerson(person) {
//   return people.filter((p) => p !== person);
// }

