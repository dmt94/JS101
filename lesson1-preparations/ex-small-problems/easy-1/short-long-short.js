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

Write a function that takes two strings as arguments, 
determines the length of the two strings, 
and then returns the result of concatenating 
the shorter string, the longer string, and 
the shorter string once again. 

You may assume that the strings are of different lengths.

P - understand Problem
  > What is the expected [input] [output]?
    = I: 2 arguments (both strings) in a function
    = O: The 2 strings attached together as one string in the order of: 
      shortstring + longstring + shortstring again

  > Make ambiguous requirements clear 
    = we are using the shorter string of the function argument twice
    (it places first and last in the output string)

  > What are the rules? (rules, restrictions)
    = only 2 arguments are used 
    = a new string is output
    = we can assume in this problem that the strings will never be the same length,
    so we don't need to adjust the code to the possibility that the strings
    are of the same length

  > Mental model 
    (rephrase the problem/ summary view of problem--[what] the problem requires)
    = combine the string arguments together into a new string, 
    where the format requires the shorter string of the argument to be first, 
    then the longer string of the argument, and then re-use the shorter string
    again

E - Examples / Test
  > Validate understanding of the problem
  - calling function stringTog('happy', 'cat'); 
    would result in a new string: 'cathappycat'.

D - Data Structure 
  > How we represent data that we will work with
  when [converting] ==> [input] => [output]

A - Algorithm
  > [input] == STEPS ==> [output]
  - find out which string is the shorter and which string is the longer
    - find length of each string 
  - use length of strings to structure the return value

C - Code  
  > Implement Algorithm
*/

function shortLongShort(strOne, strTwo) {
  if (strOne.length > strTwo.length) {
    return strTwo.concat(strOne, strTwo);
  } else {
    return strOne.concat(strTwo, strOne);
  }
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"

/*
LS SOLUTION

function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    return string2 + string1 + string2;
  } else {
    return string1 + string2 + string1;
  }
}

LS NOTE:
_______

JavaScript automatically coerces string primitives to String objects when needed.
		○ String literals (denoted by double or single quotes, "peace") 
    and strings returned from String calls
    in a non-constructor context 
    (i.e., without using the new keyword) 
    are primitive strings. 

    JavaScript automatically converts primitives to String objects, 
    so that it's possible to use [String object methods] for primitive strings.

		○ In contexts where a method is to be invoked on a 
    primitive string or a property lookup occurs, 
    JavaScript will automatically wrap the string primitive 
    and call the METHOD or perform the property lookup. (check character)
*/
let newStr = 'Gainful';
console.log(newStr[3]); // property look up for character at index 3