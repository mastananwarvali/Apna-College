let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let h3=document.querySelector("h3");
const colors=["yellow","blue","red","green"];

document.addEventListener("keypress",function(){

    if(started==false){
        console.log("Game started")
        started=true;
        levelUp();
    }
});

function levelUp(){
    userSeq.length=0;
    level++;
    h3.innerText=`level ${level}`

    //random number
    let rnum=Math.floor(Math.random()*3);
    let color=colors[rnum];
    let gameCurrentColor=document.querySelector(`.${color}`);
    gameFlash(gameCurrentColor);
    gameSeq.push(color);
}

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}
function userFlash(){
    let btn=this;
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },150);
    let userChoice=btn.classList[1];
    userSeq.push(userChoice);
    checkSequence(userSeq.length-1);
}

let btns=document.querySelectorAll(".colors");

for(btn of btns){
    btn.addEventListener("click",userFlash);
}

function checkSequence(n){
    if(userSeq[n]==gameSeq[n]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        alert(`Game over...Score is ${level-1}`);
        resetGame();
    }
}

function resetGame(){
    userSeq.length=0;
    gameSeq.length=0;
    level=0;
    h3.innerText="Press any key to start the game";
    started=false;
}