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
    if (computerSelection == "paper" && playerSelection) {
        return ("You Lose! Paper beats Rock");
    } else if (computerSelection == "scissors" && playerSelection){
        return ("You win! scissors beats Rock");
    } else {
        return ("draw")
    }

}

const playerSelection = "rock"; // constant choice by player but could also be a prompt 
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));