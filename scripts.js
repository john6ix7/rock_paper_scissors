const rockBut = document.querySelector('.rock');
const paperBut = document.querySelector('.paper');
const scissorsBut = document.querySelector('.scissors');
const outcome = document.querySelector('.outcome')
const user = document.querySelector('.user')
const comp = document.querySelector('.comp')
const winner = document.querySelector('.winner')



function getComputerChoice() { 
    let ranNum = Math.floor((Math.random() * 3)+ 1); // generates a random number between 1 and 3

    if (ranNum == 1){
        return ("rock");

    }else if(ranNum == 2) {
        return ("paper");
    }
    else {
        return ("scissors");
    } 
}

let compScore = 0;
let userScore = 0;

function playRound(playerSelection , computerSelection) { 

    computerSelection = getComputerChoice();

    if (playerSelection == "paper" && computerSelection == "rock" ) {
        userScore += 1;
        result.innerText = `You win! ${playerSelection} beats rock`;
        outcome.appendChild(result);
        scoreUser.innerText = `User score: ${userScore}`;
        user.appendChild(scoreUser);
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        compScore += 1;
        result.innerText = `You lose! paper beats ${playerSelection}`;
        outcome.appendChild(result);
        scoreComp.innerText = `Computer score: ${compScore}`;
        comp.appendChild(scoreComp);
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        userScore += 1;
        result.innerText = `You win! ${playerSelection} beats paper`;
        outcome.appendChild(result);
        scoreUser.innerText = `User score: ${userScore}`;
        user.appendChild(scoreUser);
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        compScore += 1;
        result.innerText= `You lose! scissors beats ${playerSelection} `;
        outcome.appendChild(result);
        scoreComp.innerText = `Computer score: ${compScore}`;
        comp.appendChild(scoreComp);
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        userScore += 1;
        result.innerText= `You win! ${playerSelection} beats scissors`;
        outcome.appendChild(result);
        scoreUser.innerText = `User score: ${userScore}`;
        user.appendChild(scoreUser);
    }else if (playerSelection == "scissors" && computerSelection == "rock") {
        compScore += 1;
        result.innerText= `You lose! rock beats ${playerSelection} `;
        outcome.appendChild(result);
        scoreComp.innerText = `Computer score: ${compScore}`;
        comp.appendChild(scoreComp);
    } else {
        result.innerText = 'Draw!';
        outcome.appendChild(result);
    }
} 

rockBut.addEventListener('click', () =>{
    const computerSelection =  getComputerChoice();
    const playerSelection = 'rock';
    if (userScore < 5 && compScore < 5) {
        playRound(playerSelection, computerSelection);
    } 
    if (userScore == 5){
        win.innerText = "Congratulation! You win the game.";
        winner.appendChild(win);
    } else if (compScore == 5) { 
        win.innerText = "Unlucky, you've lost the game.";
        winner.appendChild(win);
    }
})


paperBut.addEventListener('click', () => {
    const computerSelection =  getComputerChoice();
    const playerSelection = 'paper';
    if (userScore < 5 && compScore < 5) {
        playRound(playerSelection, computerSelection);  
    } 
    if (userScore == 5){
        win.innerText = "Congratulation! You win the game.";
        winner.appendChild(win);
    } else if (compScore == 5) { 
        win.innerText = "Unlucky, you've lost the game.";
        winner.appendChild(win);
    }  
})

scissorsBut.addEventListener('click', () => {
    const computerSelection =  getComputerChoice();
    const playerSelection = 'scissors';
    if (userScore < 5 && compScore < 5) {
        playRound(playerSelection, computerSelection); 
    }
    if (userScore == 5){
        win.innerText = "Congratulation! You win the game.";
        winner.appendChild(win);
    } else if (compScore == 5) { 
        win.innerText = "Unlucky, you've lost the game.";
        winner.appendChild(win);
    }
})

const result = document.createElement('p'); 
result.style.cssText = 'border: 1px solid black; width: 200px; text-align: center';

const scoreUser = document.createElement('p');
scoreUser.innerText = `User score: ${userScore}`;
user.appendChild(scoreUser);
const scoreComp = document.createElement('p');
scoreComp.innerText = `Computer score: ${compScore}`;
comp.appendChild(scoreComp);

const win = document.createElement('p');
win.style.cssText = 'border: 1px solid black; width: 200px; text-align: center';



/*function game() { 
    for (let i = 0;i < 5;i++){
        playRound(playerSelection, computerSelection);
     } 
    if (userScore > compScore){
        console.log("You win the game!");
    } else if (compScore > userScore) {
        console.log("You lose the game!");
    } else {
        console.log("Tie!");
    }
}
 game() */

 /*if (userScore == 5){
            win.innerText = "Congratulation!, you win the game.";
            winner.appendChild(win);
        } else if (compScore == 5) { 
            win.innerText = "Unlucky, you've lost the game.";
            winner.appendChild(win);
        } */
 