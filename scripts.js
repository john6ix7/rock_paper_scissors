function getComputerChoice() {
    let ranNum = Math.floor((Math.random() * 3)+ 1); // generates a random number between 1 and 3

    console.log(ranNum); // Makes sure a random number is being matched to the string returned

    if (ranNum == 1){
        return ("rock");

    }else if(ranNum == 2) {
        return ("paper")
    }
    else {
        return ("scissors")
    } // conditional statement compares random number generated to specified value and returns string if true 
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "paper" && computerSelection == "rock" ) {
        return ("You win! Paper beats Rock");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return ("You lose! Paper beats Rock");
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        return ("You win! scissors beats paper");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return ("You lose! scissors beats paper");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return ("You win! rock beats scissors");
    }else if (playerSelection == "scissors" && computerSelection == "rock") {
        return ("You lose! rock beats scissors");
    } else {
        return ("draw")
    }

}

const playerSelection = prompt("choose: 'rock', 'paper' or 'scissor' ");// constant choice by player but could also be a prompt 
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));