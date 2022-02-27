//Given two strings, return the characters that are not common in the two strings.

/*
ALGORITHM 
1. declare common array outside for loop
2. use nested for loop 
3. compare char from stringOne with stringTwo
 => if char is the same, continue (use strict equality operator)
 => if they are not the same and char is not in the commonA, push char to commonA
4. return commonA
*/
//remember we only care about what they don't have in common
const uniqueStringCharacters = (str1, str2) => {
  let resultStr = '';

  for (let i = 0; i < str1.length; i++) {
    if (!str2.includes(str1[i])) {
      resultStr += str1[i];
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (!str1.includes(str2[i])) {
      resultStr += str2[i];
    }
  }
  if (resultStr === '') {
    return " No unique characters! ";
  }
  else {
    return resultStr;
  }
}


console.log(uniqueStringCharacters("xyab","xzca"));
console.log(uniqueStringCharacters("a","z"));
console.log(uniqueStringCharacters("abcd","de"));
console.log(uniqueStringCharacters("abc","abba"));
console.log(uniqueStringCharacters("xyz","zxy")); // returns empty string

/*
WHAT I LEARNED ABOUT THIS SESSION:

1. Solutions can be simple. 
  > Time to review/master other methods other than pushing to an array
  > A different [bind] can exist, such as string += 
2. Go through PEDAC process and algorithm
3. PEDAC
  P: understand problem
  E: write examples/test cases
  D: data structure
  A: algorithm
  C: code 

  >> PEDAC doesn't have to be linear; you can test cases and then edit through 
  the "P"--processing the problem:
    - identify more rules
    - identify edge cases
  
  >> 
*/