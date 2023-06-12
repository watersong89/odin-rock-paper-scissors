

//This function randomly gets the computer's choice for play
function getComputerChoice() {
    const items = ["rock", "paper", "scissors"];
    var rand = items[~~(Math.random() * items.length)];
    return(rand);    
}

console.log(getComputerChoice());

// var playerChoice = prompt("Rock, Paper or Scissors?")

function playRound(playerChoice, getComputerChoice) {
    if(playerChoice == getComputerChoice) {
        return('Tie')
    }
    else if(playerChoice == 'rock') {
        if(getComputerChoice == 'paper') {
            return('Computer Won')
        }
        else {
            return('Player Won')
        }
    }
    else if(playerChoice == 'scissors') {
        if(getComputerChoice == 'rock') {
            return('Computer Won')
        }
        else {
            return('Player Won')
        }
    }
    else if(playerChoice == 'paper') {
        if(getComputerChoice == 'scissors') {
            return('Computer Won')
        }
        else {
            return('Player Won')
        }
    }
}

var playerChoice = prompt("Rock, Paper or Scissors");
const computerSelection = getComputerChoice();
console.log(playRound(playerChoice, computerSelection));
