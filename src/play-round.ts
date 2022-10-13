function game() {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;
  const result = document.querySelector('.results');
  const playerOptions = document.querySelectorAll('button'); //Array.from()

  function playRound() {
    const computerChoices = ["Rock", "Paper", "Scissors"];

    playerOptions.forEach((button) => {
      button.addEventListener('click', () => {
        moves++;
        // const btnSelected:string = button.id;
        const selector = Math.floor(Math.random() * 3);
        const computerChoice = computerChoices[selector];

        winner(button.id, computerChoice)

        if(moves == 5) {
            gameOver(); //playerOptions
        }
      });
    });
  }

  function winner(player:string, computer:string) {
    let playerSelectionLowercase = player.toLowerCase();
    let computerSelectionLowercase = computer.toLowerCase();
    let playerScoreBoard = document.querySelector('.playerCount');
    let computerScoreBoard = document.querySelector('.computerCount');

    if (playerSelectionLowercase === computerSelectionLowercase) {
      const tie = document.createElement('p');
      tie.classList.add('tie');
      tie.textContent = "It's a tie!"
      result?.appendChild(tie);
    } 
    else if (
        (playerSelectionLowercase === "rock" && computerSelectionLowercase === "paper") ||
        (playerSelectionLowercase === "paper" && computerSelectionLowercase === "scissors") ||
        (playerSelectionLowercase === "scissors" && computerSelectionLowercase === "rock")
    ) {
        const lost = document.createElement('p');
        lost.classList.add('lost');
        lost.textContent = "You lost!";
        result?.appendChild(lost);
        computerScore++;
        computerScoreBoard.innerHTML = computerScore.toString();
    } 
    else {
        const won = document.createElement('p');
        won.classList.add('won');
        won.textContent = "You won!"
        result?.appendChild(won);
        playerScore++;
        playerScoreBoard.innerHTML = playerScore.toString();// playerScoreBoard?.replaceWith(playerScore.toString());
    }
  }

  function gameOver() { //playerOptions
    const restart = document.createElement('button');
    const restartBtn = document.createTextNode('Restart');
    const btnContainer = document.querySelector('.buttons');
    restart.appendChild(restartBtn);

    while (btnContainer?.firstChild) {
      btnContainer.removeChild(btnContainer.firstChild);
    }
    // playerOptions.forEach(option => {
    //   option.style.display = 'none';
    // })
    if (computerScore == playerScore) {
      const tieGame = document.createElement('p');
      tieGame.classList.add('tieGame');
      tieGame.textContent = "Tie game!";
      result?.appendChild(tieGame);
    }
    else if (computerScore > playerScore) {
      const lostGame = document.createElement('p');
      lostGame.classList.add('lostGame');
      lostGame.textContent = "You lost the game!";
      result?.appendChild(lostGame);
    }
    else {
        const wonGame = document.createElement('p');
        wonGame.classList.add('wonGame');
        wonGame.textContent = "You won the game!";
        result?.appendChild(wonGame);
    }
    restart.className = 'restartBtn';
    btnContainer?.appendChild(restart);
    restart.addEventListener('click', () => {
      window.location.reload();
    })
  }

  playRound();
}

game();