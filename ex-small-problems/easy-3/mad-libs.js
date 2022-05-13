let rlSync = require('readline-sync');

function displayPrompt(partsOfSpeech) {
  console.log(`=> Enter ${partsOfSpeech}:`);
}

function invalidInput(userChoice) {
  return (userChoice.trim() === '' || /\d/.test(userChoice) || /\W/.test(userChoice));
}

function askInput() {
  let userInput = rlSync.question();

  while (invalidInput(userInput)) {
    prompt("Type a valid answer.");
    userInput = rlSync.question();
  }

  return userInput.toLowerCase();
}

function vowelOrConsonant(wordAfter) {
  if (/[aeiou]/.test(wordAfter[0].toLowerCase())) {
    return 'an';
  } else return 'a';
}


/* User Input */

displayPrompt('noun');
let noun = askInput();

displayPrompt('verb');
let verb = askInput();

displayPrompt('adjective');
let adjective = askInput();

displayPrompt('adverb');
let adverb = askInput();

displayPrompt('adjective');
let adjectiveTwo = askInput();


/* Console Output
noun = person, place, thing, idea, animal
adjective = describes nouns / description
adverb = modifies an adjective, verb, or other adverb (+ly)
verb = words that show action, occurence, state of being
*/

console.log(`There once was ${vowelOrConsonant(adjective)} ${adjective} ${noun} that loves to ${verb}. 
It's hilarious! That ${noun} ${adverb} ${verb} in such ${vowelOrConsonant(adjectiveTwo)} ${adjectiveTwo} manner.`);
