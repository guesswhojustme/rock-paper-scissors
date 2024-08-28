let humanScore = 0;
let computerScore = 0;



const rockCompBtn = document.getElementById('comp-rock');
const scissorsComptBtn = document.getElementById('comp-scissors');
const papersCompBtn = document.getElementById('comp-papers');

function getComputerChoice(choice){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1){
        rockCompBtn.setAttribute("class", "active");
        setTimeout(function() {
            rockCompBtn.classList.remove("active");
        }, 500);
        return choice = "rock"
    } else if (randomNumber === 2){
        papersCompBtn.setAttribute("class", "active");
        setTimeout(function() {
            papersCompBtn.classList.remove("active");
        }, 500);
        return choice = "papers"
    } else if (randomNumber === 3){
        scissorsComptBtn.setAttribute("class", "active");
        setTimeout(function() {
            scissorsComptBtn.classList.remove("active");
        }, 500);
        return choice = "scissors"
    }

};

const result = document.getElementById('result');
const humanScores = document.getElementById("human-score-div");
const computerScores = document.getElementById("comp-score-div");


function announce(){
    if(humanScore === 5){
        result.textContent = "YOU WON THE GAME!";
        setTimeout(function() {
            location.reload();
        }, 2000);
    }else if (computerScore === 5){
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
                humanScores.textContent = `score: ${++humanScore}`;
            } else if (computerSelection === "papers") {
                result.textContent = "You lose! Paper beats rock!";
                computerScores.textContent = `score: ${++computerScore}`;
} 
    announce();
};

function paperChoice(){
    const computerSelection = getComputerChoice();

    if(computerSelection === "papers"){
        result.textContent = "its a tie!";
        } else if (computerSelection === "rock") {
            result.textContent = "You win! Paper beats rock!";
            humanScores.textContent = `score: ${++humanScore}`;
        } else if (computerSelection === "scissors") {
            result.textContent = "You lose! Scissors beat paper!";
            computerScores.textContent = `score: ${++computerScore}`;
}
    announce();
};

function scissorsChoice(){
    const computerSelection = getComputerChoice();

    if(computerSelection === "scissors"){
        result.textContent = "its a tie!";
        } else if (computerSelection === "papers") {
            result.textContent = "You win! Scissors beat paper!";
            humanScores.textContent = `score: ${++humanScore}`;
        } else if (computerSelection === "rock") {
            result.textContent = "You lose! Rock beats scissors!";
            computerScores.textContent = `score: ${++computerScore}`;
}
    announce();
};


const paperBtn = document.getElementById('papers');
paperBtn.addEventListener('click', paperChoice);

const scissorsBtn = document.getElementById('scissors');
scissorsBtn.addEventListener('click', scissorsChoice);

const rockBtn = document.getElementById('rock');
rockBtn.addEventListener('click', rockChoice);
