/*
Write a program that prompts the user 
for [two positive integers], 
and then prints the results of the following operations 
on those two numbers: 
addition, 
subtraction, 
product, 
quotient, 
remainder, and 
power. 

Do not worry about validating the input.
*/

let rlSync = require('readline-sync');

function arithmetic() {
  let firstNum = parseInt(rlSync.question('Enter the first num:\n'));
  let secNum = parseInt(rlSync.question('Enter the second num:\n'));
  console.log(`${firstNum} + ${secNum} = ${firstNum + secNum}\n`);
  console.log(`${firstNum} - ${secNum} = ${firstNum - secNum}\n`);
  console.log(`${firstNum} * ${secNum} = ${firstNum * secNum}\n`);
  console.log(`${firstNum} / ${secNum} = ${(firstNum / secNum).toFixed(3)}\n`);
  console.log(`${firstNum} % ${secNum} = ${firstNum % secNum}\n`);
  console.log(`${firstNum} ** ${secNum} = ${firstNum ** secNum}\n`);
}

arithmetic();

/*
==> 23 ** 17 = 1.4105003956066297e+23
how JavaScript displays 
numbers that are too large for its Number type. 
The number represents approximately 
1.41 * 100,000,000,000,000,000,000,000 
using what is called floating-point notation. 

If you want to see what the exact value is, 
you can use JavaScript's BigInt type 
by appending an n to both 23 and 17:
23n ** 17n    // 141050039560662968926103n
*/
