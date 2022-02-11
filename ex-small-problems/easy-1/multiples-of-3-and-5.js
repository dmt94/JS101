/*
________________________________________________
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

Write a function that computes the [sum] of all numbers 
between 1 and some other number, inclusive, 
that are multiples of 3 or 5. 
For instance, if the supplied number is 20, 
the result should be 98 
(3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

P:
I/O:
  [input]: 
    - integer greater than 1

  [output]:
    - sum of all numbers between 1 and integer input that are multiples of 3 or 5

Ambiguous:
  - OR: multiples of 3 OR 5
  - input is included in the calculation of checking if it is a multiple of 3 or 5

Rules/Restrictions/Implicit Requirement:
  - can assume integer is greater than 0, no restrictions necessary in making sure

Mental Model: (summary of the entire problem; what problem requires)
  - the expected return value is the sum of all numbers that are multiples
  of 3 OR 5, starting from 1 up to the number chosen by user. 
    
D: 
Data Structure:
  - Use Array and combine all the expected elements inside the array (numbers)
    - elements are multiples of 3 or 5 
    - reduce() method

A:
Algorithm:
  - declare an empty array that will list the number between 1-(input number)
  - using for loop: 
    - declare a counter variable (that counts up to the input #)
    - if-else condition:
      - if [number] is a multiple of 3 or 5, push to empty array
  - using the empty array: 
    - reduce() method to the sum of the elements 
  - return value found using the reduce() method
________________________________________________________________________
*/

function multisum(num) {
  let multipleA = []; 
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multipleA.push(i);
    }
  }
  let multiples = multipleA.reduce((accumulator, element) => {
    return accumulator + element}, 0);
  return multiples;
} 

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168