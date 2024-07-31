let humanScore = 0;
let computerScore = 0;

for (i = 0; i < 5; i++){
function getComputerChoice(choice){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1){
        return choice = "rock"
    } else if (randomNumber === 2){
         return choice = "papers"
    } else if (randomNumber === 3){
        return choice = "scissors"
    }
}

function getHumanChoice(choice){
    let play = prompt("ROCK, PAPER or SCISSORS?: ").toUpperCase();
    if (play === "ROCK"){
        return choice = "rock"
    } else if (play === "PAPER"){
        return choice = "paper"
    } else if (play === "SCISSORS"){
        return choice = "scissors"
    } else {
        alert("INVALID CHOICE!");
    }
}


function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors!");
        if (computerScore > 0) {
            computerScore--;
        }
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock!");
        if (humanScore > 0) {
            humanScore--;
        }
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock!");
        if (computerScore > 0) {
            computerScore--;
        }
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beat paper!");
        if (humanScore > 0) {
            humanScore--;
        }
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat paper!");
        if (computerScore > 0) {
            computerScore--;
        }
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors!");
        if (humanScore > 0) {
            humanScore--;
        }
        computerScore++;
    }
    console.log("SCORE: You: " + humanScore + ", Computer: " + computerScore);    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

  playRound(humanSelection,computerSelection);
}

if(humanScore > computerScore){
    console.log("Congrats u won!");
}else if (humanScore === computerScore){
    console.log("its a tie!");
}else{
    console.log("u lose!");
}
