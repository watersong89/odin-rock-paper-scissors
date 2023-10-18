let computerScore = 0;
let playerScore = 0;
let draws = 0;
let scoreElement = document.querySelector('.js-score');
let messageElement = document.querySelector('.js-result-message');

function playRound(playerSelection, computerChoice) {
    let result = '';
    if (computerChoice === 'Rock') {
        if (playerSelection === 'Rock') {
            result = 'Draw!';
            draws++;
        } else if (playerSelection === 'Paper') {
            result = `You Win! ${playerSelection} beats ${computerChoice}!`;
            playerScore++;
        } else {
            result = `You Lose! ${computerChoice} beats ${playerSelection}!`;
            computerScore++;
        };
    } else if (computerChoice === 'Paper') {
        if (playerSelection === 'Rock') {
            result = `You Lose! ${computerChoice} beats ${playerSelection}!`;
            computerScore++;
        } else if (playerSelection === 'Paper') {
            result = 'Draw!';
            draws++
        } else {
            result = `You Win! ${playerSelection} beats ${computerChoice}!`;
            playerScore++;
        };
    } else if (computerChoice === 'Scissors') {
        if (playerSelection === 'Rock') {
            result = `You Win! ${playerSelection} beats ${computerChoice}!`;
            playerScore++;
        } else if (playerSelection === 'Paper') {
            result = `You Lose! ${computerChoice} beats ${playerSelection}!`;
            computerScore++;
        } else {
            result = 'Draw!';
            draws++
        };
    }
    messageElement.textContent = result;
    scoreElement.textContent = `Computer Wins: ${computerScore}, Player Wins: ${playerScore}, Draws: ${draws}`;

    if (computerScore === 5) {
        alert('You lose! Computer first to reach five!');
    } else if (playerScore === 5) {
        alert('You win! You beat the computer to five!');
    }
}

function getComputerChoice() {
    let randomNumber = Math.random();
    let result = '';
    if (randomNumber <= 0.33) {
        result = 'Rock';
    } else if (randomNumber > 0.33 && randomNumber < 0.66) {
        result = 'Paper';
    } else {
        result = 'Scissors';
    }
    return result;
}

const rockButton = document.querySelector('.js-button-rock');
const paperButton = document.querySelector('.js-button-paper');
const scissorsButton = document.querySelector('.js-button-scissors');
const resetButton = document.querySelector('.js-reset-button');

rockButton.addEventListener('click', () => {
    playRound('Rock', getComputerChoice());
});

paperButton.addEventListener('click', () => {
    playRound('Paper', getComputerChoice());
});

scissorsButton.addEventListener('click', () => {
    playRound('Scissors', getComputerChoice());
});

resetButton.addEventListener('click', () => {
    computerScore = 0;
    playerScore = 0;
    draws = 0;
    scoreElement.textContent = '';
    messageElement.textContent = '';
})