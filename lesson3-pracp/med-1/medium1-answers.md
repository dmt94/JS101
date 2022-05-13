
#### Medium 1 Practice Problems ####

1. Make a program that follow this style-- each line indented 1 space to the right of the line above it (10 times).

```javasript
The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   ...
```

My Solution:
```javascript
function slanted(string, amount) {
  let count = 0;
  while (count < amount) {
    console.log(string.padStart(string.length + count, ' '));
    count += 1;
  }
}
```

LS Solution:

```javascript 
for (let padding = 0; padding < 10; padding++) {
  console.log(" ".repeat(padding) + "The Flinstones Rock!");
}
```

___

2. Return a new string that swaps the case of all of the letters: uppercase -> lowercase   &  lowercase -> uppercase

```javascript 
let munstersDescription = "The Munsters are creepy and spooky.";

let newMunsters2 = munstersDescription.split('').map(function(char) {
  return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
}).join("");

//straight-forward
let newMunsters2 = munstersDescription.split('').map(
  char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
```

___

3. Refactor without using do/while loop. Should return all of the factors of `number`

```javascript 
function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}
```

Factors: whole numbers that are multiplied together to produce another number

- factor is a number that divides another number EVENLY, there is no remainder.

ex. prime numbers can only have 2 factors, itself and 1

`dividend / divisor`

<b>My answer</b>:

```javascript 
function factors2(number) {
  let factors = [];
  if (number > 0) {
    for (let divisor = number; divisor > 0; divisor -= 1) {
      if (number % divisor === 0) {
        factors.push(number / divisor);
      }
    } return factors;
  } else return 'No answers for numbers less than or equal to 0.'
}
```


<b>More simple, LS</b>:

```javascript 
while (divisor > 0) {
  if (number % divisor === 0) {
    factors.push(number / divisor);
  }
  divisor -= 1;
}
```

___

4. Is there a difference between these implementations?

```javascript
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
```

- Yes, there is a difference. While both methods have the same return value, the first implementation mutates the argument represented by buffer. That is, the caller will see that the array is different when the function returns. The rollingBuffer2 implementation doesn't mutate the argument specified by the value of buffer.

___

5. What will the following two lines of code output?

```javascript 
console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);
```
RETURNS
```javascript 
0.8999999999999999
false
```

- JavaScript uses floating point numbers for all numeric operations. Most floating point representations used on computers **lack a certain amount of precision**, and that can yield unexpected results like these.

#### Floating Point Numbers ####

300000000 => 3 x 10^8
x
0.0000015 => 1.5 x 10^-7
_
           (1.5 x 4) x (8 - 7)
           4.5 x 10
           45


Base 10 
100 10 1   1/10 1/100 1/1000

Base 2 
4 2 1   1/2 1/4 1/8 ...

___

6. Output?

```javascript 
let nanArray = [NaN];

console.log(nanArray[0] === NaN);
```

- The output is false. NaN -- not a number -- is a special numeric value that indicates that an operation that was intended to return a number failed. JavaScript doesn't let you use == and === to determine whether a value is NaN.

```javascript 
console.log(Number.isNaN([nanArray[0]])); // true
```
