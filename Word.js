let Letter = require('./Letter.js');


function Word(word, array){

    this.originalWord = word;
    this.lettersArray = [];


    //Function to break apart each letter and create a new letter object
    this.setWord = function(){

        this.lettersArray = [];
        
        this.originalWord.split('').forEach((char) =>{

            let letter = new Letter(char); 
            this.lettersArray.push(letter);

        });
    }

    //Function that displays the current state of the word with letters and underscores
    this.displayCurrentGuesses = function(){

        let curWord = '';
        this.lettersArray.forEach(function(char){
            curWord += char.returnChar();
        });
        return curWord;
    }

    //Check to see if the guessed letter matches a letter in the word
    this.checkGuess = function(char){

        let charMatch = false;
        this.lettersArray.forEach(function(currentChar){

            if(currentChar.char === char){
                charMatch = currentChar.checkChar(char);
            };
        });
        return charMatch;
    }
    
    //Check to see if the entire word is solved
    this.checkIfSolved = function(){

        let isSolved = true;
        this.lettersArray.forEach(function(char){
            if (char.returnChar() === '_ ') isSolved = false;
        });
        return isSolved;

    }

}

module.exports = Word;

