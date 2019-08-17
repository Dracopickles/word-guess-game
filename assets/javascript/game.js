
// Variables 
var monsterHunter = ["diablos","nargacuga","zinogre","deviljo","plesioth"]

// Empty variables to store for later.
var selectedWord = "";
var lettersOfWord = [];
var blanks = 0;
var blankAndCorrect = [];
var wrongGuess = [];

//Counter variables
var wins = 0;
var losses = 0;
var guessesRemaining = 11; 

// getting the game started

function Game() {
  // this is to generate a random word from array.
  selectedWord = monsterHunter[Math.floor(Math.random() * monsterHunter.length)];

  lettersOfWord = selectedWord.split("");

  blanks = lettersOfWord.length;

  for (var i = 0; i < blanks; i++){
    blankAndCorrect.push("_");
  }

  

  console.log(selectedWord);
  console.log(lettersOfWord);
  console.log(blanks);
  console.log(blankAndCorrect);
}

// Creating a reset for game

function reset() {
  guessesRemaining = 11;
  wrongGuess = [];
  blankAndCorrect = [];
  Game()
}

function checkLetters(letter){
  var letterInWord = false;

  for (var i = 0; i < blanks; i++){
    if(selectedWord[i] === letter) {
      letterInWord = true;
    }
  }

  if (letterInWord) {
    for (var i = 0; i < blanks; i++){
      if(selectedWord[i] == letter){
        blankAndCorrect[i] = letter;
      }
    }
  }

  else {
    wrongGuess.push(letter);
    guessesRemaining--;
  }
  console.log(blankAndCorrect);
}

function complete() {
  console.log("wins:" + wins + "| losses:" + losses + "| Letters Guessed Wrong:" + guessesRemaining)

  if (lettersOfWord.toString() == blankAndCorrect.toString()){
    wins++;
    reset()

    document.getElementById("win-counter").innerHTML = " " + wins;
  }
  else if (guessesRemaining === 0) {
    losses++;
    reset()
    document.getElementById("lose-counter").innerHTML = " " + losses;
   }
   document.getElementById("currentWord").innerHTML = " " + blankAndCorrect.join(" ");
   document.getElementById("guesses-remaining").innerHTML = " " + guessesRemaining;
}



Game()

document.onkeyup = function (event) {
  var guesses = String.fromCharCode(event.keyCode).toLowerCase();

  checkLetters(guesses);

  complete();

  console.log(guesses);

  document.getElementById("playerGuesses").innerHTML = " " + wrongGuess.join(" ");
}



