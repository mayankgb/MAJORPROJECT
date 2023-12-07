let gameSeq = [];
let userSeq = [];
let btns = ["yellow","red","purple","green"];
let started = false;
let level = 0 ;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        started = true;
        console.log("game started");
        levelup();
    }
    

});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
} ;

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
} ;

function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randomIdx = Math.floor(Math.random()*3);
    let randomcolor = btns[randomIdx];
    let radbtn = document.querySelector(`.${randomcolor}`);
    gameSeq.push(randomcolor);
    btnFlash(radbtn);
};

function checkAns(idx){
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length==gameSeq.length){
             setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerText=`Game is over your score is ${level} press any key to start` ;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout( function()
        {document.querySelector("body").style.backgroundColor="white"}
        ,150);
         reset();
    }

}

function btnpress(){
    let btn = this
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
};

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
};

function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level =0;
}