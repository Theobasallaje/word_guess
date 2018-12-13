 // Creates an array that lists out all of the words
//  var randomArray = ["Superman", "Batman", "The Flash", "Martian Man Hunter", "Wonder Woman"];
 var randomArray = ["rock", "paper", "scissors"];
 var guessesArray = [];
 var dashes = [];

 // Creating variables. They start at 0.
 var wins = 0;
 var guessCount = 0;

 // Create variables that hold references to the places in the HTML where we want to display things.
 var directionsText = document.getElementById("directions");
 var randomWords = document.getElementById("randomWord");
 var wins = document.getElementById("wins");
 var guessCount = document.getElementById("guessCount");
 var guessElement = document.getElementById("userGuess");

     // Randomly generates a word from the array.
function randomWordGen(){
        var randomWord = randomArray[Math.floor(Math.random() * randomArray.length)];
        return randomWord;
        //console.log(randomWord);
}

function dashDisplay(randomWord){
    //var dashes = "";
    for (var i=0; i<randomWord.length; i++){
        dashes.push("-");
        //dashes += "-";
   }
   randomWords.textContent = dashes.join(' ');
}

function guesses(userGuess){
    guessesArray.push(userGuess);
    console.log(guessesArray);
    guessElement.textContent = guessesArray.join(" "); //try append or add you guessed to the textContent
}

function compareWords(randomWord, userGuess){
        for (var i=0; i<randomWord.length; i++){
            console.log(randomWord[i]);
           if (userGuess===randomWord[i]){
               console.log(userGuess+"  "+randomWord[i]);
               ///replace the dash with this letter
               dashes[i] = userGuess;
               randomWords.textContent = dashes.join(' ');
           }
        }
}

var rand = randomWordGen();
dashDisplay(rand);

 // This function is run whenever the user presses a key.
 document.onkeyup = function (event) {

     // Determines which key was pressed.
     var userGuess = event.key;
     console.log("user guess: " + userGuess);

    compareWords(rand, userGuess);
    guesses(userGuess);

    directionsText.textContent = "";

         // Display the user and computer guesses, and wins/losses/ties.
        //  userGuess.textContent = "You chose: " + guesses;
        //  winsText.textContent = "wins: " + wins;
    //  }
 };