

function Letter (char){

    this.char = char;
    this.correctlyGuessed = false;

    //Function to return the char to be used in displaying to console 
    this.returnChar = function(){
        if (this.correctlyGuessed) return this.char;
        else if (this.char != ' ') return '_ ';
        else return ' '; //Return a space for space characters
    }

    //Function to check if the guessed char matches the char
    this.checkChar = function(letter){
        if (letter === this.char) {
            this.correctlyGuessed = true; 
            return true;
        }
        return false;
    }

}

module.exports = Letter;


