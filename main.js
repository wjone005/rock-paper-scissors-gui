
        
        const Rock = "ROCK";
        const Paper = "PAPER";
        const Scissors = "SCISSORS";
        const choice = [Rock, Paper, Scissors];
        const Player = "Player";
        const Computer = "Computer";
        
        
        // Execute the game
        game()
        
        // Game consist all functions to ensure gameplay
        function game()
        {
            let playerPoints = 0;
            let computerPoints = 0;
            let tiePoints = 0;

            // buttons is a node list. It looks and acts much like an array.
            const buttons = document.querySelectorAll('button');

            // we use the .forEach method to iterate through each button
            buttons.forEach((button) => {

            // and for each one we add a 'click' listener
            button.addEventListener('click', (e) => {
                let playerSelection = button.id;
                let computerSelection = computerPlay(choice);
                playRound(button.id, computerSelection)
                
                if (playerPoints == 5 || computerPoints == 5 || tiePoints == 5){
                    
                    // Remove Rock, Paper, Scissor buttons
                    let elem = document.getElementById('container');
                        elem.remove();

                    // Provide the results
                    results()
                    
                    // Provide a reload button

                    // 1. Create the button
                    let button = document.createElement("button");
                        button.textContent = "Restart Game";

                    // 2. Append somewhere
                    let btn = document.getElementById('btn')
                        btn.appendChild(button);

                    // 3. Add event handler
                    button.addEventListener ("click", function() {
                        window.location.reload(false);
                    });
                    // Output the total points
                    totalPoints()
                    
                        } 
            });
            });
        


            // Inform user who won, lost or if it's a draw
            function results(){
            if (playerPoints > computerPoints){
                gameWinner()
            } else if (computerPoints > playerPoints){
                gameLoser()
            } else if (playerPoints == computerPoints){
                gameDraw()
            } else{
                console.log("Something went wrong");
            }
        }
        // Randomize the computers input of choice
        function computerPlay(){
            return choice[Math.floor(Math.random()*choice.length)];
        }
        

        // Compare the player's answer vs computer's and display who won
        function playRound(playerSelection, computerSelection){
            let rockWin = "You Win! ROCK beats SCISSORS. PLAYER 1 | " + playerPoints + ' Points | ' + "COMPUTER " + computerPoints + ' Points | ' + "DRAW " + tiePoints + " Points";
            let paperWin = "You Win! PAPER beats ROCK PLAYER 1 | " + playerPoints + ' Points | ' + "COMPUTER " + computerPoints + ' Points | ' + "DRAW " + tiePoints + " Points";
            let scissorsWin = "You Win! SCISSORS beats PAPER PLAYER 1 | " + playerPoints + ' Points | ' + "COMPUTER " + computerPoints + ' Points | ' + "DRAW " + tiePoints + " Points";
            let draw = "It's a Draw! PLAYER 1 | " + playerPoints + ' Points | ' + "COMPUTER " + computerPoints + ' Points | ' + "DRAW " + tiePoints + " Points";
            let loser = "You lose! " + playerSelection + " can\'t beat " + computerSelection + " PLAYER 1 | " + playerPoints + ' Points | ' + "COMPUTER " + computerPoints + ' Points | ' + "DRAW " + tiePoints + " Points";

            // Compare Human and Computer answers, output winner and add a point            
             if (playerSelection === Rock && computerSelection === Scissors){
                //console.log(rockWin)
                let paragraph = document.createElement("p");
                    paragraph.textContent = rockWin;
                    let outcome = document.getElementById('score')
                    outcome.appendChild(paragraph);
                return addPlayerPoint();
            } else if (playerSelection === Paper && computerSelection === Rock){
                console.log(paperWin)
                let paragraph = document.createElement("p");
                    paragraph.textContent = paperWin;
                    let outcome = document.getElementById('score')
                    outcome.appendChild(paragraph);
                return addPlayerPoint();
            }else if (playerSelection === Scissors && computerSelection === Paper){
                console.log(scissorsWin)
                let paragraph = document.createElement("p");
                    paragraph.textContent = scissorsWin;
                    let outcome = document.getElementById('score')
                    outcome.appendChild(paragraph);
                return addPlayerPoint();
            } else if(playerSelection === computerSelection){
                console.log(draw)
                let paragraph = document.createElement("p");
                    paragraph.textContent = draw;
                    let outcome = document.getElementById('score')
                    outcome.appendChild(paragraph);
                return addDrawPoint(); 
            } else if(computerSelection === Rock && playerSelection === Scissors) {
                console.log(loser)
                let paragraph = document.createElement("p");
                    paragraph.textContent = loser;
                    let outcome = document.getElementById('score')
                    outcome.appendChild(paragraph);
                return addComputerPoint();
            } else if(computerSelection === Scissors && playerSelection === Paper) {
                console.log(loser)
                let paragraph = document.createElement("p");
                    paragraph.textContent = loser;
                    let outcome = document.getElementById('score')
                    outcome.appendChild(paragraph);
                return addComputerPoint();
            } else if(computerSelection === Paper && playerSelection === Rock) {
                console.log(loser)
                let paragraph = document.createElement("p");
                    paragraph.textContent = loser;
                    let outcome = document.getElementById('score')
                    outcome.appendChild(paragraph);
                return addComputerPoint();
            } else {
                console.log(playerSelection, + '' + computerSelection);
            } 
        } 

        // Display Total points among everyone
        function totalPoints(){
            let paragraph = document.createElement("p");
                    paragraph.textContent = "PLAYER 1 | " + playerPoints + ' Points | ' + "COMPUTER " + computerPoints + ' Points | ' + "DRAW " + tiePoints + " Points";
                    let outcome = document.getElementById('score')
                    outcome.appendChild(paragraph);

        }

        // Display only if you won, with total points
        function gameWinner(){
        let paragraph = document.createElement("p");
                    paragraph.textContent = "Congrats You Win! Press Restart Game to play again " + "Player Score " + playerPoints + " Computer Score " + computerPoints + " Draw Score " + tiePoints;
                    let outcome = document.getElementById('score')
                    outcome.appendChild(paragraph);
        }

        // Display if you lost, with total points
        function gameLoser(){
        let paragraph = document.createElement("p");
                    paragraph.textContent = "Congrats You Lost! Press Restart Game to play again " + "Player Score " + playerPoints + " Computer Score " + computerPoints + " Draw Score " + tiePoints;
                    let outcome = document.getElementById('score')
                    outcome.appendChild(paragraph);
        }

        // Display if there's a Draw, with total points
        function gameDraw(){
            let paragraph = document.createElement("p");
                    paragraph.textContent = "Congrats It's a draw game. Press Restart Game to play again " + "Player Score " + playerPoints + " Computer Score " + computerPoints + " Draw Score " + tiePoints;
                    let outcome = document.getElementById('score')
                    outcome.appendChild(paragraph);
        }

        // Add 1 point for human player
        function addPlayerPoint(){
            ++playerPoints
        }

        // Add 1 point for computer player
        function addComputerPoint(){
            ++computerPoints
        }

        // Add 1 point for Draw
        function addDrawPoint(){
            ++tiePoints
        }

        }
        
        

        
    