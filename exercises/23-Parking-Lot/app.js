
let parking_state = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

function getParkingLotState(parking_state){
  let totalSlots = 0;
  let availableSlots = 0;
  let occupiedSlots = 0;

  for(let row of parking_state){
    for(let element of row){
      if(element === 1){
        totalSlots++;
        occupiedSlots++;
      }
      if(element === 0){
        totalSlots++;
      }
    }
  }
   availableSlots = totalSlots - occupiedSlots;

   const state = {
    totalSlots: totalSlots,
    availableSlots: availableSlots,
    occupiedSlots: occupiedSlots
   };
   return state;
}


console.log(getParkingLotState(parking_state))


// Create a function called getParkingLotState that takes a parking_state array as input.
// Initialize variables totalSlots, availableSlots, and occupiedSlots to 0.
// Loop through each row in the parking_state array using a nested loop:
    // For each row, loop through each element in the row.
    // If the element is equal to 1, increment totalSlots and occupiedSlots by 1.
    // If the element is equal to 0, increment only totalSlots by 1.
// Calculate availableSlots by subtracting occupiedSlots from totalSlots.
// Create an object state with properties totalSlots, availableSlots, and occupiedSlots, and assign their respective values.
// Return the state object.
// Call the getParkingLotState function with the parking_state array as an argument and print the result.