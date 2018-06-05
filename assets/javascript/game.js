// Variables //

var wins = 0; 
var losses = 0; 
var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // Store the vales that the system will pick random
var guess = 9; 
var chain = ""; 

function status() {
    document.getElementById("wins").innerHTML = "Wins: " + wins; 
    document.getElementById("losses").innerHTML = "Losses: " + losses;  
    document.getElementById("guesses").innerHTML = "Guesses Left: " + guess; 
    document.getElementById("chain").innerHTML = "Your guesses so far: " + chain;
}

// Game will reset without refresing page //
function reset() {
    guess = 9; 
    chain = "";  
}

// When the user clicks on the keyboard //
document.onkeyup = function (event) {

    if (event.keyCode < 65 || event.keyCode > 90)  
        alert("Only letters a-z are valid in the game. Try Again.");

    else {
        var userInput = event.key.toLowerCase(); 
        var pyschic = abc[Math.floor(Math.random() * abc.length)]; 

        guess -= 1; 
        chain += userInput + ", ";  
        status();

        if (pyschic === userInput) { 
            wins++; 
            reset();
            status();
        }
        else if (guess === 0) { 
            losses++; 
            reset();
            status();
        }
    }
}