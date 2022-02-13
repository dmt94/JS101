/* 
FURTHER EXPLORATION
Write a hexadecimalToInteger() function that converts a string 
representing a hexadecimal number to its integer value. 
Note that hexadecimal numbers use base 16 instead of 10, 
and the "digits" A, B, C, D, E, and F 
(and the lowercase equivalents) correspond to decimal values of 10-15.
*/

function hexadecimalToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  };
  let arrayOfDigits = string.toUpperCase().split("").map(char => DIGITS[char]);  //since they are string and able to extract the values
  //use digits stored as strings to look up the corresponding numeric values.
  console.log(arrayOfDigits);
  //.join will return a string 
  let combine = arrayOfDigits.reduce((prev, current) => {return (prev * 16) + current}, 0);
  return combine;
}

console.log(hexadecimalToInteger('4D9f'));