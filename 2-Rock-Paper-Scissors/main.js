let PlayerUI = document.getElementById("player");
let rival = document.getElementById("rival");
let scorePlayer = document.getElementById("score1");
let scoreRival = document.getElementById("score2");
let totalScorePlayer = document.getElementById("totalScore1");
let totalScoreRival = document.getElementById("totalScore2");
let turnUI = document.getElementById("turn");
let result = document.getElementById("result");
let btnRestart = document.getElementById("restart");    

let turn = 0;
let scoreTurnPlayer = 0;
let scoreTurnRival = 0;
let scoreTotalPlayer = 0;
let scoreTotalRival  = 0;
const maxTurns = 3;

function results(){
    if(PlayerUI.innerHTML === rival.innerHTML){
        scoreTurnPlayer += 3;
        scoreTurnRival  += 3;
        PlayerUI.style.color = "blue";
        rival.style.color = "blue";
    }

    if(PlayerUI.innerHTML === "rock" && rival.innerHTML === "scissors"){
        scoreTurnPlayer+= 6;
        PlayerUI.style.color = "Green";
        rival.style.color = "red";
    }

    if(PlayerUI.innerHTML === "paper" && rival.innerHTML === "rock"){
        scoreTurnPlayer+= 6;
        PlayerUI.style.color = "Green";
        rival.style.color = "red";
    }

    if(PlayerUI.innerHTML === "scissors" && rival.innerHTML === "paper"){
        scoreTurnPlayer+= 6;
        PlayerUI.style.color = "Green";
        rival.style.color = "red";
    }

    if(rival.innerHTML === "rock" && PlayerUI.innerHTML === "scissors"){
        scoreTurnRival+= 6;
        PlayerUI.style.color = "red";
        rival.style.color = "Green";
    }

    if(rival.innerHTML === "paper" && PlayerUI.innerHTML === "rock"){
        scoreTurnRival+= 6;
        PlayerUI.style.color = "red";
        rival.style.color = "Green";
    }
    
    if(rival.innerHTML === "scissors" && PlayerUI.innerHTML === "paper"){
        scoreTurnRival+= 6;
        PlayerUI.style.color = "red";
        rival.style.color = "Green";
    }

    scoreTotalPlayer += scoreTurnPlayer;
    scoreTotalRival += scoreTurnRival;

    scorePlayer.innerHTML = "Score: " + scoreTurnPlayer;
    scoreRival.innerHTML = "Score: " + scoreTotalRival;

    totalScorePlayer.innerHTML = "Total Score: " + scoreTotalPlayer; 
    totalScoreRival.innerHTML = "Total Score: " + scoreTotalRival; 
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function optionRival(){
    let rand = getRndInteger(1,4);

    if(rand === 1){
        rival.innerHTML = "rock";
        scoreTurnRival++;
    }else if(rand === 2){
        rival.innerHTML = "paper";
        scoreTurnRival += 2;
    }else if(rand === 3){
        rival.innerHTML = "scissors";
        scoreTurnRival += 3;
    }
    
}

function selectOption(value){
    if(turn < maxTurns){
        turn++;
        scoreTurnPlayer = 0;
        scoreTurnRival = 0;
        turnUI.innerHTML = "Turn " + turn;
        PlayerUI.innerHTML = value;
        if(value === "rock"){
            scoreTurnPlayer++;
        }else if(value === "paper"){
            scoreTurnPlayer += 2;
        }else if(value === "scissors"){
            scoreTurnPlayer += 3;
        }
        optionRival();
        results();
        if(turn ===  maxTurns){     
            if(scoreTotalPlayer > scoreTotalRival){
                result.innerHTML = "You Win";
            }else if(scoreTotalRival > scoreTotalPlayer){
                result.innerHTML = "You Lose";
            }else{
                result.innerHTML = "Draw";
            }
            btnRestart.style.visibility = "visible";
        }
    }
}
    
function restart(){
    btnRestart.style.visibility = "hidden";
    turn = 0;
    scoreTotalPlayer = 0;
    scoreTotalRival = 0;

    turnUI.innerHTML = "Turn " + 1;
    totalScorePlayer.innerHTML = "Total Score: "+ scoreTotalPlayer;
    totalScoreRival.innerHTML = "Total Score: "+ scoreTotalRival;
    PlayerUI.innerHTML = "";
    rival.innerHTML = "";
    scorePlayer.innerHTML = "Score: " + scoreTotalPlayer; 
    scoreRival.innerHTML = "Score: " + scoreTotalRival; 
    result.innerHTML = "";
}
