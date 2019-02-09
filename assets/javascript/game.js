var possibleWords = ["shame", "dragon", "mountain", "daenerys", "lannister", "throne", "dothraki", "direwolf", "littlefinger", "longclaw", "baratheon", "targaryen", "wildling", "whitewalker", "hodor", "winterfell"];
var totalWins = 0;
var lettersGuessed = "";
var activeWord = "";
var remainingGuesses = 8;
var progressWord = [];
var resetLetters = "";
var AllChars = [];
var gameOver = false;
for (var i=97; i<123; i++)
    AllChars.push(String.fromCharCode(i));
    
document.onkeyup = function(event) {

// Wins: (# of times user guessed the word correctly).
function wins () {
    document.getElementById("wins-total").innerHTML = totalWins++;
};
console.log(totalWins)
// If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
var randomWord = possibleWords[Math.floor(Math.random() * (possibleWords.length))];

for (i = 0; i < randomWord.length; i++) {
    progressWord.push("_");
};
document.getElementById("current-word").innerHTML = progressWord.join(" ");

console.log(randomWord)
}
// // As the user guesses the correct letters, reveal them: m a d o _  _ a.
// // if correct guess, display in randomWord
//     //else, put into the alreadyGuessed div in an appended? array
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
}

// // Number of Guesses Remaining: (# of guesses remaining for the user).
//     //make this remainingGuesses minus 1
document.getElementById("guesses-remaining").innerHTML = remainingGuesses;

// // Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).

var lettersGuessed = event.key;




// After the user wins/loses the win screen appears in the left column,
document.getElementById("wins-total").innerHTML = totalWins;


//  then the game should automatically choose another word and make the user play it.






