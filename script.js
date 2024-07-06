



function getComputerChoice(){
    let computerchoise=Math.floor(Math.random()*3);
    if (computerchoise===0){
        return "Rook"
    }else if (computerchoise===1){
        return "Paper"
    }else{
        return "Scissors"
    }
}


function getHumanChoice(){
    let humanchoice= prompt("enter your choice Rook or Paper or Scissors ");
    if(humanchoice==="Rook"|| humanchoice==="rook"){
        return "Rook"
    }else if(humanchoice==="Paper"|| humanchoice==="paper"){
        return "Paper"
    }else if (humanchoice==="Scissors"|| humanchoice==="scissors"){
        return "Scissors"
    }else{
        return 0
    }
}

let statusVar;
let computerscore=0;
let humanScore = 0;
document.addEventListener("DOMContentLoaded", function() {
    updateScores(); // Initialize the displayed scores
});
function updateScores() {
    let scoreElement = document.getElementById("score");
    let score1Element = document.getElementById("score1");
    let statusElement= document.getElementById("status");
    if (scoreElement && score1Element) {
        scoreElement.textContent = humanScore;
        score1Element.textContent = computerscore;
        statusElement.textContent= statusVar;
    } else {
        console.error("Score elements not found");
    }
}


function playRound(){
let humanchoice=getHumanChoice();
let computerchoise=getComputerChoice();
console.log(humanchoice);
console.log(computerchoise);

if(humanchoice==="Rook"&& computerchoise==="Scissors"|| humanchoice==="Scissors"&&computerchoise==="Paper"||humanchoice==="Paper"&&computerchoise==="Rook"){
    humanScore+=1;
    statusVar="You Win"
}else if(humanchoice==="Scissors"&& computerchoise==="Rook"|| humanchoice==="Paper"&&computerchoise==="Scissors"||humanchoice==="Rook"&&computerchoise==="Paper"){
    computerscore+=1;
    statusVar="You Lose"
}else{
    statusVar="tie"
}
updateScores();

}
