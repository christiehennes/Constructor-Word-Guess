let Word = require('./Word.js');

let wordsArray = ['Titanic', 'Mississippi', 'California', 'Galaxy'];

//Set the word to a random word; 
let index = Math.floor(Math.random() * wordsArray.length); 
let wordToGuess = new Word(wordsArray[index]);
wordToGuess.setWord();


console.log("Orig word after picked: " + wordsArray[index]);
console.log("Word after being set: " + wordToGuess.originalWord);

displayCurrentWord();








function displayCurrentWord(){
    console.log(wordToGuess.displayCurrentGuesses());
}