
let number = 5;

function test() {
  number = 3;
}

test();
console.log(number);
// => 3

/*
Remember: variables declared within a block scope
are not accessible. If variable is declared outside,
the variable is available within the block and after block ends.

A different value can be reassigned inside the block
*/

let treat = 'cookies'; 

faveDessert(); // function needs to be called first before console.log for reassignment 
console.log(treat); 
// 'cookies' if function is never called / function not invoked
// access to a variable inside a function (as long as variable is declared outside)
// is permissble but only AFTER function invocation

//function can be declared after it is invoked
function faveDessert() {
  treat = 'crème brûlée'; 
  //reassignment works with 'let' only, otherwise TypeError: Assignment to constant
}

/*
________________________________________________________________________________
Shadowing
The 'num' parameter on line 44 SHADOWS the num variable
by creating a SEPARATE and INDEPENDENT VARIABLE 
with the same name, but with [the scope limited to the function]
*/

let num = 11;

function test(num) {
  num = 22;
  //console.log(num) > invoke function would: 22
} //the variable scope becomes limited to the function block 

test(num);
console.log(num);
// => 11