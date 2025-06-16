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

// vars to store both players scores
let humanScore = 0;
let computerScore = 0;

// created dom element to modify

let body = document.querySelector('body');
let h3 = document.querySelector('h2');
let title = document.querySelector('p');
let stats = document.createElement('p');
let g_round = document.createElement('h5');
let result = document.createElement('p');
let winner = document.createElement('h1');


stats.textContent = `Player Score : ${humanScore}  Computer Score : ${computerScore}`;
result.textContent ='';
g_round.textContent = `Round ${0}`;
winner.textContent = '';


title.appendChild(stats);
title.appendChild(result);
h3.appendChild(g_round);
body.appendChild(winner);

body.style='align: center';




//func to check who wins and add scores
function playRound(hc, cc){
    
    if (humanScore < 5 && computerScore < 5){
        i++;
        console.log(hc,cc);
    if (hc == "rock" && cc == "scissor"){
        result.textContent = `Your input ${hc} Computer is ${cc} You won! rock beats scissor`;
        humanScore += 1;
        stats.textContent = `Player Score : ${humanScore}  Computer Score : ${computerScore}`;
    }else if (hc == "scissor" && cc == "rock"){
        result.textContent = `Your input ${hc} Computer is ${cc} You lose! rock beats scissor`;
        computerScore += 1
        stats.textContent = `Player Score : ${humanScore}  Computer Score : ${computerScore}`;
    }
    else if (hc == "scissor" && cc == "paper"){
        result.textContent = `Your input ${hc} Computer is ${cc} You won! scissor beats paper`;
        humanScore += 1
        stats.textContent = `Player Score : ${humanScore}  Computer Score : ${computerScore}`;
    }
    else if (hc == "paper" && cc == "scissor"){
        result.textContent = `Your input ${hc} Computer is ${cc} You lose! scissor beats paper`;
        computerScore += 1
        stats.textContent = `Player Score : ${humanScore}  Computer Score : ${computerScore}`;
    }
    else if (hc == "paper" && cc == "rock"){
        result.textContent = `Your input ${hc} Computer is ${cc} You won! paper beats rock`;
        humanScore += 1
        stats.textContent = `Player Score : ${humanScore}  Computer Score : ${computerScore}`;
    }
    else if (hc == "rock" && cc == "paper"){
        result.textContent = `Your input ${hc} Computer is ${cc} You lose! paper beats rock`;
        computerScore += 1
        stats.textContent = `Player Score : ${humanScore}  Computer Score : ${computerScore}`;
    }
    else{
        result.textContent = `Your input ${hc} Computer is ${cc} It's a tie!!!`;
    }
}
else{
    if (humanScore == computerScore){
        winner.textContent = 'Tie !!!';
    }
    else if (humanScore > computerScore){
        winner.textContent = 'You won !!!';
    }
    else {
        winner.textContent = 'Computer won !!!';
    }
}

}
// func to start each round
let i = 1;
function playGame(uin){
    const humanChoice =  uin;
    const computerChoice = getComputerChoice();
    g_round.textContent = `Round ${i}`;
    playRound(humanChoice, computerChoice);
    
}

// added event listener to invoke play game fnuction 
let btns = document.querySelectorAll('#buttons');
// use event delegation
btns.forEach(button =>{
    button.addEventListener('click', (e)=>{
        playGame(e.target.textContent.toLowerCase());
    })
})




