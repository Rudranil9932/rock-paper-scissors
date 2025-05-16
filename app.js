let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const opetions = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return opetions[randIdx];
}

const drawGame = () => {
    // console.log("Game was draw.");
    msg.innerText = "Game Was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `you Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        computerScorePara.innerText = compscore;
        msg.innerText = `you Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice is = ", userChoice);
    const compChoice = genComputerChoice();
    console.log("comp choice is = ", compChoice);

    if(userChoice === compChoice) {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissors,paper
            userWin =  compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock, scissor
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}



choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        // console.log("Choice was clicked", userchoice);
        playGame(userchoice);
    })
})