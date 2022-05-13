/*
Write a function that takes 2 arguments (word, string of text)
and returns an integer representing the number of times
the word appears in the text
*/

function searchWord(word, search) {
  return search.split(' ').filter(text => text.toLowerCase() === word).length;
}


const someText = 'goose oh goose i\'m so happy to be a goose';

console.log(searchWord('goose', someText));

//regex

function searchWord2(word, text) {
  const regex = new RegExp(word, 'gi');
  const matches = text.match(regex);

  return matches ? matches.length : 0;
}