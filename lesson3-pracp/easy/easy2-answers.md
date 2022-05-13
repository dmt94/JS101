#### Easy 2 Practice Problems ####

Contains some of the straight-forward questions and answers

___

1. Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

```javascript

let advice = "Few things in life are as important as house training your pet dinosaur.";

let newAdvice = advice.replaceAll('important', 'urgent');

```

<br>

2. The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the original array as shown below. Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second.

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
```

**SOLUTION**

```javascript
let numbers = [1, 2, 3, 4, 5];

numbers.slice().reverse(); // [5, 4, 3, 2, 1]
numbers.slice().sort();    // [1, 2, 3, 4, 5]


let sortedArray = [...numbers].sort((num1, num2) => num2 - num1); // SPREAD SYNTAX
console.log(sortedArray);  // [5, 4, 3, 2, 1]
console.log(numbers);      // [1, 2, 3, 4, 5]

```

`forEach`

```javascript
let numbers = [1, 2, 3, 4, 5];

let reverseNumbers = [];

numbers.forEach((number) => {
  reversedArray.unshift(number);
});

console.log(reverseNumbers); // [5, 4, 3, 2, 1]
console.log(numbers);        // [1, 2, 3, 4, 5]
```

- **`unshift()`** method adds one or more elements to the **beginning** of an array and returns the new length of the array.

<br>

4. Adding strings together

```javascript

let beginString = "Four score and ";
let famousWords = "seven years ago...";

console.log(beginString.concat(famousWords));
console.log(beginString + famousWords);
```

<br>

5. Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].

```javascript
let arrayNum = [1, 2, 3, 4, 5];

arrayNum.splice(2, 1);

console.log(arrayNum);
```

<br>

6. Create a new array that contains all of the above values, but in an un-nested format:

```javascript

let flintstones = ["Fred", "Wilma"];
let pets = ["Barney", "Betty"];
let kids = ["Bambam", "Pebbles"];

console.log(flintstones.concat(pets, kids));

//alternative

let flintstones = ["Fred", "Wilma", ...pets, ...kids];
```

<br>

7. Consider the following object:

```javascript 

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// create an array from this object that contains only 2 elements
// Barney's name and Barney's number

Object.entries(flintstones).filter(pair => pair[0] === "Barney");
//returns filter of pair, ['keyname', value]

let fEntries = Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();

// Object.entries() creates nested array of key-value pairs
// filter() returns an array with the conditions given
// shift() return the first element in this array (filter returned nested array), so .shift() returns single array

```

9. Back in the stone age (before CSS), we used spaces to align things on the screen. If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?

```javascript 
function center(string, totalLength) {
  let padding = Math.floor((totalLength - string.length) / 2);
  return string.padStart(padding + string.length);
}

/*
minimum length for padStart() is the length of its calling string
*/
```

<br>

10. Write two one-line expressions to count the number of lower-case `t` characters in each of the following strings:

```javascript 

let statement1 = "The Flintstonest Rock!";
let statement2 = "Easy come, easy go.";


function count(string) {
  return string.split('').filter(char => char === 't').length;
}
```



