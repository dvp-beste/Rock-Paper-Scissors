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
    if (playerSelection === "Rock") {
        if (computerSelection === "Rock") {
            return "Draw!";
        } else if (computerSelection === "Paper") {
            return "You Lose! Paper beats Rock";
        } else {
            return "You Win! Rock beats Scissors";
        }
    }
    if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return "You Win! Paper beats Rock";
        } else if (computerSelection === "Paper") {
            return "Draw!";
        } else {
            return "You Lose! Scissors beats Paper";
        }
    }
    if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection === "Paper") {
            return "You Win! Scissors beats Paper";
        } else {
            return "Draw!";
        }
    }
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 1; i < 6; i++) {
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
}
