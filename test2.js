var game = function() {
  this.wordBank = ["number", "guess", "remember", "forget"];
  this.guessesRemaining = 10;
  this.currentWrd = null;
  this.startGame = function(wrd) {
    var startWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
    this.currentWrd = new Word(startWord);
    this.currentWrd.getLets();
    this.keepPromptingUser();
  }
}
game();