// ask the user to choose and returns the answer
function getPlayerChoice() {

    do {     
        answer = prompt('choose {"rock", "paper", "scissors"}').toLowerCase();
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
