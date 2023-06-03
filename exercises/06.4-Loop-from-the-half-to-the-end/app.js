let mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];

let initialValue = mySampleArray.length / 2;    // change this value
let stopValue = mySampleArray.length;          // change this value
let increasingValue = 1;

for(let i = initialValue; i < stopValue; i = i + increasingValue)
{
	console.log(mySampleArray[i]);
}

