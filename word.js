var Letter = require("./letter.js");
module.exports = Word;

function Word (wrd) {
  this.word = wrd;
  this.lets = [];
  this.found = false;
  this.getlets = function() {
    for (var i = 0; i < this.word.length; i++) {  
      this.lets.push(new Letter(wrd[i]));
    } // end for loop
  } // end getlets
  
  this.checkIfLetterFound = function(guessletter) {
    var whatToReturn = 0;
    for (var i = 0; i < this.lets.length; i++) {
      if (this.lets[i].charac === guessLetter) {
        this.lets[i].appear = true;
        checkIfLetterFound ++;
        return checkIfLetterFound;
      }  // end if 
    }; // end for loop 
  } // end checkifletterfound

  function didWeFindTheWord() {
    lets.every( function(curlets){
      if (curlets.appear === true) {
        this.found = true;
      };
    }
      ) // end .every argument function
      {
        return this.found;
    } // end .every
  } // end didWeFindTheWord
  
  function wordRender(){
    var str = ("");

    for (var i = 0; i < this.let.length; i++) {
      letterRender(let[i]);
      letString = letString + this.lets[i].letterRender();
      this.str = letString;
    } // end for

  } //end wordRender

} // end Word
