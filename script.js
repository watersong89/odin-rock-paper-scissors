

//This function randomly gets the computer's choice for play
function getComputerChoice() {
    const items = ["Rock", "Paper", "Scissors"];
    var rand = items[~~(Math.random() * items.length)];
    return(rand);    
}

console.log(getComputerChoice());
