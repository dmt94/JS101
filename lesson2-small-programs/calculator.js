/*
Walk-through Calculator 

FIRST STEP IS TO WRITE PSEUD-CODE

1. Ask the user for first number
2. Ask the user for two numbers.
3.. Ask the user for the type of [operation] to perform: 
  add, 
  subtract, 
  multiply,
  divide,
4. Perform the calculation
5. Display the result of the operation
6. 
7. */
const readline = require('readline-sync');

let operation = readline.question("What operation would you like to perform?\n(Pick appropriate number)\n1) Add\n2) Subtract\n3) Multiply\n4) Divide\n>> ");

let firstNum = Number(readline.question("What is the first number\n"));

let secNum = Number(readline.question("What is the second number\n"));

let output; //can assign after
if (operation === '1') {
  output = firstNum + secNum;
}
else if (operation === '2') {
  output = firstNum - secNum;
}
else if (operation === '3') {
  output = firstNum * secNum;
}
else if (operation === '4') {
  output = firstNum / secNum;
}

console.log(`The result is ${output}`);

