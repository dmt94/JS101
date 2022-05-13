/* maximum rotation


*/

// function rotateRightmostDigits(digit) {

//   firstHalf.push(firstHalf.shift());
//   return firstHalf.join('');
// }

function maxRotation(digit) {
  let returnDigit = [];
  let digitString = String(digit);
  for (let i = 0; i < digitString.length; i++) {
    returnDigit.push(i);
    console.log(i);
  }
}

maxRotation(735291);          // 321579
// maxRotation(3);               // 3
// maxRotation(35);              // 53
// maxRotation(105);             // 15 -- the leading zero gets dropped
// maxRotation(8703529146);      // 7321609845