#### Practice Problems: Hard 1 ####

1. Will the following functions return the same results?

```javascript 
function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());
```

**`return` should have code after or it will return `undefined`**

- These functions **`do not return the same thing`**. The function `first()` returns the expected value of { prop1: "hi there" }, but `second()` returns undefined without throwing any errors.

The reason for this odd behavior is that **`semicolons`**, in JavaScript, are technically optional. However, when you omit them, the JavaScript engine inserts them where it thinks you need them. 

In `second`, **it inserts a semicolon after the word return**, so the function returns undefined. No errors are thrown since the rest of the code is valid, even though it never gets executed.

___

2. What does the last line in the following code output?

```javascript 
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);
```

- last line outputs: 

```javascript
{ first: [1, 2]}
```

- since `numArray` is a **reference** to the original array, using the destructive method `numArray.push(2)` will modify the array, thus mutating the original object.

**If you DONT want to modify the original object**


**`push() method`**
```javascript 
let object = { first: [1] };
let numArray = object["first"].slice();
numArray.push(2);
```

**`concat() method`**

```javascript 
let object = { first: [1] };
let numArray = object["first"].concat();
numArray.push(2);
```

___

3. 

```javascript 
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
```

This outputs: 

```javascript 
"one is one"
"two is two"
"three is three"
```

- The parameters in the `messWithVars` function shadowed the variables declared with the same names. Therefore, the re-assignment is never implemented. 

***HERE*** , the **destructive method** `splice` is used inside the function and is able to mutate the respective arrays passed by reference. 

```javascript
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
```

___

4. 