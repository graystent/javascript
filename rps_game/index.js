console.log("Welcome to Rock Paper Scissors!")

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function handleUserResponse (response){
    // Strip capitalisation/ignore caps
var response = response.toLowerCase()
    // Validate the users choice and tell them if theyve made a mistake
    if (response === 'rock' || response === 'paper' || response === 'scissors'){
        console.log("You have chosen", response);
    }   else {readline.question("Please pick from either rock, paper or scissors!\n", handleUserResponse);}

  
    // Make a random selection for comp from rps
    // Compare choices
    // Show who won
    
var compOptions = ['rock', 'paper', 'scissors'];
var compChoice = compOptions[Math.floor(Math.random()*compOptions.length)];
console.log("Computer chooses", compChoice);

    if (response === compChoice) {
        console.log("Its a draw!");
    }   else if (response === "rock" && compChoice == "paper") {
        console.log("You lose!");
    }   else if (response === "scissors" && compChoice == "rock") {
        console.log("You lose!");
    }   else if (response === "paper" && compChoice == "scissors") {
        console.log("You lose!");
    }   else if (response === "scissors" && compChoice == "paper") {
        console.log("You win!");
    }   else if (response === "paper" && compChoice == "rock") {
        console.log("You win!");
    }   else if (response === "rock" && compChoice == "scissors") {
        console.log("You win!");
    }

    readline.close;
}

readline.question("Please choose either rock, paper or scissors!\n", handleUserResponse);


