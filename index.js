let Word = require('./Word.js');
let inquirer = require('inquirer');

let wordsArray = ['titanic', 'mississippi', 'california', 'galaxy'];
let wonGame = false;
let numGuesses = 10;

//Set the word to a random word; 
let index = Math.floor(Math.random() * wordsArray.length); 


//Create the word object
let wordToGuess = new Word(wordsArray[index]);
wordToGuess.setWord();



console.log("Orig word after picked: " + wordsArray[index]);
console.log("Word after being set: " + wordToGuess.originalWord);

displayCurrentWord();
getUserGuess();


function getUserGuess(){
    if (numGuesses > 0 || !wonGame){

        inquirer.prompt([{
            name: 'letter',
            type: 'input',
            message: 'Guess a letter: ',
        }]).then(answer => {
            console.log(`You guessed: ${answer.letter}`);

            if(wordToGuess.checkGuess(answer.letter)){
                console.log
                (`Correct!!
                Guesses left: ${numGuesses}
                ${displayCurrentWord()}`);
              
                // displayCurrentWord();
            }
            else{
                console.log("Incorrect Guess");
                console.log("Guesses left: " + numGuesses);
                displayCurrentWord();
                numGuesses--;
            }
            getUserGuess();
        });
    }
}


function displayCurrentWord(){
    console.log(wordToGuess.displayCurrentGuesses());
}