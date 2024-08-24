let humanScore = 1;
let computerScore = 1;

function getComputerChoice(choice){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1){
        return choice = "rock"
    } else if (randomNumber === 2){
        return choice = "papers"
    } else if (randomNumber === 3){
        return choice = "scissors"
    }
};

const result = document.getElementById('result');
const humanScores = document.getElementById("human-score");
const computerScores = document.getElementById("computer-score");


function announce(){
    if(humanScore === 6){
        result.textContent = "YOU WON THE GAME!";
        setTimeout(function() {
            location.reload();
        }, 2000);
    }else if (computerScore === 6){
        result.textContent = "COMPUTER WINS!";
        setTimeout(function() {
            location.reload();
        }, 2000);
    }
}

function rockChoice(){
    const computerSelection = getComputerChoice();

   if(computerSelection === "rock") {
                result.textContent = "its a tie!";
            } else if (computerSelection === 'scissors') {
                result.textContent = "You win! Rock beats scissors!";  
                humanScores.textContent = `${humanScore++}`;
            } else if (computerSelection === "papers") {
                result.textContent = "You lose! Paper beats rock!";
                computerScores.textContent = `${computerScore++}`;
} 
    announce();
};

function paperChoice(){
    const computerSelection = getComputerChoice();

    if(computerSelection === "papers"){
        result.textContent = "its a tie!";
        } else if (computerSelection === "rock") {
            result.textContent = "You win! Paper beats rock!";
            humanScores.textContent = `${humanScore++}`;
        } else if (computerSelection === "scissors") {
            result.textContent = "You lose! Scissors beat paper!";
            computerScores.textContent = `${computerScore++}`;
}
    announce();
};

function scissorsChoice(){
    const computerSelection = getComputerChoice();

    if(computerSelection === "scissors"){
        result.textContent = "its a tie!";
        } else if (computerSelection === "papers") {
            result.textContent = "You win! Scissors beat paper!";
            humanScores.textContent = `${humanScore++}`;
        } else if (computerSelection === "rock") {
            result.textContent = "You lose! Rock beats scissors!";
            computerScores.textContent = `${computerScore++}`;
}
    announce();
};



const paperBtn = document.getElementById('papers');
paperBtn.addEventListener('click', paperChoice);

const scissorsBtn = document.getElementById('scissors');
scissorsBtn.addEventListener('click', scissorsChoice);

const rockBtn = document.getElementById('rock');
rockBtn.addEventListener('click', rockChoice);
