// function isColorValid(color) {
//   return (color === "blue" || color === "green");
// }

// console.log(isColorValid('blue'));
// console.log(isColorValid('pink'));

function isColorValid(color) {
  return color !== 'blue' || color !== 'green';
}

function center(string, totalLength) {
  let padding = Math.floor((totalLength - string.length) / 2);
  return string.padStart(padding + string.length);
}

console.log('okay'.padStart(8, '*'));
