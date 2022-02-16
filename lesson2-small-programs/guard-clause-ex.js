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
let countries = ['Australia', 'Belgium', 'Japan', 'Spain'];

//BUGGY -- fix later
function alphaInsert(array, country) {
  let countChar = country[0].toUpperCase();
  for (let i = 0; i < array.length; i++) {
    let firstChar = array[i][0]
    let element = array[i]
    if (countChar > firstChar && array.indexOf(element) !== array.length-1) {
      continue
    }
    else if (countChar > firstChar && array.indexOf(element) === array.length-1) {
      array.push(country);
      return array;
    }
    else if (countChar <= firstChar) {
      array.push(country); //pushes the element all the way to the end

      originalArray = array; //'Australia', 'Belgium' (before the splice)

      array = array.splice(i, array.length); //the last element should be in the first

      countryArray = array.splice(array.length-1);

      array = originalArray.concat(countryArray, array);

      break;
    }
  }
  return array;
}//end

console.log(alphaInsert(countries, 'Zimbabwe'));
console.log(alphaInsert(countries, 'TT')); //goes before Z
console.log(alphaInsert(countries, 'Bill')); //
console.log(alphaInsert(countries, 'Car'));
console.log(alphaInsert(countries, 'DD'));
console.log(countries);