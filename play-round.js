let result = "";

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];

  let selector = Math.floor(Math.random() * 3);
//   console.log(selector);

  let choice = choices[selector];
//   console.log(choice);

  return choice;
}

function playRound(playerSelection, computerSelection) {
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
      result = "Won";
      return result;
  }
    
}

function game() {
    for (i = 0; i < 5; i++) {
      playRound(playerSelection, computerSelection)
      if (result == "Tie") {
        
      }
    }
}

const playerSelection = "paper";
console.log("Player:" + playerSelection);
const computerSelection = getComputerChoice();
console.log("Computer:" + computerSelection);
console.log(playRound(playerSelection, computerSelection));