/*________________________________________________
[PEDAC]
P - understand Problem
  > What is the expected [input] [output]?
  > Make ambiguous requirements clear 
  > What are the rules? (rules, restrictions)
  > Mental model 
    (rephrase the problem/ summary view of problem--[what] the problem requires)

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

Write a function that takes any year greater than 0 as 
input and returns true if the year is a leap year, 
or false if it is not a leap year.

leap year: 
- year divisible by 4, but not by 100 
- year divisible by 4 and 400
not leap year: 
- not divisible by 4
- divisible by 4 and 100, but not 400

P - understand Problem
  > What is the expected [input] [output]?
    = I: integer greater than 0
    = O: 
      - true if 0 is divisible by 4, but not by 100
      - true if 0 is divisible by 4 and 400
      - false if not divisible by 4 
      - false if dibisible by 4 and 100, but not 400

  > Make ambiguous requirements clear 
    - there is a max integer to be set (programmers choice)

  > What are the rules? (rules, restrictions)
    - input must be greater than 0 and have some max
    - true if:
      - divisible by 4, but not by 100 
      - divisible by 4 and 400
    - false if: 
      - not divisible by 4
      - divisible by 4 and 100, but not 400

  > Mental model 
    (rephrase the problem/ summary view of problem--[what] the problem requires)
    = The input expected is an integer over 0--
    which represents some year--and then returns a boolean value
    that either confirms or denies that the year (input)
    matched the conditions for a 'leap year' or not. 
    

E - Examples / Test
  > Validate understanding of the problem
  - isLeapYear(2016) -> true

D - Data Structure 
  > How we represent data that we will work with
  when [converting] ==> [input] => [output]
  - if-else conditions where input are first converted into numbers
  and check if it is divisible by conditions set 

A - Algorithm
  > [input] == STEPS ==> [output]
  - make sure input is a number and greater than 0, convert input into a number 
    - if not, then ask to input number. Call function again until input is a number and greater than 0.
  - use if-else statement to check if number meets the 
  requirements for a leap year
  - return respective boolean value according to if conditions are met 
    - true: leap year
    - false: not a leap year

C - Code  
  > Implement Algorithm
*/

let rlSync = require('readline-sync');

function isLeapYear() {
  function ask() {
    let year = parseInt(rlSync.question('Enter a year (greater than 0)\n'));
    if (Number.isNaN(year) == true || year <= 0) { //be careful to not mix boolean true and 'true'
      console.log('Please enter a year greater than 0\n');
      return ask();
    }
    else {
      return year;
    }
  }
  let userYear = ask();
  if (userYear % 4 === 0 && userYear % 100 !== 0 || userYear % 400 === 0) {
    return true;
  }
  else {
    return false;
  }
}

// console.log(isLeapYear(2016));
// console.log(isLeapYear(2015));
// console.log(isLeapYear(2100));      // false
// console.log(isLeapYear(2400));      // true
// console.log(isLeapYear(240000));    // true
// console.log(isLeapYear(240001));    // false
// console.log(isLeapYear(2000));      // true
// console.log(isLeapYear(1900));      // false
// console.log(isLeapYear(1752));      // true
// console.log(isLeapYear(1700));      // false
// console.log(isLeapYear(1));         // false
// console.log(isLeapYear(100));       // false
// console.log(isLeapYear(400));       // true

console.log(isLeapYear());

/*

LS SOLUTION
______________
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

OTHERS SOLUTION
_______________
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) 
    || (year % 4 === 0 && year % 400 === 0)) return true;
  else return false;
}

*/