/*
Functions DO NOT return [true] or [false] explicitly. 
It returns the result of a conditional expression
*/

function isSmall(number) {
  return number < 10;
}

let num = 15;

if (isSmall(num)) {
  console.log("small number");
} else {
  console.log("large number"); // since argument for isSmall is larger than 10, code logs "large number"
}


/* 
(&&)
If the first object is truthy, the logical AND operator 
returns the second operand
*/
let arrayEx = []; //empty arrays can be considered "truthy"
console.log(arrayEx && "cat");  // "cat"

console.log("cat" && "rabbit"); // "rabbit"

/* 
Better code to get extract input
*/
let rlSync = require('readline-sync');

function getNameFromUser() {
  return rlSync.question("Please enter your name:\n");
}

//version one
let username = getNameFromUser();
if (username) {
  console.log(`Hello, ${username}!`);
} else {
  console.log("you must enter your name!");
}

//version two
let username2 = getNameFromUser();
if (username2 === "") { 
  console.log("you must enter your name!"); //good to test if empty string
} else {
  console.log(`Good Afternoon, ${username2}!`);
}