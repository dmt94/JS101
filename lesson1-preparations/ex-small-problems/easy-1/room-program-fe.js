/*FURTHER EXPLORATION

Modify the program so that it asks the user 
for the input type (meters or feet). 
Compute for the area accordingly, and log it and 
its conversion in parentheses.

Note: 1 square meter == 10.7639 square feet
*/
let rlSync = require('readline-sync'); 

function area() {
  let userChoice = rlSync.question('Do you want to use [meters] or [feet]?\n');
  if (userChoice === 'meters') {
      meterArea();
      function meterArea() {
        let lengthInMeters = parseInt(rlSync.question('Input length (m):\n'));
        let widthInMeters = parseInt(rlSync.question('Input width (m):\n'));
        let squareMeters = lengthInMeters * widthInMeters; 
        let feetSquared = squareMeters * 10.7639;
        if (Number.isNaN(squareMeters) === true) {
          console.log('Type a valid number\n');
          return meterArea();
        }
        else {
          console.log(`The area of the room is ${squareMeters.toFixed(2)} meters squared\n(${feetSquared.toFixed(2)} ft squared)`);
        }
      }
    }
  else if (userChoice === 'feet') {
      feetArea();
      function feetArea() {
        let lengthInFeet = rlSync.question('Input length (ft):\n');
        let widthInFeet = rlSync.question('Input width (ft):\n');
        let ftsq = lengthInFeet * widthInFeet; 
        let sqMeters = ftsq / 10.7639;
        if (Number.isNaN(ftsq) === true) {
          console.log('Type a valid number\n');
          return feetArea();
        }
        else {
          console.log(`The area of the room is ${ftsq.toFixed(2)} feet squared\n(${sqMeters.toFixed(2)} meters squared)`);
        }
      }
    }
  else {
    console.log('Type a valid unit, either \'meters\' or \'feet\'.');
    return area();
  }
}

area();