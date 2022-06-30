const roundResult = document.querySelector('#RoundResult');
const playerScore = document.querySelector('#PlayerScore');
const computerScore = document.querySelector('#ComputerScore');
const gameResult = document.querySelector('#GameResult');
const newGameButton = document.querySelector('#NewGame');
const playerChoice = document.querySelector('#PlayerChoice');
const computerChoice = document.querySelector('#ComputerChoice');



let playerPoints = 0;
let computerPoints = 0;
playerScore.textContent = playerPoints;
computerScore.textContent = computerPoints;

function startNewGame() {
    playerPoints = 0;
    computerPoints = 0;
    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;
    computerChoice.textContent = '-';
    playerChoice.textContent = '-';
    roundResult.textContent ='-';
    gameResult.textContent = '-';
}

newGameButton.addEventListener('click', startNewGame);

function computerPlay() {
    let randomInteger = Math.floor(Math.random()*3);
    if (randomInteger === 0) {
        return "Rock";
    } else if (randomInteger === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

    computerChoice.textContent = computerSelection;
    playerChoice.textContent = playerSelection;

    const isDraw = playerSelection === computerSelection;

    if (isDraw) {
        return "Draw";
    }    

    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return "You Lose! Paper beats Rock";
        } else {
            return "You Win! Rock beats Scissors";
        }
    }
    if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return "You Win! Paper beats Rock";
        } else {
            return "You Lose! Scissors beats Paper";
        }
    }
    if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            return "You Lose! Rock beats Scissors";
        } else {
            return "You Win! Scissors beats Paper";
        }
    }
}


const buttons = document.querySelectorAll('.selection');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerPoints === 5 || computerPoints === 5) {
            startNewGame();
        }
        
        roundResult.textContent = playRound(button.id, computerPlay());

        if (roundResult.textContent.includes("Win")) {
            playerPoints++;
            playerScore.textContent = playerPoints;
        } else if (roundResult.textContent.includes("Lose")) {
            computerPoints++;
            computerScore.textContent = computerPoints;
        }
        if (playerPoints === 5 || computerPoints === 5) {
             if (playerPoints === 5) {
                gameResult.setAttribute('style', 'white-space: pre;');
                gameResult.textContent = `YOU WON THE GAME! \r\n YOUR SCORE: ${playerPoints} - COMPUTER'S SCORE: ${computerPoints}`;
            } else if (computerPoints === 5) {
                gameResult.setAttribute('style', 'white-space: pre;');
                gameResult.textContent = `YOU LOST THE GAME! \r\n YOUR SCORE: ${playerPoints} - COMPUTER'S SCORE: ${computerPoints}`;
            }        
  /*           playerPoints = 0;
            computerPoints = 0;
            playerScore.textContent = playerPoints;
            computerScore.textContent = computerPoints; */
        }
       

    });
});




// button.addEventListener('click, playRound(button.id, computerPlay())
/* Passing Parameters
When passing parameter values, use an "anonymous function" that calls the specified function with the parameters:
*/

/* function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 1; i < 2; i++) {
        let roundResult = playRound(prompt(`Round ${i}. Choose Rock, Paper or Scissors`), computerPlay());
        if (roundResult.includes("Win")) {
            playerPoints++;
            console.log(`${roundResult}. You have ${playerPoints} points at round ${i}!`);
        } else if (roundResult.includes("Lose")) {
            computerPoints++;
            console.log(`${roundResult}. You have ${playerPoints} points at round ${i}!`);
        } else {
            console.log(`${roundResult}. You have ${playerPoints} points at round ${i}!`);
        }
    }
    if (playerPoints > computerPoints) {
        return "You won the game!";
    } else if (playerPoints < computerPoints) {
        return "You lost the game!";
    } else {
        return "Draw!"
    }
} */

//console.log(game());