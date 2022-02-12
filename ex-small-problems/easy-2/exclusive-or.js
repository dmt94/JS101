/*

In this exercise, you will write a function named xor that 
takes two arguments, and returns true if exactly one 
of its arguments is truthy, false otherwise. 

Note that we are looking for a boolean result 
instead of a truthy/falsy value as returned by || and &&.

EXAMPLES:
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

!! => "truthy" -> "true"
*/

function xor(first, second) {
  if ((!first && second) || (first && !second)) {
    return true;
  }
  else {
    return false;
  }
}

console.log(xor(5, 0));
console.log(xor(false, true));
console.log(xor(1, 1));
console.log(xor(true, true));
console.log(xor(3, null));

/*
LS SOLUTION
(shorter, clean)--love it

function xor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}

(^) bit-wise operator:
  - can be used as an exclusive-or-operator
  - However, it only works properly when both 
    values are numeric or both are boolean 
    -- anything else may lead to unexpected results.
  
'a' ^ false = truthy, since string values are truthy
 */