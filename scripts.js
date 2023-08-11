//this is the main part of the program
function main(){
    // // get the name of the player
    let round_number = 1;    
    const name_input = document.querySelector("button.submit-name");
    const form_name_input = document.querySelector(".name-container");

    let player_name = "player";
    let play_has_name = false;

    name_input.addEventListener("click", () => {

        player_name = document.querySelector('[data-input="name"]').value;    
        // if user puts a valid name
        if (player_name != "" && player_name.replace(/\s/g, '') != "") 
            // remove the name form
            form_name_input.remove();
            // and now the player has a name
            play_has_name = true;
            // play -------------------------------------------------------------
            if (num_of_rounds_set && play_has_name && round_number <= num_of_rounds){
                
                const title = document.querySelector("h1.main_header");

                const player_screen_score = document.querySelector("h2.score.player");
                const computer_screen_score = document.querySelector("h2.score.computer");

                const status = document.querySelector("#status");

                let player_score = 0,
                    Computer_score = 0;
                
                let player_choice, Computer_choice;    
                
                // play until all rounds are finished
                
                
                player_choice = "";

                    // get the choices of the players 

                const choices_container = document.querySelector(".img-container");

                choices_container.addEventListener("click", function get_name(e) {
                    
                    if (round_number <= num_of_rounds){
                        round_number++
                        player_choice = e.target.className;

                        if (player_choice != ""){

                            Computer_choice = getComputerChoice();

                            // show the choices
                            
                            // console.log(`${name}:${player_choice}\ncomputer:${Computer_choice}`)
                            
                            // add the scores in condetion of a tie
                            if (player_choice === Computer_choice) {
                                // alert("TIE!!");
                                status.textContent = `${player_name} choose ${player_choice} computer choose ${Computer_choice}\nit's a TIE!!`;
                            }
                                // add the scores in condetion of the player won
                            else if((player_choice === "rock" && Computer_choice === "scissors") || (player_choice === "scissors" && Computer_choice === "paper") || (player_choice === "paper" && Computer_choice === "rock")) {
                                player_score++;
                                status.textContent = `${player_name} choose ${player_choice} computer choose ${Computer_choice}\n${player_name} WON!!`;
                            }
                                // add the scores in condetion of the computer won
                            else {
                                Computer_score++;
                                status.textContent = `${player_name} choose ${player_choice} computer choose ${Computer_choice}\nthe computer WON!!`;
                            }
                            
                            // show the scores after the round
                            player_screen_score.textContent = `${player_name}'s score: ${player_score}`;
                            computer_screen_score.textContent = `computer's score; ${Computer_score}`;

                            if (round_number > num_of_rounds) {
                                
                                const winner_header = document.querySelector("#winner-header");

                                if (player_score > Computer_score){
                                    winner_header.textContent = `\n${player_name} is the WINNER!`;
                                }    
                                else if (player_score < Computer_score){
                                    winner_header.textContent = `\nthe computer is the WINNER!`;
                                }
                                else {
                                    winner_header.textContent = "\nTIE! there is no winner";
                                }      

                                const play_again = document.createElement("a");
                                const link_container = document.querySelector(".link-container");

                                play_again.setAttribute("href", "index.html");
                                play_again.textContent = "play agin?";

                                link_container.append(play_again);
                            }
                        }
                    }   
                });
            } 
    });

    // let player_name = prompt("what's your name?");
    
    // // promt the player for number of rounds
    
    const rounds_input = document.querySelector("button.submit-rounds");
    const form_rounds_input = document.querySelector(".rounds-container");

    let num_of_rounds = "3";
    let num_of_rounds_set = false;

    rounds_input.addEventListener("click", () => {

        num_of_rounds = Number(document.querySelector('[data-input="number-of-rounds"]').value);    
        // if user puts a valid number         
        if (num_of_rounds >= 2 && num_of_rounds <= 10 && Number.isInteger(num_of_rounds)) {
            // remove the rounds form
            form_rounds_input.remove();
            // the number of rounds has been set
            num_of_rounds_set = true;
            // play -------------------------------------------------------------
            if (num_of_rounds_set && play_has_name && round_number <= num_of_rounds){
                
                const title = document.querySelector("h1.main_header");

                const player_screen_score = document.querySelector("h2.score.player");
                const computer_screen_score = document.querySelector("h2.score.computer");

                const status = document.querySelector("#status");

                let player_score = 0,
                    Computer_score = 0;
                
                let player_choice, Computer_choice;    
                
                // play until all rounds are finished
                
                
                player_choice = "";

                    // get the choices of the players 

                const choices_container = document.querySelector(".img-container");

                choices_container.addEventListener("click", function get_name(e) {
                    
                    if (round_number <= num_of_rounds){
                        round_number++
                        player_choice = e.target.className;

                        if (player_choice != ""){

                            Computer_choice = getComputerChoice();

                            // show the choices
                            
                            // console.log(`${name}:${player_choice}\ncomputer:${Computer_choice}`)
                            
                            // add the scores in condetion of a tie
                            if (player_choice === Computer_choice) {
                                // alert("TIE!!");
                                status.textContent = `${player_name} choose ${player_choice} computer choose ${Computer_choice}\nit's a TIE!!`;
                            }
                                // add the scores in condetion of the player won
                            else if((player_choice === "rock" && Computer_choice === "scissors") || (player_choice === "scissors" && Computer_choice === "paper") || (player_choice === "paper" && Computer_choice === "rock")) {
                                player_score++;
                                status.textContent = `${player_name} choose ${player_choice} computer choose ${Computer_choice}\n${player_name} WON!!`;
                            }
                                // add the scores in condetion of the computer won
                            else {
                                Computer_score++;
                                status.textContent = `${player_name} choose ${player_choice} computer choose ${Computer_choice}\nthe computer WON!!`;
                            }
                            
                            // show the scores after the round
                            player_screen_score.textContent = `${player_name}'s score: ${player_score}`;
                            computer_screen_score.textContent = `computer's score; ${Computer_score}`;
                        
                        
                            if (round_number > num_of_rounds) {
                                
                                const winner_header = document.querySelector("#winner-header");

                                if (player_score > Computer_score){
                                    winner_header.textContent += `\n${player_name} is the WINNER!`;
                                }    
                                else if (player_score < Computer_score){
                                    winner_header.textContent += `\nthe computer is the WINNER!`;
                                }
                                else {
                                    winner_header.textContent += "\nTIE! there is no winner";
                                }    

                                const play_again = document.createElement("a");
                                const link_container = document.querySelector(".link-container");

                                play_again.setAttribute("href", "index.html");
                                play_again.textContent = "play agin?";

                                link_container.append(play_again);
                            }
                        
                        
                        }
                    }   
                });
            }
        }else {
            alert("please write a positive intger from 2 to 10!");
        }

    });

}


// chooses random value between rock paper scissors
function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

main();

