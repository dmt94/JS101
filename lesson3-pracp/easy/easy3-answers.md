#### Easy 3 Practice Problems ####

Contains some of the straight-forward questions and answers

___

1. Write three different ways to remove all of the elements from the following array:

```javascript 
let numbers = [1, 2, 3, 4];

//METHOD ONE
numbers.splice(0, numbers.length);


//METHOD TWO
for (let i = 0; i < numbers.length; i++) {
  numbers.shift()
  numbers.pop();
}

//METHOD THREE
numbers.length = 0;

//METHOD FOUR
while (numbers.length) {
  numbers.pop();
}
```

<br>

5. Can you rewrite this function so it only has one `return` statement and does not explicitly use either true or false?

```javascript 

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}
```

<br>

MY SOLUTION:

```javascript 

//METHOD ONE
function isColorValid(color) {
  return (color === "blue" || color === "green");
}

//METHOD TWO
const isColorValid = color => color === "blue" || color === "green";

//METHOD THREE
const isColorValid = color => ["blue", "green"].includes(color);

```


