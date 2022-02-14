/*
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

Write pseudocode that attempts to solve:
1. function that returns the sum of two nums

2. function that takes an array of strings, returns a string
  that is all those strings concatenated together 

3. method that takes an array of integers, and returns a new array
  with every other element from the original array, 
  starting with the first element. For instance:
  
  everyOther([1,4,7,2,5]); // => [1,7,5]

4. a function that determines the index of the 3rd 
  occurrence of a given character in a string. 
  For instance, if the given character is 'x' 
  and the string is 'axbxcdxex', the function 
  should return 6 (the index of the 3rd 'x'). 
  If the given character does not occur at least 3 times, return null.

5. a function that takes two arrays of numbers and 
  returns the result of merging the arrays. 
  The elements of the first array should become 
  the elements at the even indexes of the returned array, 
  while the elements of the second array should become 
  the elements at the odd indexes. For instance:

  merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]

______________________________________________________________________________ 

1. Function that takes two arguments and returns the sum of its arguments

START
SET function sum(num1, num2) {
  READ num1 and num2
  PRINT/RETURN num1 + num2
}
END
*/
function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(4, 5)); // 9

/*
______________________________________________________________________________ 

2. Function that returns the input (array of strings) concatenated together

// concatenate all of the elements in an array as one new string

START
SET function combine(array) {
  PRINT/RETURN array.concat('');
}
END
*/

function combine(array) {
  return array.join('');
}

let friends = ['Monica', 'Phoebe', 'Rachel', 'Chandler', 'Joey', 'Ross'];
let animal = ['d', 'o', 'g'];
console.log(combine(friends));
console.log(combine(animal));

/*
______________________________________________________________________________ 

3. method that takes an array of integers, and returns a new array
  with [every other element] from the original array, 
  starting with the first element. 

  //function that returns the elements that have the even index values 
  from the original array

  START
  SET function evenIndex(array) {
    SET newArray = empty array
    WHILE iterator < array.length
      IF iterator is even
        GET array with iterator index 
        push to newArray
    PRINT/SAVE newArray
  }
  END
*/

function evenIndex(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

let numArray = [4, 2, 3, 6, 22, 11, 12, 5];
console.log(evenIndex(numArray)); // [4, 3, 22, 12]

/*
______________________________________________________________________________ 

4. function that determines the index of the 3rd 
  occurrence of a given character in a string. 
  For instance, if the given character is 'x' 
  and the string is 'axbxcdxe[x]', the function 
  should return 6 (the index of the 3rd 'x'). 
  If the given character does not occur at least 3 times, return null.

  START 
  SET function thirdIndex(string, character) {
    SET counter is equal to 0;
    WHILE iterator < string length
      if string with the iterator as an index is equal to character
      add to counter 
      IF counter is equal to 3
        PRINT/RETURN : the index of the 3rd character is: index
    PRINT/RETURN : null (defaults if index not found)
        
  }
  END
*/

function thirdIndex(string, char) {
  let counter = 0; 
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      counter ++;
    }
    if (counter === 3) {
      return `The index of the 3rd "${char}" is ${i}`;
    }
  }
  return null;
}

console.log(thirdIndex('abcabcab', 'a'));

/*
______________________________________________________________________________ 

5. function that takes two arrays of numbers and returns 
the result of merging the arrays. 

The elements of the first array should become 
the elements at the even indexes of the returned array, 

while the elements of the second array should 
become the elements at the odd indexes

can assume that both arrays have the same length

  START
  SET function mergeArray(firstArray, secArray) {
    SET newArray to an empty array
    WHILE iterator is less than newArray.length
      push firstArray with iterator element to newArray
      push secondArray with iterator element to newArry
    PRINT/RETURN mergeArray
  }
  END
*/

function mergeArray(firstA, secA) {
  let newA = [];
  for (let i = 0; i < firstA.length; i++) {
    newA.push(firstA[i]);
    newA.push(secA[i]);
  }
  return newA
}//end

console.log(mergeArray([1, 2, 3], [4, 5, 6])); //[1, 4, 2, 5, 3, 6]