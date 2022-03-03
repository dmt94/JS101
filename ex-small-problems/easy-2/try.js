function signedIntegerToString(num) {
  let finalNum = [];
  if (num !== 0) {
    let num2 = Math.abs(num);
    while (num2 > 0) {
      finalNum.push(num2 % 10);
      num2 = Math.trunc(num2 / 10);
    }
    Math.sign(num) === -1 ? finalNum.push('-') : finalNum.push('+');
  } else { return (1 / num === -Infinity) ? '-0' : '0' }
  return finalNum.reverse().join('');
}

console.log(signedIntegerToString(300));     //300
console.log(signedIntegerToString(1));       //1
console.log(signedIntegerToString(0));       //0
console.log(signedIntegerToString(-0));      //-0
console.log(signedIntegerToString(-1));      //-1
console.log(signedIntegerToString(-10));     //-10
console.log(signedIntegerToString(-1000));   //-1000

