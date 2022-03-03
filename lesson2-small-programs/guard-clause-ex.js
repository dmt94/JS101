// function lowerInitial(word) {
//   if (word.length === 0) {       // If word contains an empty String,
//     return '-';                  // return a dash instead of proceeding.
//   }

//   return word[0].toLowerCase();  // word is guaranteed to have at least
// }                                // 1 character, so word[0] never evaluates
//                                  // as undefined.
// console.log(lowerInitial(''));
// console.log(lowerInitial('I AM SCREAMING'));

//inserts a new element to an Array in its proper alphabetically sorted position
//assume that the elements within the 'countries' array are all formatted like so:

let countries = ['Australia', 'Cuba', 'Senegal'];

function alphaInsert(arr, country) {
  if (Array.isArray(arr) && (arr.length === 0)) {
    arr.push(country);
    return arr;
  }
  else if (arr.includes(country)) {
    return `INVALID: Already in the database`;
  }
  else {
    for (let c of arr) {
      if (country[0] > c[0] && arr.indexOf(c) === (arr.length - 1)) {
        arr.push(country);
      }
      else if (country[0] <= c[0]) {
        arr.splice(arr.indexOf(c), 0, country);
      }
      else continue;
      return arr;
    }
  }
}


console.log(alphaInsert(countries, 'Brazil'));

console.log(alphaInsert(countries, 'Taiwan'));
console.log(alphaInsert(countries, 'Canada'));
console.log(alphaInsert(countries, 'Zimbabwe'));
console.log(alphaInsert(countries, 'Zimbabwe'));

console.log(alphaInsert([], 'Finland'));

