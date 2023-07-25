//this is the main part of the program
function main(){
    // get the name of the player
    let player_name = prompt("what's your name?");
    // promt the player for number of rounds
    let num_of_rounds = getNumberOfRounds();
    // play the rounds
    // scores[0] is player's score, scores[1] is computer's score 
    let scores = play(num_of_rounds, player_name);
    // tell the player the final score and who won
    
    if (scores[0] > scores[1]){
        alert(`${player_name} is the WINNER!`);
    }    
    else if (scores[0] < scores[1]){
        alert(`the computer is the WINNER!`);
    }
    else {
        alert("TIE! there is no winner");
    }    

    // ask the player if he wants to play again
    console.log("i you want to play again refresh the page");
}


function play(rounds, name) {
    let player_score = 0,
        Computer_score = 0;
    // play until all rounds are finished
    for (let i = 0; i < rounds; i++) {
        // get the choices of the players 
        let player_choice = getPlayerChoice(),
            Computer_choice = getComputerChoice();

        // show the choices
        console.log(`${name}:${player_choice}\ncomputer:${Computer_choice}`)
        // add the scores in condetion of a tie
        if (player_choice === Computer_choice) {
            alert("TIE!!");
        }
        // add the scores in condetion of the player won
        else if((player_choice === "rock" && Computer_choice === "scissors") || (player_choice === "scissors" && Computer_choice === "paper") || (player_choice === "paper" && Computer_choice === "rock")) {
            player_score++;
            alert(`${name} WON!!`);
        }
        // add the scores in condetion of the computer won
        else {
            Computer_score++;
            alert("the computer WON!!");
        }
        
        // show the scores after the round
        alert(`${name}'s score: ${player_score}\ncomputer's score: ${Computer_score}`)
    }
    // return the score of the rounds
    return [player_score, Computer_score];
}

// ask the user to choose the number of rounds and returns the answer
function getNumberOfRounds() {
    do {
        // asks the user for a number 
        answer = parseInt(prompt('type how many rounds u want to play'));
        //if the answer was not an integer type to the user "type a number please"
        if (!(Number.isInteger(answer)) || (answer <= 0)){
            alert("type a number please and that number has to be over 0");
        }
    }
    while (!(Number.isInteger(answer)) || (answer <= 0))

    return answer;
}

// ask the user to choose between rock paper scissors and returns the answer
function getPlayerChoice() {
    do {
        // asks the user to choose     
        answer = prompt('choose {"rock", "paper", "scissors"}').toLowerCase();
        //if the answer was not in {"rock", "paper", "scissors"} type to the user "type one of the options please"
        if ((answer != "rock") && (answer != "paper") && (answer != "scissors")){
            alert("type one of the options please");
        }
      }
      while ((answer != "rock") && (answer != "paper") && (answer != "scissors"));

      return answer;
}

// chooses random value between rock paper scissors
function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

main();

