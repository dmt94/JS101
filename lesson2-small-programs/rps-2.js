const readline = require('readline-sync'); 
VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
             (choice === 'paper' && computerChoice === 'scissors') ||
             (choice === 'scissors' && computerChoice === 'rock')) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}

let replay;
do {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("Sorry. Not a valid choice.");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You choice ${choice}. Computer chose ${computerChoice}.`);

  displayWinner(choice, computerChoice);

  prompt("Would you like to play again? (y/n)");
  replay = readline.question().toLowerCase();

  while(replay[0] !== 'y' && replay[0] !== 'n') {
    prompt("Please enter 'y' or 'n'");
    replay = readline.question().toLowerCase();
  }
} while (replay[0] === 'y');
