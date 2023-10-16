//Buttons
const newGameBtn = document.querySelector('.newGame');
const rollDiceBtn = document.querySelector('.rollDice');
const holdBtn = document.querySelector('.hold');

//boxes
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const score1 = document.querySelector('.score1');
const score2 = document.querySelector('.score2')

//current scores
const currentScore1 = document.querySelector('.currentScore1');
const currentScore2 = document.querySelector('.currentScore2');

//img
const die = document.querySelector('.die');

//functions
let currentScore = 0;
let player1 = true;
let player2 = false;
let random;
let scorep1 = 0;
let scorep2 = 0;

const rollDice = function() {
    random = Math.trunc(Math.random() * 6 + 1);
    die.src = "img/dice-" + random + ".png";
    die.style.display = "flex";
    currentScore += random;
    addScore();
    
}
const addScore = function(){
    if (random != 1){
        if(player1 === true){
        currentScore1.innerHTML = currentScore;
        }
        if(player2 === true){
        currentScore2.innerHTML = currentScore;
        }
    }
   
    else{
        if(player1){
            diceIs1(player1)
        }
        else if(player2){
            diceIs1(player2)
        }
    }
}

const diceIs1 = function(player){
    if (player === player1){
        player1 = false;
        player2 = true;
        currentScore1.innerHTML = 0;
    }
    else if (player === player2){
        player2 = false;
        player1 = true;
        currentScore2.innerHTML = 0;
    }
    currentScore = 0;
    switchPlayers()
}

const holdScore = function(){
    if(player1){
        scorep1 += currentScore;
        score1.innerHTML = scorep1;
        player1 = false;
        player2 = true;
        currentScore = 0;
        currentScore1.innerHTML = 0;
        if(scorep1 >= 100){
            winner(player1);
        }
        switchPlayers()
        
    }
    else if(player2){
        scorep2 += currentScore;
        score2.innerHTML = scorep2;
        player1 = true;
        player2 = false;
        currentScore = 0;
        currentScore2.innerHTML = 0;
        if(scorep2 >= 100){
            winner(player2);
        }
        switchPlayers()
    }
}

const switchPlayers = function(){
    if(player1){
        box1.style.opacity = "65%";
        box2.style.opacity = "50%"
    }
    else if (player2){
        box1.style.opacity = "50%";
        box2.style.opacity = "65%"
    }
}

const newGame = function(){
    player1 = true;
    player2 = false;
    box1.style.backgroundColor = "white";
    box2.style.backgroundColor = "white";
    scorep1 = 0;
    scorep2 = 0;
    score1.innerHTML = 0;
    score2.innerHTML = 0;
    currentScore1.innerHTML = 0;
    currentScore2.innerHTML = 0;
    rollDiceBtn.disabled = false;
    holdBtn.disabled = false;
    switchPlayers();
}

const winner = function(player){
    if (player === player1){
        box1.style.backgroundColor = "black";
        score1.innerHTML = "You Win!";
        score2.innerHTML = "You Lose!";
    }
    else if (player === player2){
        box2.style.backgroundColor = "black";
        score1.innerHTML = "You Lose!"
        score2.innerHTML = "You Win!"
    }
    rollDiceBtn.disabled = true;
    holdBtn.disabled = true;
}

//Events
rollDiceBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', holdScore);
newGameBtn.addEventListener('click', newGame);