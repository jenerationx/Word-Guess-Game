var possibleWords = ["shame", "dragon", "mountain", "daenerys", "lannister", "throne", "dothraki", "direwolf", "littlefinger", "longclaw", "baratheon", "targaryen", "wildling", "whitewalker", "hodor", "winterfell"];
var totalWins = 0;
var lettersGuessed = "";
var remainingGuesses = 8;
var progressWord = [];
var resetLetters = "";
var gameOver = false;
    
//reset page to a new word and clear letters guessed
function resetPage() {
lettersGuessed = [];
progressWord = [];


// If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
randomWord = possibleWords[Math.floor(Math.random() * (possibleWords.length))];
    for (i = 0; i < randomWord.length; i++) {
        progressWord.push("_");
    };
    console.log(randomWord)
    
};

function startGame() {
// Wins: (# of times user guessed the word correctly).
    document.getElementById("wins-total").innerHTML = totalWins;
    console.log(totalWins)
    // Current progress of word/letters guessed
    var progressWordText = "";
    for (i = 0; i < progressWord.length; i++) {
        progressWordText = progressWordText + progressWord[i];
    };
    document.getElementById("current-word").innerHTML = progressWordText;
    document.getElementById("already-guessed").innerHTML = lettersGuessed;
    // // Number of Guesses Remaining: (# of guesses remaining for the user).
    document.getElementById("guesses-remaining").innerHTML = remainingGuesses;
};
// // // As the user guesses the correct letters, reveal them: m a d o _  _ a.
function guessLetter(letter) {
    if (remainingGuesses > 0) {
        if (lettersGuessed.indexOf(letter) === -1) {
            lettersGuessed.push(letter);
            fillBlanks(letter);
        }
    }
};

function fillBlanks(letter) {
    var position = [];
    for (var i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === letter)
        position.push(i);
    }
    if (position.length <= 0) {
        remainingGuesses--;
    }
    else {
        for(var i = 0; i < position.length; i++)
        progressWord[position[i]] = letter}
};
// // // Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).

document.onkeyup = function(event) {
    // Check to make sure a-z was pressed.
    if(event.keyCode >= 65 && event.keyCode <= 90) {
        guessLetter(event.key.toLowerCase());
        startGame();
        youWin();
    }
    if(gameOver) {
        resetPage();
        gameOver = false;
    }};

// // After the user wins/loses the win/lose screen appears in the left column,
function youWin() {
    if(progressWord.indexOf("_") === -1) {
        totalWins++;
        gameOver = true;
        document.getElementById("winImage").style.display = "block";
    }
};
function youLose() {
    if(remainingGuesses <= 0) {
        totalWins++;
        gameOver = true;
        document.getElementById("loseImage").style.display = "block";

    }
};

// //  then the game should automatically choose another word and make the user play it.
// ***this sort-of works; if you press a letter, the game restarts, but I'm out of time to figure out how to make the 
// image re-hide upon reset and how to make the letter you press NOT be your first guess.  Also need to figure out
// why EVERY letter I guess ends up in the last div and not just the wrong ones.

