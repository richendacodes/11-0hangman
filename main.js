var Word = require("./word.js");
var prompt = require("prompt");


prompt.start();

  var game = function() {
    this.guessesRemaining = 10;
    this.wordBank = ["cat", "hog", "pig", "hat", "pie", "rye", "ran", "can", "bye"];

      function getWord(choiceIndex) {
        for ( var i = 0; i < this.wordBank.length; i++) {
          if (i = choiceIndex) {
            this.wordBank[i];
            console.log(this.wordBank[i]);
            break };
      } // end getWord

 var choiceIndex = Math.floor((Math.random() * 8) + 1);
      // theselectedWord = new getWord(this.wordBank[choiceIndex - 1]);



    this.selectedWord = getWord(choiceIndex) ;
    console.log(this.selectedWord);

    startGame = function(wrd) {
      var Word = this.selectedWord;
      this.selectedWord.getLets();
      keepPromptingUser();
    } // end startGame

    function KeepPromptingUser () {
      var self = this

      prompt.start();

        var arg1 = "guessLetter"
        var findHowManyOfUserGuess = this.selectedWord.checkIfLetterFound(result.guessLetter);

      prompt.get(['arg1', function(err, result){
        console.log("The Letter or space you guessed is " + result.guessLetter);
      }]), function (err, result) {

        if (findHowManyOfUserGuess === 0) {
          console.log("You guessed wrong!");
          guessesRemaining -1 ;
        } else  {
          console.log("You guessed right!");
          guessWord = guessWord + arg1;
          console.log(guessWord)
          // Check if user won the game
          // Compare to length of word??
          } if (this.selectedWord.didWeFindTheWord() = true) {
            console.log("You won!!");
            return;
          } // end if
        }; // end if
      }
        console.log("Guesses remaining: " + guessesRemaining);
        // console.log( this.selectedWord.wordRender() )

        var guessWord = "";


        if (guessesRemaining > 0 && guessWord.length < this.selectedWord.length) {
          keepPromptingUser();
           
        if (guessesRemaining === 0) {
          console.log("Game over, bro. The word was " + this.selectedWord);
        } else {
          console.log(this.wordRender(this.selectedWord));
        }; // end if
      }
        } // end function

    } // end KeepPromptingUser

    startGame();

  } // end game


startGame();