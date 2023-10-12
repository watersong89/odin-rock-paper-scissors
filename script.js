let computerChoice = getComputerChoice();
const playerSelection = prompt('Make your choice!').toLowerCase;

function getComputerChoice() {
    let randomNumber = Math.random();
    let result = '';
    if(randomNumber <= 0.33) {
        result = 'rock';
    } else if (randomNumber > 0.33 && randomNumber < 0.66) {
        result = 'paper';
    } else {
        result = 'scissors';
    }
    return result;
}

function playRound(playerSelection, computerChoice) {
    let result = '';
    if (computerChoice === 'rock') {
        if (playerSelection === 'rock') {
            result = 'Draw!';
        } else if (playerSelection === 'paper') {
            result = 'You Win! Paper beats Rock!';
        } else {
            result = 'You Lose! Rock beats Scissors!';
        };
    }else if (computerChoice === 'paper') {
        if (playerSelection === 'rock') {
            result = 'You lose! Paper beats Rock!';
        } else if (playerSelection === 'paper') {
            result = 'Draw!';
        } else {
            result = 'You Win! Scissors beat Paper!';
        };
    }else if (computerChoice === 'scissors') {
        if (playerSelection === 'sock') {
            result = 'You Win! Rock beats Scissors!';
        } else if (playerSelection === 'paper') {
            result = 'You lose! Scissors beat Paper!';
        } else {
            result = 'Draw';
        }; 
    }
    return result;
}

console.log(playRound(playerSelection, computerChoice));
