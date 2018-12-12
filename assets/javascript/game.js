 // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
 var randomArray = ["Superman", "Batman", "The Flash", "Martian Man Hunter", "Wonder Woman"];
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

     // Randomly generates a word from the array.
     function randomWordGen(){
        var randomWord = randomArray[Math.floor(Math.random() * randomArray.length)];
        return randomWord;
        //console.log(randomWord);
     }  

     function compareWords(randomWord){
         for (i=0; i<randomWord.length; i++){
             console.log(randomWord[i]);
         }
     }
     var rand = randomWordGen();

     compareWords(rand);
        // for (i=0; i<randomWord.length; i++){
        //     if (userGuess===randomWord[i]){
        //         console.log(randomWord);
        //         //guessCount++;
        //     }
        //     else {
        //         guesses.push(userGuess);
        //         console.log(randomWord);
        //         //guessCount++;
        //     }
        // }
         // Hide the directions
         directions.textContent = "";

         // Display the user and computer guesses, and wins/losses/ties.
        //  userGuess.textContent = "You chose: " + guesses;
        //  winsText.textContent = "wins: " + wins;
    //  }
 };