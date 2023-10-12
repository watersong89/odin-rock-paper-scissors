let computerChoice = getComputerChoice();
const playerSelection = 'Rock';

function getComputerChoice() {
    let randomNumber = Math.random();
    let result = '';
    if(randomNumber <= 0.33) {
        result = 'Rock';
    } else if (randomNumber > 0.33 && randomNumber < 0.66) {
        result = 'Paper';
    } else {
        result = 'Scissors';
    }
    return result;
}

function playRound(playerSelection, computerChoice) {
    let result = '';
    if (computerChoice === 'Rock') {
        if (playerSelection === 'Rock') {
            result = 'Draw!';
        } else if (playerSelection === 'Paper') {
            result = 'You Win! Paper beats Rock!';
        } else {
            result = 'You Lose! Rock beats Scissors!';
        };
    }else if (computerChoice === 'Paper') {
        if (playerSelection === 'Rock') {
            result = 'You lose! Paper beats Rock!';
        } else if (playerSelection === 'Paper') {
            result = 'Draw!';
        } else {
            result = 'You Win! Scissors beat Paper!';
        };
    }else if (computerChoice === 'Scissors') {
        if (playerSelection === 'Rock') {
            result = 'You Win! Rock beats Scissors!';
        } else if (playerSelection === 'Paper') {
            result = 'You lose! Scissors beat Paper!';
        } else {
            result = 'Draw';
        }; 
    }
    return result;
}

console.log(playRound(playerSelection, computerChoice));
