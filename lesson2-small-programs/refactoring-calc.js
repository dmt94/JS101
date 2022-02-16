const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num)); //after taking away white space, there is nothing
}

prompt("Time to Calculate!");

prompt("Enter first number");
let firstNum = readline.question();

while (invalidNumber(firstNum)) {
  prompt("Mmm...this isn't a valid number. Enter a valid number");
  firstNum = readline.question();
}

prompt("Enter second number");
let secNum = readline.question();

while (invalidNumber(secNum)) {
  prompt("Mmm...this isn't a valid number. Enter a valid number");
  secNum = readline.question();
}

prompt("What operation would you like to perform?\n(Enter appropriate number)\n[1] - Add\n[2] - Subtract\n[3] - Multiply\n[4] - Divide");
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt("Mmm...that is not a valid operator choice.\nEnter appropriate number:\n[1] - Add\n[2] - Subtract\n[3] - Multiply\n[4] - Divide");
  operation = readline.question();
}

let output; //can assign after

switch (operation) {
  case '1':
    output = Number(firstNum) + Number(secNum);
    break;
  case '2':
    output = Number(firstNum) - Number(secNum);
    break;
  case '3':
    output = Number(firstNum) * Number(secNum);
    break;
  case '4':
    output = Number(firstNum) / Number(secNum);
    break;
}

console.log(`The result is ${output}`);

