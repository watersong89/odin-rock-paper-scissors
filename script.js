function getComputerChoice() {
    let randomNumber = Math.random();
    let computerChoice;
    if(randomNumber <= 0.33) {
        computerChoice = 'Rock';
    } else if (randomNumber > 0.33 && randomNumber < 0.66) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }
    return computerChoice;
}



