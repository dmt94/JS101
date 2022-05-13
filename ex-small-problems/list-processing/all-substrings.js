function leadingSubstrings(string) {
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    arr.push(string.substring(0, i + 1));
  }
  return arr;
}

function substrings(string) {
  let newStr = [];
  for (let i = 0; i < string.length; i++) {
    newStr.push(leadingSubstrings(string.slice(i)));
  }
  return newStr.flat();
}

console.log(substrings('abcde'));