/*________________________________________________
[PEDAC]
P - understand Problem
  > What is the expected [input] [output]?
  > Make ambiguous requirements clear 
  > What are the rules?
  > Mental model 

E - Examples / Test
  > Validate understanding of the problem

D - Data Structure 
  > How we represent data that we will work with
  when [converting] ==> [input] => [output]

A - Algorithm
  > [input] == STEPS ==> [output]

C - Code  
  > Implement Algorithm
________________________________________________

Write a program that asks the user 
to enter an integer greater than 0, 
then asks whether the user wants to 
determine the sum or the product 
of all numbers between 1 and 
the entered integer, inclusive.

P:
I/O:
  [input]: 
    - integer greater than 0
    - find [sum] or [product]?

  [output]:
    - sum or product of all numbers between 1 - (input integer, inclusive)

Ambiguous:
  - include the user integer in the calculation 
    - either [sum] or [product]
  - input number is the final number (count up to, using counter)

Rules/Restrictions/Implicit Requirement:
  - integer input must be greater than 0

Mental Model: (summary of the entire problem; what problem requires)
  - 
    
D: 
Data Structure:
  - Use Array and combine all the elements inside the array (numbers)
    - either product or sum 
    - reduce() method

A:
Algorithm:
  - ask for 2 input: 
    - integer > 0
    - "s" or "p" / [sum of all integers 1-userInt] or [product of all integers 1-userInt]
  - declare an empty array that will list the number between 1-(input number)
  - using for loop: 
    - declare a counter variable
    - push the counter numbers to the array, including the input number
  - use if-else statement: (for if user input "s" or "p")
    if product (array is reduced using *)
    if sum (array is reduced using +)
  - return value of the reduced array

*/



let rlSync = require('readline-sync');
//without user validation 
function sumOrProduct() {
  let integer = parseInt(rlSync.question('Type an integer greater than 0\n')); 
  let sumOrP = rlSync.question('Enter "s", to compute sum.\nEnter "p" to compute product\n');
  let arrayInt = [];
  for (let i = 1; i <= integer; i++) {
    arrayInt.push(i);
  }
  if (sumOrP === 's') {
    let sumArray = arrayInt.reduce((accumulator, element) => {
      return accumulator + element}, 0); 
    return sumArray;
  }
  else if (sumOrP === 'p') {
    let productArray = arrayInt.reduce((accumulator, element) => {
      return accumulator * element}, 1); 
    return productArray;
  }
} //end

console.log(sumOrProduct());
