let Letter = require('./Letter.js');


function Word(word){

    this.originalWord = word;


    //Function to break apart each letter and create a new letter object
    this.setWord = function(){

        console.log("inside set word");
        
        this.originalWord.split('').forEach(function(char){

            let letter = new Letter(char); 
            lettersArray.push(letter);

        });
    }

    this.displayCurrentGuesses = function(){

        let curWord = '';
        lettersArray.forEach(function(char){
            curWord += char.returnChar();
        })
        return curWord;
    }

    this.checkGuess = function(char){
        lettersArray.forEach(function(currentChar){
            if(currentChar.char === '-') currentChar.checkChar(currentChar);
        })
    }

}

let lettersArray = [];

module.exports = Word;




// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)