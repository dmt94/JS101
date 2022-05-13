/*
 All five-or-more letter words should
 have their letters in reverse order.

The string argument will consist of only letters and spaces.
Words will be separated by a single space.
*/

function reverseWords(string) {
  const reverseChar = word => word.length >= 5 ? word.split('').reverse().join(''): word;
  return string.split(' ').map(reverseChar).join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"