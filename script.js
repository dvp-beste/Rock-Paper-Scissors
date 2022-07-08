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
    const randomInteger = Math.floor(Math.random()*3);
    if (randomInteger === 0) {
        return "Rock";
    } else if (randomInteger === 1) {
        return "Paper";
    }
    return "Scissors";
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
        }
        return "You Win! Rock beats Scissors";
    }

    if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return "You Win! Paper beats Rock";
        }
        return "You Lose! Scissors beats Paper";
    }

    if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            return "You Lose! Rock beats Scissors";
        }
        return "You Win! Scissors beats Paper";
    }
}

const buttons = document.querySelectorAll('.selection');
const winScore = 5;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerPoints === winScore || computerPoints === winScore) {
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
        if (playerPoints === winScore || computerPoints === winScore) {
            if (playerPoints === winScore) {
                gameResult.setAttribute('style', 'white-space: pre;');
                gameResult.textContent = `YOU WON THE GAME! \r\n YOUR SCORE: ${playerPoints} - COMPUTER'S SCORE: ${computerPoints}`;
            } else if (computerPoints === winScore) {
                gameResult.setAttribute('style', 'white-space: pre;');
                gameResult.textContent = `YOU LOST THE GAME! \r\n YOUR SCORE: ${playerPoints} - COMPUTER'S SCORE: ${computerPoints}`;
            }        
        }
    });
});