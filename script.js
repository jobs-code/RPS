// func to generate computer choice
function getComputerChoice(){
    let val = Math.floor(Math.random() * 10 / 2)

    if (val < 2) {
        return "rock"
    }else if (val > 2) {
        return "paper"
    }else {
        return "scissor"
    }
}
// func to get user input
function getHumanChoice(){
    let val = prompt("Enter your input (rock, paper, scissor)");

    return val.toLowerCase()

}

// vars to store both players scores
let humanScore = 0;
let computerScore = 0;

//func to check who wins and add scores
function playRound(hc, cc){
    if (hc == "rock" && cc == "scissor"){
        console.log("You won! rock beats scissor");
        humanScore += 1
    }else if (hc == "scissor" && cc == "rock"){
        console.log("You lose! rock beats scissor");
        computerScore += 1
    }
    else if (hc == "scissor" && cc == "paper"){
        console.log("You won! scissor beats paper");
        humanScore += 1
    }
    else if (hc == "paper" && cc == "scissor"){
        console.log("You lose! scissor beats paper");
        computerScore += 1
    }
    else if (hc == "paper" && cc == "rock"){
        console.log("You won! paper beats rock");
        humanScore += 1
    }
    else if (hc == "rock" && cc == "paper"){
        console.log("You lose! paper beats rock");
        computerScore += 1
    }
    else{
        console.log("It's a tie!!");
    }

}
// func to start each round
function playGame(){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}
// loop to invoke finction 5 times
for(let i = 0; i < 5; i++){
    console.log(`Round ${i+1}`)
    
    playGame();
    
}
console.log(humanScore, computerScore);

if (humanScore == computerScore){
    console.log("Tie!!!");
}
else if (humanScore > computerScore){
    console.log("You won!!!");
}
else {
    console.log("Computer won!!!")
}