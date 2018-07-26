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
        });
        return curWord;
    }

    this.checkGuess = function(char){

        let charMatch = false;
        lettersArray.forEach(function(currentChar){

            // console.log("word.checkguess object from lettersArray: " + currentChar.char);

            if(currentChar.char === char){
                charMatch = currentChar.checkChar(char);
                console.log("inside the word checkguess function when a letter matches")
                console.log("Does this match? " + charMatch);
            };
        });
        return charMatch;
    }

}

let lettersArray = [];

module.exports = Word;




// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)