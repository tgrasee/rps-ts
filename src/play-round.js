function game() {
    var playerScore = 0;
    var computerScore = 0;
    var moves = 0;
    var result = document.querySelector('.results');
    var playerOptions = document.querySelectorAll('button'); //Array.from()
    function playRound() {
        var computerChoices = ["Rock", "Paper", "Scissors"];
        playerOptions.forEach(function (button) {
            button.addEventListener('click', function () {
                moves++;
                // const btnSelected:string = button.id;
                var selector = Math.floor(Math.random() * 3);
                var computerChoice = computerChoices[selector];
                winner(button.id, computerChoice);
                if (moves == 5) {
                    gameOver(); //playerOptions
                }
            });
        });
    }
    function winner(player, computer) {
        var playerSelectionLowercase = player.toLowerCase();
        var computerSelectionLowercase = computer.toLowerCase();
        var playerScoreBoard = document.querySelector('.playerCount');
        var computerScoreBoard = document.querySelector('.computerCount');
        if (playerSelectionLowercase === computerSelectionLowercase) {
            var tie = document.createElement('p');
            tie.classList.add('tie');
            tie.textContent = "It's a tie!";
            result === null || result === void 0 ? void 0 : result.appendChild(tie);
        }
        else if ((playerSelectionLowercase === "rock" && computerSelectionLowercase === "paper") ||
            (playerSelectionLowercase === "paper" && computerSelectionLowercase === "scissors") ||
            (playerSelectionLowercase === "scissors" && computerSelectionLowercase === "rock")) {
            var lost = document.createElement('p');
            lost.classList.add('lost');
            lost.textContent = "You lost!";
            result === null || result === void 0 ? void 0 : result.appendChild(lost);
            computerScore++;
            computerScoreBoard === null || computerScoreBoard === void 0 ? void 0 : computerScoreBoard.replaceWith(computerScore.toString());
        }
        else {
            var won = document.createElement('p');
            won.classList.add('won');
            won.textContent = "You won!";
            result === null || result === void 0 ? void 0 : result.appendChild(won);
            playerScore++;
            playerScoreBoard === null || playerScoreBoard === void 0 ? void 0 : playerScoreBoard.replaceWith(playerScore.toString());
        }
    }
    function gameOver() {
        var restart = document.createElement('button');
        var restartBtn = document.createTextNode('Restart');
        var btnContainer = document.querySelector('.buttons');
        restart.appendChild(restartBtn);
        while (btnContainer === null || btnContainer === void 0 ? void 0 : btnContainer.firstChild) {
            btnContainer.removeChild(btnContainer.firstChild);
        }
        // playerOptions.forEach(option => {
        //   option.style.display = 'none';
        // })
        if (computerScore == playerScore) {
            var tieGame = document.createElement('p');
            tieGame.classList.add('tieGame');
            tieGame.textContent = "Tie game!";
            result === null || result === void 0 ? void 0 : result.appendChild(tieGame);
        }
        else if (computerScore > playerScore) {
            var lostGame = document.createElement('p');
            lostGame.classList.add('lostGame');
            lostGame.textContent = "You lost the game!";
            result === null || result === void 0 ? void 0 : result.appendChild(lostGame);
        }
        else {
            var wonGame = document.createElement('p');
            wonGame.classList.add('wonGame');
            wonGame.textContent = "You won the game!";
            result === null || result === void 0 ? void 0 : result.appendChild(wonGame);
        }
        restart.className = 'restartBtn';
        btnContainer === null || btnContainer === void 0 ? void 0 : btnContainer.appendChild(restart);
        restart.addEventListener('click', function () {
            window.location.reload();
        });
    }
    playRound();
}
game();
