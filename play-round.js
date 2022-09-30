let result = "";
let playerSelection = "";
let computerSelection = "";

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button.id);
    playerSelection = button.id;
    game();
  });
});

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let selector = Math.floor(Math.random() * 3);
  let choice = choices[selector];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  // playerSelection = "rock";
  computerSelection = getComputerChoice();
  let playerSelectionLowercase = playerSelection.toLowerCase();
  let computerSelectionLowercase = computerSelection.toLowerCase();
  console.log("You chose: " + playerSelection);
  console.log("Computer chose: " + computerSelection);
  if (playerSelectionLowercase === computerSelectionLowercase) {
    result = "Tie";
    return result;
  } else if (
      (playerSelectionLowercase === "rock" && computerSelectionLowercase === "paper") ||
      (playerSelectionLowercase === "paper" && computerSelectionLowercase === "scissors") ||
      (playerSelectionLowercase === "scissors" && computerSelectionLowercase === "rock")
  ) {
      result = "Lost";
      return result;
  } else {
      result = "Win";
      return result;
  } 
}

function game() {
  
  let playerWin = 0;
  let computerWin = 0;
  for (i = 0; i < 1; i++) {
    playRound(playerSelection, computerSelection);
    if (result === "Tie") {
      console.log("It's a tie!");
    } else if (result === "Lost") {
        console.log("You lost!");
        computerWin += 1;
    } else if (result === "Win") {
        console.log("You won!");
        playerWin +=1;
    }
  }
  if (computerWin > playerWin) {
    console.log("You have lost the game");
  } else {
    console.log(`You won the game! You won ${playerWin} out of 5 rounds.`);
  }
}

// game();