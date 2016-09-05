// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (player) { // this should set up the Player class
    this.player = player; // keyword this allows me to work on the properties of the player within the class.
    console.log ("Player instantiated");

};
//the player method (first just a test to print)
Player.prototype.hellotest = function() {
    console.log("hello, I am a test for player " + this.player);
};// this is not a required function, just something I added to ensure the class structure was working correctly.

//the required update method
Player.prototype.update = function() {

};

// the required render method
Player.prototype.render = function() {

};

// the required handleinput method
Player.prototype.handleInput = function () {

};
// creating a new instance of the player object

var player = new Player('dave');

// to show the first name properties of the objects
console.log('player is ' + player.player); // logs "player is dave"

// calling the hellotest function
player.hellotest();

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var AllEnemies = function (allEnemies) {
    this.allEnemies = allEnemies;
    console.log("allEnemies instantiated");
};

//the player method (first just a test to print)
AllEnemies.prototype.enemytest = function() {
    console.log("Grr.. I am enemy " + this.allEnemies[x]);
};// this is not a required function, just something I added to ensure the class structure was working correctly.

//An AllEnemies imageload method (Required)
AllEnemies.prototype.imageLoad = function() {

};

//An AllEnemies initialLocation method (Required)
AllEnemies.prototype.initialLocation = function() {

};

//An AllEnemies speed method (Required)
AllEnemies.prototype.speed = function() {

};

//The required Allenemies update Method (Required)

AllEnemies.prototype.update = function() {
// implement location, collision with player
};


var allEnemies = [];


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