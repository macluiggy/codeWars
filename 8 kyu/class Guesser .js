class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if (this.lives <= 0) {
    	// statement
    	throw Error;
    }
    this.lives--;
    return this.number == n;
  }
}