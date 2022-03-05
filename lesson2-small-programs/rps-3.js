const readline = require('readline-sync'); 
VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function greeting() {
  prompt('Welcome to KIREI\'S ROCK PAPER SCISSORS GAME. Can you beat her? ');
  console.log('(⇀‸↼‶)⊃━☆ﾟ.*･');
}

function farewellMsg() {
  prompt('Thanks for playing rock-paper-scissors!');
  console.log('Live mindfully and happily! Aishteh~ ٩(｡•́‿•̀｡)۶');
}

function userChooses() {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("Sorry. Not a valid choice.");
    choice = readline.question();
  }

  return choice;
}

function compChooses() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
}

function userWon(choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')) {
    return true
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
             (choice === 'paper' && computerChoice === 'scissors') ||
             (choice === 'scissors' && computerChoice === 'rock')) {
    return false
  }
  return 'tie';
}

function displayWinner(choice, computerChoice, whoWon) {
  prompt(`You chose ${choice}, KIREI (.❛ ᴗ ❛.) chose ${computerChoice}\n`);

  switch (whoWon) {
    case true: 
      return prompt('Fine then...you won this round bucko! #)3(#\n');
    case false:
      return prompt('You lost! HAHA! KIREI won! ᕙ(⇀‸↼‶)ᕗ\n');
    case 'tie':
      return prompt('It\'s a tie! (●´⌓`●)\n');
  }
}

function invalidAnswer(answer) {
  return answer[0] !== 'n' && answer[0] !== 'y';
}

function playAgain() {
  prompt("Do you want to play again? (y/n)");
  let again = readline.question().toLowerCase();

  while (invalidAnswer(again)) {
    prompt("Please type a valid answer: 'y' or 'n'");
    again = readline.question().toLowerCase();
  }
  return again;
}

greeting();

while(true) {
  let userChoice = userChooses();
  let compChoice = compChooses();
  let didUserWin = userWon(userChoice, compChoice);
  let displayTheWinner = displayWinner(userChoice, compChoice, didUserWin);
  let askPlayAgain = playAgain();

  if (askPlayAgain[0] === 'n') break;

  console.clear();
} 

farewellMsg();
