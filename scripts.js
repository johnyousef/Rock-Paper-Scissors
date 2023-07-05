//this is the main part of the program
function main(){
 


}

// ask the user to choose the number of rounds and returns the answer
function getNumberOfRounds() {
    do {
        // asks the user for a number 
        answer = prompt('type how many rounds u want to play');
        //if the answer was not an integer type to the user "type a number please"
        if (!(Number.isInteger(answer))){
            console.log("type a number please");
        }
    }
    while (!(answer.isInteger()))
}

// ask the user to choose between rock paper scissors and returns the answer
function getPlayerChoice() {
    do {
        // asks the user to choose     
        answer = prompt('choose {"rock", "paper", "scissors"}').toLowerCase();
        //if the answer was not in {"rock", "paper", "scissors"} type to the user "type one of the options please"
        if (!(Number.isInteger(answer))){
            console.log("type one of the options please");
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

