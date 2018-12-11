 // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
 var randomArray = ["rock", "paper", "scissors"];
 //console.log(randomWords.length);
 var guesses = [];

 // Creating variables to hold the number of wins, losses, and ties. They start at 0.
 var wins = 0;
 var guessCount = 0;

 // Create variables that hold references to the places in the HTML where we want to display things.
//  var directionsText = document.getElementById("directions-text");
 var randomWords = document.getElementById("randomWord");
 var wins = document.getElementById("wins");
 var guessCount = document.getElementById("guessCount");

 // This function is run whenever the user presses a key.
 document.onkeyup = function (event) {

     // Determines which key was pressed.
     var userGuess = event.key;

     // Randomly chooses a choice from the options array. This is the Computer's guess.
     var randomWord = randomArray[Math.floor(Math.random() * randomArray.length)];

     // Reworked our code from last step to use "else if" instead of lots of if statements.

     // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
     console.log(randomWord);
    //  while (guessCount < 11){
    //     for (i=0; i<randomWord.length; i++){
    //         if (userGuess===randomWord[i]){
    //             console.log(randomWord);
    //             //guessCount++;
    //         }
    //         else {
    //             guesses.push(userGuess);
    //             console.log(randomWord);
    //             //guessCount++;
    //         }
    //     }
    //  }
    //  if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

    //      if (userGuess === "r" && computerGuess === "s") {
    //          wins++;
    //      }
    //      if (userGuess === "s" && computerGuess === "p") {
    //          wins++;
    //      }
    //      if (userGuess === "p" && computerGuess === "r") {
    //          wins++;
    //      } else if (userGuess === computerGuess) {
    //          ties++;
    //      } else {
    //          losses++;
    //      }

         // Hide the directions
         directions.textContent = "";

         // Display the user and computer guesses, and wins/losses/ties.
        //  userGuess.textContent = "You chose: " + guesses;
        //  winsText.textContent = "wins: " + wins;
    //  }
 };