/*
Create a simple tip calculator. 
The program should prompt for a bill amount and a tip rate. 
The program must compute the tip, and then log both the tip and 
the total amount of the bill to the console. 
You can ignore input validation and [assume that the user will enter numbers].
*/

//MY SOLUTION
let rlSync = require('readline-sync');

let userBill = Number(rlSync.question('What is the bill? > $ '));  
let userTip = Number(rlSync.question("What is the tip [percentage]? > "));

function tipCalc(bill, tip) {
  let totalTip = bill * (tip / 100);
  let totalBill = bill + totalTip;
  console.log(`Your tip is $${totalTip.toFixed(2)}\nYour total cost is $${totalBill.toFixed(2)}`);
}

tipCalc(userBill, userTip);

//________________________________________________________________________________________________________
//LS SOLUTION

// let bill = parseFloat(readlineSync.question("What is the bill?\n"));

// let percentage = parseFloat(readlineSync.question("What is the tip percentage??\n"));

// let tip = bill * (percentage / 100);

// let total = bill + tip;

// console.log(`The tip is $${tip.toFixed(2)}`);
// console.log(`The total is $${total.toFixed(2)}`);