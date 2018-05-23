const allEnemies = [];

class Entities {
  constructor(x = 0,y = 0) {
    this.origin
    this.destination
    this.x = x;
    this.y = y;
    this.sprite;
  }
}

// Enemies our player must avoid
class Enemy extends Entities {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    constructor(x,y) {
      super(x,y);
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
  }
  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
      // You should multiply any movement by the dt parameter
      // which will ensure the game runs at the same speed for
      // all computers.
  };
  // Draw the enemy on the screen, required method for game
  render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };
};


class Player extends Entities {
  constructor(x,y) {
    super(x,y);
    this.x = 200;
    this.y = 380;
    this.sprite = 'images/char-boy.png';
  }
  update(){

  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput() {

  }

}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
const enemy1 = new Enemy();
const enemy2 = new Enemy();
const enemy3 = new Enemy();
const enemy4 = new Enemy();
const enemy5 = new Enemy();
const enemy6 = new Enemy();

allEnemies.push(enemy1);
allEnemies.push(enemy2);
allEnemies.push(enemy3);
allEnemies.push(enemy4);
allEnemies.push(enemy5);
allEnemies.push(enemy6);

const player = new Player(1,1);
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
