const pChoice = document.getElementById("player-choice");
const cChoice = document.getElementById("computer-choice");
const results = document.getElementById("result");
const rockBut = document.getElementById("rock-button");
const paperBut = document.getElementById("paper-button");
const scissorsBut = document.getElementById("scissors-button");
const scorescore = document.getElementById("player-score");
rockBut.addEventListener("click", () => rpsFunction("rock"));
paperBut.addEventListener("click",() => rpsFunction("paper"));
scissorsBut.addEventListener("click",() => rpsFunction("scissor"));

let comChoice = "rock";
let playerChoice = "scissor";
let score = 0;

function rpsFunction(choice){
    // computer choice
    let comChoiceMath = Math.random();
 
    if (comChoiceMath <= 0.33){
        comChoice = "paper";
        cChoice.textContent="paper";
    }
    else if (comChoiceMath >= 0.66) {
        comChoice = "scissor";
        cChoice.textContent="scissor";
    }
    else{
        comChoice = "rock";
        cChoice.textContent="rock";
    }
    //player choice
    if (choice == "rock"){
        pChoice.textContent = "rock";
        if (comChoice == "rock"){
            results.textContent = "Draw!";
            }
        else if (comChoice == "paper"){
            results.textContent = "Lose!";
        }
        else{
            results.textContent = "Winner!";
            score++;
        }
    }
     if (choice == "paper"){
        pChoice.textContent = "paper";
        if (comChoice == "rock"){
            results.textContent = "Winner!";
            score++;
            }
        else if (comChoice == "paper"){
            results.textContent = "Draw!";
        }
        else{
            results.textContent = "Lose!";
        }
    }
     if (choice == "scissor"){
        pChoice.textContent = "scissor";
        if (comChoice == "rock"){
            results.textContent = "Lose!";
            }
        else if (comChoice == "paper"){
            results.textContent = "Winner!";
            score++;
        }
        else{
            results.textContent = "Draw!";
        }
    }
    scorescore.textContent = score;
}