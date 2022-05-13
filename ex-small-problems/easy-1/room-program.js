/*
Build a program that asks the user to enter the length and width of a room in meters, 
and then logs the [area] of the room to the console in both [square meters] and [square feet].
Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. 
Use the readlineSync.prompt method to collect user input.
 */

//MY SOLUTION
let rlSync = require('readline-sync'); 

function area() {
  let userL = rlSync.question("Input your length (in meters)\n");
  let userW = rlSync.question("Input your width (in meters)\n");
  let sqMeter = userL * userW;
  let sqFeet = (sqMeter * 10.7639);
  if (Number.isNaN(sqMeter) === true) {
    console.log('Type a valid number.')
    return area()
  }
  else {
    console.log(`The area of the room is ${sqMeter.toFixed(2)} sq meters (${sqFeet.toFixed(2)} sq feet).`);
  }
}

area();

//________________________________________________________________________________________________________
//LS SOLUTION

// const SQMETERS_TO_SQFEET = 10.7639;

// console.log("Enter the length of the room in meters:");
// let length = readlineSync.prompt();
// length = parseInt(length, 10);

// console.log("Enter the width of the room in meters:");
// let width = readlineSync.prompt();
// width = parseInt(width, 10);

// let areaInMeters = (length * width);
// let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

// console.log(
//   `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
// );
//________________________________________________________________________________________________________