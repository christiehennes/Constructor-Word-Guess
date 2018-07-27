# Command Line Word Guess Game

This is a command line app built with node.js that allows the user to guess a word. Each game has 10 tries to guess the full word. 

## Instructions

* Use the command below to run the game 
* A hidden word or phrase will be displayed
* The user should enter a letter in the terminal, or enter 'exit' to leave the game 
* Each user will get 10 guesses to guess the entire word
* If you run out of guesses, the game is over and a new game starts automatically
* If you guess the word correctly, a new game will begin automatically


## Run Program

To run the game, enter the following in the console:
```node index.js```

## Game Design

* I used the inquirer npm package along with the colors npm package to give the console messages a bit of colo
* There are three files, index.js, Word.js, and Letter.js
* Both the Word.js and Letter.js files are constructors that contain variables and functions pertaining to each type of object
* The index file creates a word object which creates the corresponding letter objects 
* I used recursion and inquirer to use the user input from the command line as each guess 








