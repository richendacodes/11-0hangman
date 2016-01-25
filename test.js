  console.log("start here")

  var game = function() {
    this.wordBank = ["cat", "hog", "pig", "hat", "pie", "rye", "ran", "can", "bye"];
    this.guessesRemaining = 10;
    this.currentWrd = null ;
    // this.returnWord = function() {

  console.log("and here")

      var choiceIndex = Math.floor((Math.random() * 8) + 1);

      this.hi = function(wrd) {
        console.log("hi")
      }

  console.log(choiceIndex)

      // theCurrentWrd = new getWord(choiceIndex);
      // console.log(theCurrentWrd)

        // console.log(choiceIndex)
        for ( var i = 0; i < this.wordBank.length; i++) {
          if (i = choiceIndex) {
            this.wordBank[i];
            console.log(this.wordBank[i]);
            break;
          } // end if
        } // end for
        hi();
}
game();