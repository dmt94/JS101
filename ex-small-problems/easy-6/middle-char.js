function centerOf(string) {
  let center = Math.floor(string.length / 2);
  return string.length % 2 === 1 ? string.charAt(center) : string.split('').slice(center - 1, center + 1).join('');
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"