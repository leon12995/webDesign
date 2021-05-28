const player1Btn  = document.getElementById("btn1");
const player2Btn  = document.getElementById("btn2");
const resetBtn  = document.getElementById("btn3");
const score = document.getElementById("score");
const matchPoint = document.getElementById("matchPoint");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
let player1Score = 0;
let player2Score = 0;
let isGameOver = false;

player1Btn.addEventListener("click", ()=>{
    if(!isGameOver){
        player1Score ++;
    }
    showScore();
    whoWins();
})

player2Btn.addEventListener("click", ()=>{
    if(!isGameOver){
        player2Score ++;
    }
    showScore();
    whoWins();
})

resetBtn.addEventListener("click", ()=>{
    ResetScore();
    showScore();
})



const  showScore = ()=>{
    score1.textContent = player1Score;
    score2.textContent = player2Score;
}

const ResetScore = ()=>{
    player1Score  = 0;
    player2Score  = 0;
    score1.style.color = "black";
    score2.style.color = "black";
    isGameOver = false;
}
const whoWins = ()=>{
    if(player1Score  >=matchPoint.value){
        score1.style.color = "red";
        isGameOver = true;
    }
    else if(player2Score >=matchPoint.value ){
        score2.style.color = "red";
        isGameOver = true;
    }

}