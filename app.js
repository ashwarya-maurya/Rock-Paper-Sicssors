let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".choice");
const result = document.querySelector("#msg");
const yourScore = document.querySelector("#your-score");
const compScore = document.querySelector("#bot-score");

const drawgame = () => {
    result.innerText = "Draw! Play Again";
    result.style.backgroundColor = "#e0bbf9";
    result.style.color = "#000";
}

const showWinner = (userwin,userChoice,botChoice) =>{
    if(userwin){
        result.innerText = `You Won! Your ${userChoice} beats ${botChoice}.`;
        result.style.backgroundColor = "#9ae19d";
        result.style.color = "#fff";
    }else{
        result.innerText = `You Lose! Bot's ${botChoice} beats ${userChoice}.`;
        result.style.backgroundColor = "#e75480";
        result.style.color = "#000";
    }
}

const scoreUpdate = (userwin) =>{
    if(userwin){
        userScore++;
        yourScore.innerText = userScore;
    }else{
        botScore++;
        compScore.innerText = botScore;
    }
}

const genBotChoice = () => {
    const options = ["rock","paper","sicssors"]
    let randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const playgame = (userChoice) => {
    const botChoice = genBotChoice();
    
    if(userChoice === botChoice){
        drawgame();
    } else {
        let userwin = true

        if(userChoice === "rock"){
            userwin = botChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            userwin = botChoice === "sicssors" ? false : true;
        } else {
            userwin = botChoice === "rock" ? false : true;
        }
        showWinner(userwin,userChoice,botChoice);
        scoreUpdate(userwin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
})