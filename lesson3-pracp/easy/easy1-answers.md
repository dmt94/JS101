#### Easy 1 Practice Problems ####

Contains some of the straight-forward questions and answers

___

1. Will the code below raise an error?

```javascript
let numbers = [1, 2, 3];
numbers[6] = 5;


let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?
```

- No, an error will not be raised. Empty elements/items will be created between the last existing element prior to the addition of `numbers[6] = 5` assignment and the updated last index 6, where the value 5 is found.

- **undefined** will be returned

- In general, JavaScript treats unset array elements as missing, but the length property includes the unset elements.

- Unset values are created when there are "gaps" in the array. Although it returns `undefined`, slot is still **empty**. It has no value.

**THE DIFFERENCE between undefined and empty slot:**

- if you use `map()`, for instance, the new array will also have empty slots in the corresponding positions. On the other hand, slots with a value of `undefined` will be remapped based on the `return` value of the callback:

```javascript
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[5] = undefined; // => [ 1, 2, 3, <2 empty items>, undefined, 5 ]
numbers.map(() => 10);  // => [ 10, 10, 10, <2 empty items>, 10, 10 ]

```

___

2. How can you determine whether a given string ends with an exclamation mark (!)?

```javascript
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false
```

- with `endsWith()` method. Has 2 parameters, first is the string to search for in its calling string and the second (optional) is index to end search. Optional second parameter defaults to `length` of string if omitted.

```javascript
console.log(str1.endsWith('!')); 

/*
returns: true
*/
```

___

3. Determine whether the following object of people and their age contains an entry for 'Spot':

```javascript

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log(Object.keys(ages).includes('Spot')); //false
//OR
console.log(ages.hasOwnProperty("Spot")); //false
```
- both `Object.keys()` and `hasOwnProperty()` returns object's own properties

___

4. Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)

```javascript
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

// LONG WAY

function firstCap(string) {
  let lowerStringSplit = string.toLowerCase().split(' ');
  let first = lowerStringSplit.shift();
  let capFirst = first.split('')[0].toUpperCase().concat(first.slice(1));
  let newStr = lowerStringSplit.join(' ');
  
  return capFirst.concat(' ', newStr);
}

console.log(firstCap(munstersDescription));

// SHORT AND BETTER WAY

function firstCap(string) {
  return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
}
```
___

6. Add entries for Marilyn and Spot to the object:

```javascript

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages, additionalAges);

```

___

7. Determine whether the name Dino appears in the strings below -- check each string separately):

```javascript
let str1 = "Few things in life are as important as house training your pet dinosaur.";

let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes('Dino')); // false
console.log(str2.includes('Dino')); // true

str1.indexOf('Dino') > -1; // false
str2.indexOf('Dino') > -1; // true

str1.match('Dino') !== null; // false
str2.match('Dino') !== null; // true

```
___

8. Adding new element to array:

```javascript
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push("Dino");
flintstones = flintstones.concat("Dino");
flintstones[flintstones.length] = "Dino";

```

```javascript
flintstones.push("Dino", "Hoppy"); // can push multiple elements to array
```

__

9. Return a new version of this sentence that ends just before the word house. Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.

```javascript
let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

console.log(advice.slice(0, advice.indexOf('house')));

```

