 // Creates an array that lists out all of the words
// var randomArray = ["Superman", "Batman", "Barry Allen", "Martian Man Hunter", "Wonder Woman", "Hal Jordan", "Aquaman"];
var randomArray = ["Superman", "Batman", "Flash", "Aquaman"];
//var randomArray = ["rock", "paper", "scissors"];
 var guessesArray = [];
 var dashes = [];

 // Creating variables. They start at 0.
 var wins = 0;
 var losses = 0;
 var guessCount = 0;
 var rand;

 // Create variables that hold references to the places in the HTML where we want to display things.
 var directionsText = document.getElementById("directions");
 var randomWords = document.getElementById("randomWord");
 var winsElement = document.getElementById("wins");
 var lossesElement = document.getElementById("losses");
 var guessCountElement = document.getElementById("guessCount");
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
    guessElement.textContent = "You have guessed: " + guessesArray.join(" "); //try append or add you guessed to the textContent
}

function compareWords(randomWord, userGuess){
        guesses(userGuess);
        guessCount--;
        guessCountElement.textContent = guessCount;
         
        for (var i=0; i<randomWord.length; i++){
            console.log(randomWord[i]);
           if (userGuess.toUpperCase()===randomWord[i].toUpperCase()) {
               console.log(userGuess+"  "+randomWord[i]);
               ///replace the dash with this letter
               dashes[i] = userGuess;
               randomWords.textContent = dashes.join(' ');
           }
        }
           
      
        if (guessCount == 0 ) {
            // alert('You lose');
            losses++;
            lossesElement.textContent = "Losses : " + losses;
            startGame();
            return;
        }
        if(!dashes.includes('-')){
            // alert('You win!')
            wins++;
            winsElement.textContent = "Wins : " + wins;
            startGame();
            return
        }
        
}

startGame();

function startGame(){
    dashes = [];
    guessesArray = [];
    guessElement.textContent = "You have guessed: ";
    directionsText.textContent = "Guess From the Original Justice League Members";
    guessCount = 11;
    rand = randomWordGen();
    dashDisplay(rand);
}

 // This function is run whenever the user presses a key.
 document.onkeyup = function (event) {

     // Determines which key was pressed.
     var userGuess = event.key;
     //console.log("user guess: " + userGuess);

    compareWords(rand, userGuess);
   

    directionsText.textContent = "Guess From the Original Justice League Members";

         // Display the user and computer guesses, and wins/losses/ties.
        //  userGuess.textContent = "You chose: " + guesses;
        //  winsText.textContent = "wins: " + wins;
    //  }
 };