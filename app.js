let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById( "p");
const scissors_div = document.getElementById( "s");

function getComputerChoise() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
 }

function win(userChoise, computerChoise) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoise_div =document.getElementById(userChoise);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =   // convertToWord(userChoise) + " beats " + convertToWord(computerChoise) + ". You win! ";
                           `${convertToWord(userChoise)}${smallUserWord} beats ${convertToWord(computerChoise)}${smallCompWord} . You win!`; 
    userChoise_div.classList.add('green-glow');
    //setTimeout(function() { userChoise_div.classList.remove('green-glow') }, 300); //es5
    setTimeout(() =>  userChoise_div.classList.remove('green-glow') , 300); //es6
}           



function lose(userChoise, computerChoise) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoise_div =document.getElementById(userChoise);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =   // convertToWord(userChoise) + " beats " + convertToWord(computerChoise) + ". You win! ";
                           `${convertToWord(userChoise)}${smallUserWord} loses to ${convertToWord(computerChoise)}${smallCompWord} . You lost...`; 
    userChoise_div.classList.add('red-glow');
    setTimeout(function() { userChoise_div.classList.remove('red-glow') }, 300);
}       


function draw(userChoise, computerChoise) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoise_div =document.getElementById(userChoise);
    result_p.innerHTML =   // convertToWord(userChoise) + " beats " + convertToWord(computerChoise) + ". You win! ";
                           `${convertToWord(userChoise)}${smallUserWord} equals ${convertToWord(computerChoise)}${smallCompWord} . It's a draw.`; 
    userChoise_div.classList.add('gray-glow');
    setTimeout(function() { userChoise_div.classList.remove('gray-glow') }, 300);
}       


function game(userChoise) {
    const computerChoise = getComputerChoise();
    switch (userChoise + computerChoise) {
        case "rs":
        case "pr":
        case "sp": 
            console.log("USER WINS.");
            win(userChoise, computerChoise);
            break;
        case "rp":
        case "ps":
        case "sr":
            console.log("USER LOSES.");
            lose(userChoise, computerChoise);
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("Its a draw.");
            draw(userChoise, computerChoise);
            break;
    }
}



function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })  // ES5

    paper_div.addEventListener('click', function() {
        game("p");
    })  //ES5

    scissors_div.addEventListener('click', () => game("s")); //ES6
}

main();