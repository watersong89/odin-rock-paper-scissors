let computerChoice;

function getComputerChoice() {
    let randomNumber = Math.random();
    if(randomNumber <= 0.33) {
        computerChoice = 'Rock';
    } else if (randomNumber > 0.33 && randomNumber < 0.66) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }
    return computerChoice;
}

function playRound(playerSelection, computerChoice) {


}

console.log(getComputerChoice();)