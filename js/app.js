const box_width = 101;
const box_height = 83;
const allEnemies = [];
let victory = 0;

/**
  * General class that give its basic characteristics to all the objects that
  * can move and interact
  **/

class Entities {
  constructor(x = 0,y = 50) {
    this.destination;
    this.x = x;
    this.y = y;
    this.sprite ='';
  }
}

// Enemies our player must avoid. They are entities in the game and thus the
// class extends the Entities class
class Enemy extends Entities {
    /** Variables applied to each of our instances go here,
      * we've provided one for you to get started
      **/
    constructor(x,y) {
      super(x,y);
      this.speed = 1 + 2*(Math.random());
      this.destination = 500;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    this.sprite = 'images/enemy-bug.png';
  }

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
    update(dt) {

      // Multipying movements with the dt will ensure the game runs at the same
      // speed for all computers.

      // Make the enemies move if they have not finished their course
      if (this.x < this.destination){

      //We set the movement speed

      this.x += this.speed*80*dt;

      //If an enemy has reached the end of its path, make it start anew from a
      // random point on the x-axis and y-axis so that enemies arrive on
      // different rows and at different moments.
    } else {
      this.x = -Math.floor(Math.random()*1500);
      this.y = 50 + Math.floor(Math.random()*3)*box_height;
    }

  }
  // Draw the enemy on the screen, required method for game
  render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// The class that determines the characteristics of the player. It extends
// Entities.

class Player extends Entities {
  constructor(x,y) {
    super(x,y);

    // Defines the starting position of the player

    this.x = 200;
    this.y = 380;

    // Sets the default aspect of hte player to a boy.

    this.sprite = 'images/char-boy.png';
  }

  // Updates the position and status of the player.

  update(dt){

  }

  // Displays the image of the player.
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  // Handles the commands from the player to move the character.
  // Makes sure that the character does not go beyond the limits of the canvas.
  handleInput(key) {

    switch (key) {
      case 'left':
      if(player.x>0){
        player.x -= box_width;
      }
        break;
      case 'up':
      if (player.y>0){
        player.y -= box_height;
      }
        break;
      case 'right':
      if(player.x<350){
        player.x += box_width;
      }
        break;
      case 'down':
      if(player.y<350){
        player.y += box_height;
      }
        break;
    }

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

// Checks whether the player touches an enemy. if it is the case,
// resets the players position.

function checkCollision(x,y) {
  allEnemies.forEach( enemy => {
    if ((Math.abs(x - enemy.x) <= 60) && (Math.abs(y - enemy.y) <= 40)) {
      player.x = 200;
      player.y = 380;
    }
  });
}

// Checks whether the player has reached his objective, i.e. the water row. In
// this case, displays a victory popup.

function checkVictory() {
  if ((player.y <= 40) && (victory !=1)) {
    victory = 1;
    console.log('you won');
    $('.popup').removeClass('hidden');
    $('.victoryMessage').text(`You managed to beat the game`);
    $('.popup-close').click(function(){
      $('.popup').addClass('hidden');
      player.x = 200;
      player.y = 380;
      victory = 0;

    });
  }
}


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  e.preventDefault();
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
