/*
Modify the wordSizes function from the
previous exercise to exclude non-letters when
determining word size.
For instance, the word size of "it's" is 3, not 4.
*/

function wordSizes(string) {
  let strArr = string.split(' ');

  const count = {};

  strArr.forEach(element => {
    element = element.replace(/\W+/g, "");
    count[element.length] = (count[element.length] || 0) + 1;
  });
  if (string === '') return {};
  return count;
}

// function wordSizes(str) {
//   if (!str.length) return {};
//   let obj = {};
//   str.split(' ').forEach(word => {
//     word = word.replace(/[^a-z]/gi, "");
//     obj[word.length] = obj.hasOwnProperty(word.length) ? obj[word.length] += 1 : 1;
//   });
//   return obj;
// }

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}