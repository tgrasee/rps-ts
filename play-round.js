let result = "";
const playerSelection = "";

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];

  let selector = Math.floor(Math.random() * 3);
//   console.log(selector);

  let choice = choices[selector];
//   console.log(choice);

  return choice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Rock, Paper, or Scissors?");
  console.log(playerSelection);
  let playerSelectionLowercase = playerSelection.toLowerCase();
  let computerSelectionLowercase = computerSelection.toLowerCase();
  console.log("Player lowercase:" + playerSelectionLowercase);
  console.log("Computer lowercase:" + computerSelectionLowercase);
  if (playerSelectionLowercase == computerSelectionLowercase) {
    result = "Tie";
    return result;
  } else if (
      (playerSelectionLowercase == "rock" && computerSelectionLowercase == "paper") ||
      (playerSelectionLowercase == "paper" && computerSelectionLowercase == "scissors") ||
      (playerSelectionLowercase == "scissors" && computerSelectionLowercase == "rock")
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
  for (i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection)
    if (result == "Tie") {
      console.log("It's a tie!");
    } else if (result == "Lost") {
        console.log("Computer won");
        computerWin += 1;
    } else if (result == "Win") {
        console.log("You won!");
        playerWin +=1;
    }
  }
  if (computerWin > playerWin) {
    console.log("You have lost the game");
  } else {
      console.log("You won the game!");
  }
}

// const playerSelection = prompt("Rock, Paper, or Scissors?");
// console.log("Player:" + playerSelection);
const computerSelection = getComputerChoice();
// console.log("Computer:" + computerSelection);
// console.log(playRound(playerSelection, computerSelection));
game();
