let computerScore = 0;
let playerScore = 0;
let draws = 0;

function playGame() {
    const playerSelection = prompt('Make your choice!').toLowerCase();
    const computerChoice = getComputerChoice();
    console.log(playRound(playerSelection, computerChoice));
    const score = `Computer: ${computerScore}, Player: ${playerScore}, Draws: ${draws}`;
    return score;
}

function playRound(playerSelection, computerChoice) {
    let result = '';
    if (computerChoice === 'rock') {
        if (playerSelection === 'rock') {
            result = 'Draw!';
            draws++;
        } else if (playerSelection === 'paper') {
            result = `You Win! ${playerSelection} beats ${computerChoice}!`;
            playerScore++;
        } else {
            result = `You Lose! ${computerChoice} beats ${playerSelection}!`;
            computerScore++;
        };
    } else if (computerChoice === 'paper') {
        if (playerSelection === 'rock') {
            result = `You Lose! ${computerChoice} beats ${playerSelection}!`;
            computerScore++;
        } else if (playerSelection === 'paper') {
            result = 'Draw!';
            draws++
        } else {
            result = `You Win! ${playerSelection} beats ${computerChoice}!`;
            playerScore++;
        };
    } else if (computerChoice === 'scissors') {
        if (playerSelection === 'rock') {
            result = `You Win! ${playerSelection} beats ${computerChoice}!`;
            playerScore++;
        } else if (playerSelection === 'paper') {
            result = `You Lose! ${computerChoice} beats ${playerSelection}!`;
            computerScore++;
        } else {
            result = 'Draw!';
            draws++
        };
    }
    return result;
}

function getComputerChoice() {
    let randomNumber = Math.random();
    let result = '';
    if (randomNumber <= 0.33) {
        result = 'rock';
    } else if (randomNumber > 0.33 && randomNumber < 0.66) {
        result = 'paper';
    } else {
        result = 'scissors';
    }
    return result;
}

const rockButton = document.querySelector('.js-button-rock');
const paperButton = document.querySelector('.js-button-paper');
const scissorsButton = document.querySelector('.js-button-scissors');

rockButton.addEventListener('click', () => {
    console.log(playRound('rock', getComputerChoice()));
});

paperButton.addEventListener('click', () => {
    console.log(playRound('paper', getComputerChoice()));
});

scissorsButton.addEventListener('click', () => {
    console.log(playRound('scissors', getComputerChoice()));
});