var xpos = 205;
var ypos = 400;
// Enemies our player must avoid
var Enemy = function(enemyStartX,enemyStartY,sprite) {
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started
        // below sets the enemies initial location as per goal1
        this.x = enemyStartX;
        this.y = enemyStartY;
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
        this.speed = Speed (1000, 1750);
};

// Setting the enemy speed as per goal!
var Speed = function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max - min + 10));
};



// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game (with initial location as x,y co-ords)
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (playerStartX,playerStartY) { // this should set up the Player class with params for initial position
    this.x = playerStartX;
    this.y = playerStartY;
    this.sprite = 'images/char-princess-girl.png';// keyword this allows me to work on the properties of the player within the class.

};

//the required update method
Player.prototype.update = function(dt) {


};

// the required render method
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    // load the player image
};

// the required handleinput method
Player.prototype.handleInput = function (direction) {
    switch(direction){
        case 'right' :
            this.x = this.x + 100;
            break;
        case 'left' :
        this.x = this.x - 100;
            break;
        case 'up' :
        this.y = this.y - 85;
            break;
        case 'down' :
        this.y = this.y + 85;
            break;
        default:
        this.x = this.x;
        this.y = this.y;
    }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var topEnemy = new Enemy(-100,60,1)
var middleEnemy = new Enemy(-100,145,2)
var bottomEnemy = new Enemy(-100,225,3)
var allEnemies = [];

allEnemies.push(topEnemy, middleEnemy, bottomEnemy);
console.log("allEnemies instantiated");

// Place the player object in a variable called player

var player = new Player(205,400);
console.log ("Player instantiated");


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(direction) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    }

    }
);
player.handleInput(allowedKeys[direction.keyCode]);
