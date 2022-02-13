/*
THERE ARE TWO LAYERS TO SOLVING ANY PROBLEM: 
1. Logical [problem] domain layer 
2. [Syntactical] programming lagnuage layer

PSEUDOCODE: lets US FOCUS ON THE LOGICAL PROBLEM DOMAIN LAYER
without dipping down to the programming language layer

To verify the logic, we must translate the pseudocode 
into programming code, which is where you can focus 
on programming language syntax issues

WORDS TO USE: (gives more STRUCTURE)
Keyword	Meaning
START	            | start of the program
SET	              | set a variable that we can use for later
GET	              | retrieve input from user
PRINT	            | display output to user
READ	            | retrieve a value from a variable
IF/ELSE IF/ELSE	  | show conditional branches in logic
WHILE	            | show looping logic
END	              | end of the program

___________
PSEUDOCODE:
___________
Given a collection of numbers.

Iterate through the collection one by one.
  - save the first value as the starting value.
  - for each iteration, compare the saved value with the current value.
  - if the current number is greater
    - reassign the saved value as the current value
  - otherwise, if the current value smaller or equal
    - move to the next value in the collection

After iterating through the collection, return the saved value.

__________________
FORMAL PSEUDOCODE:
__________________
START

# Given a collection of integers called "numbers"

SET iterator = 1
SET savedNumber = value within numbers collection at space 1

WHILE iterator <= length of numbers
  SET currentNumber = value within numbers collection at space "iterator"
  IF currentNumber > savedNumber
    savedNumber = currentNumber
  ELSE
    skip to the next iteration

  iterator = iterator + 1

PRINT savedNumber

END

//to programming code
*/

//takes array as argument
let arrayNum = [3, 33, 4, 12, 43, 88, 11, 1200, 23, 100];

function findGreatest(numbers) {
  let savedNum = numbers[0]; 

  numbers.forEach(num => {  //forEach returns undefined, but can still reassign variables
    if (num > savedNum) {
      savedNum = num;
    }
  });
  return savedNum;
}

console.log(findGreatest(arrayNum));

/* more details (restrictions/possible errors)
- if numbers is undefined?
  - guard clause: 
    if (numbers === undefined) return;
*/