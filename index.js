let Word = require('./Word.js');
let inquirer = require('inquirer');
let colors = require('colors');

let wordsArray = ['titanic', 'mississippi', 'california', 'galaxy', 'coconut water', 'peanut butter', 'palm tree'];
let wonGame = '';
let numGuesses = '';
let index = '';
let wordToGuess = '';

initGame();

function getUserGuess(){

    //Run the game if there are still guesses left and if they didn't win the game
    if (numGuesses > 0 && !wonGame){

        inquirer.prompt([{
            name: 'letter',
            type: 'input',
            message: 'Guess a letter: ',
        }]).then(answer => {

            //Allow the user to enter the game and close the app
            if(answer.letter === 'exit') {
                console.log("\nGoodbye!\n")
                return;
            }

            //Check if the guess was correct
            if(wordToGuess.checkGuess(answer.letter)){

                displayCurrentWord();
                console.log('Correct!!\n\n'.green);

                //Check to see if the user guessed the game after each correct answer
                if(wordToGuess.checkIfSolved()){
                    wonGame = true;
                    console.log("Congrats! You won the game!".green);
                };
              
            }
            //Incorrect guess 
            else{

                numGuesses--; //Decrement the number of remaining guesses
                displayCurrentWord();
                console.log("Incorrect Guess".red);
                console.log("Guesses left: " + numGuesses+ '\n\n');
                
            }
            getUserGuess(); //Make a recursive call to get the next letter from the user
        });
    }
    else{
        if(numGuesses === 0) console.log("Sorry, you lost".red);
        initGame();
    }
}

//Function to display what the user has guessed so far
function displayCurrentWord(){
    console.log('\n' + wordToGuess.displayCurrentGuesses() + '\n\n');
}

//Function to initalize the game and choose a word
function initGame(){
    
    //Initalize game variables
    wonGame = false;
    numGuesses = 10;

    //Set the word to a random word; 
    index = Math.floor(Math.random() * wordsArray.length); 

    //Create the word object
    wordToGuess = new Word(wordsArray[index], []);
    wordToGuess.setWord();

    console.log("\n\nNew Game!\n\nEnter a letter to make a guess or type exit to quit\n");
    displayCurrentWord();
    getUserGuess();

}