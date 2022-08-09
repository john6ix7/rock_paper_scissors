function getComputerChoice() {
    let ranNum = Math.floor((Math.random() * 3)+ 1); // generates a random number between 1 and 3

    if (ranNum == 1){
        return ("rock");

    }else if(ranNum == 2) {
        return ("paper")
    }
    else {
        return ("scissors")
    } 
}

let compScore = 0;
let userScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("choose: 'rock', 'paper' or 'scissors' ");
    computerSelection = getComputerChoice();

    if (playerSelection == "paper" && computerSelection == "rock" ) {
        userScore += 1;
        return ("You win! Paper beats Rock");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        compScore += 1;
        return ("You lose! Paper beats Rock");
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        userScore += 1;
        return ("You win! scissors beats paper");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        compScore += 1;
        return ("You lose! scissors beats paper");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        userScore += 1;
        return ("You win! rock beats scissors");
    }else if (playerSelection == "scissors" && computerSelection == "rock") {
        compScore += 1;
        return ("You lose! rock beats scissors");
    } else {
        userScore += 1;
        compScore += 1;
        return ("draw")
    }
} 


function game() {
    for (let i = 0;i < 5;i++){
       playRound();
       console.log("User score: " + userScore + " Computer score: " + compScore);
    }
    if (userScore > compScore){
        console.log("You win the game!")
    } else if (compScore > userScore) {
        console.log("You lose the game!")
    } else {
        console.log("Tie!")
    }
}
 game()
