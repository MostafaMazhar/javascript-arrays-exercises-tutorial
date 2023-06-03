function lyricsGenerator(arr){
    let lyrics = '';
    let oneCount = 0;
  for( let num of arr)  
    if(num === 0){
        lyrics += 'Boom ';
    } else if(num === 1){
       oneCount ++;
    if(oneCount === 3){
      lyrics += '!!!Break the base!!! ';
      oneCount = 0;
    } else {
        lyrics += 'Drop the base ';
    }
  }
  return lyrics;
}


// Don't change anything bellow this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))

// Create a function lyricsGenerator
   // Create an empty string variable called lyrics.
   // Create a variable called oneCount and set it to 0.
// Iterate through each element num in the input array:
  // If num is equal to 0, concatenate "Boom " to the lyrics string.
  // If num is equal to 1, increment oneCount by 1.
  // If oneCount becomes equal to 3, concatenate "!!!Break the base!!! " to the lyrics string and reset oneCount to 0.
  // Otherwise, concatenate "Drop the base " to the lyrics string.
// Return the lyrics string.
