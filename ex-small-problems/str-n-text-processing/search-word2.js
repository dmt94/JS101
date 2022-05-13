/*
To highlight a word, enclose the word with two asterisks ('**') on each side
and change every letter of the word to uppercase (e.g., '**HIGHLIGHTEDWORD**').

go through search
- split search with space between (' ')

LOOP
- for each word, if its upperCase matches with word upperCase:

  - let withHighlight = `**${word.slice(0).toUpperCase()}**`

(replacing word with updated version)

  - search.slice(search.indexOf(word), 1, withHighlight)
  - return search.join(' ');
*/

function searchWord(word, search) {
  let foundWord = `**${word.toUpperCase()}**`;
  let withHighlight = search.split(' ').map(text => {
    return text.toUpperCase() === word.toUpperCase() ? foundWord : text;
  });
  return withHighlight.join(' ');
}

const someText = 'goose oh goose i\'m so happy to be a goose';

console.log(searchWord('goose', someText));

/* With regex */

function searchWord2(word, text) {
  let regex = new RegExp(`\\b${word}\\b`, "gi");
  return text.replace(regex, `**${word.toUpperCase()}**`);
}