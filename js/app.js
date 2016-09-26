// variable creation (includinag Variables called by the createjs sound API)
var lives = 5;
var score = 0;
var waterSound = "splash";
var jumpSound = "boing";
var cantMove = "thud";
var caught = "snap";
var music = "music";

// the functiones required by the createjs sound API in order to work correctly
function loadSounds() {
    createjs.Sound.registerSound("sounds/splash.wav", waterSound);
    createjs.Sound.registerSound("sounds/jump.mp3", jumpSound);
    createjs.Sound.registerSound("sounds/thud.mp3", cantMove);
    createjs.Sound.registerSound("sounds/caught.mp3", caught);
    createjs.Sound.registerSound("sounds/cat_mouse.mp3", music);
}

function playSplash() {
    createjs.Sound.play(waterSound);
}

function playJump() {
    createjs.Sound.play(jumpSound);
}

function playThud() {
    createjs.Sound.play(cantMove);
}

function playSnap() {
    createjs.Sound.play(caught);
}

function playMusic() {
    createjs.Sound.play(music);
}

loadSounds();


// Enemies our player must avoid
var Enemy = function(enemyStartX, enemyStartY, sprite) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // below sets the enemies initial location as per goal1
    this.x = enemyStartX;
    this.y = enemyStartY;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.speed = Math.floor(Math.random() * (400 - 100 + 10));
};

// Setting the enemy speed as per goal!
var Speed = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 10));
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
    if (this.x >= 505) {
        this.speed = Speed(100, 876);
        this.x = -100;
    }
    if (player.x <= this.x + 40 &&
        player.x >= this.x - 40 &&
        player.y <= this.y + 40 &&
        player.y >= this.y - 40) {
        console.log("Ouch");
        playSnap();
        lives = lives - 1;
        $("#lifeLeft").text(lives);
        console.log(lives);
        player.reset();
    }
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
var Player = function(playerStartX, playerStartY) { // this should set up the Player class with params for initial position
    this.x = playerStartX;
    this.y = playerStartY;
    this.sprite = 'images/char-princess-girl.png'; // keyword this allows me to work on the properties of the player within the class.
};

//the required update method
Player.prototype.update = function(dt) {

    if (this.y <= -25) {
        // timeout = setTimeout(function() {
        console.log("You made it");
        this.reset();
        // }, 1000);
        score = score + 1;
        playSplash();
        $("#score").text(score);
        if (score === 5) {
            playMusic();
        }
        console.log(score);
    }
    // clearTimeout(setTimeout);
};

// the required render method
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    // load the player image
};

// the below is for collision detection


// the required handleinput method
// the switch used refrences the eventlistener below and moves the player the correct amount of Pixels to appear to move to the next square accordingly. the default is no keyrelease and the x and y positions remain unchanged.
Player.prototype.handleInput = function(direction) {
    switch (direction) {
        case 'right':
            if (this.x >= 405) { // the if statement here sets a limit to player movement if at far right
                this.x;
                playThud(); // then x remains at its value no matter if key pressed
            } else {
                this.x = this.x + 100; // else you are free to move 100 px to the right
                console.log(this.x, this.y);
                playJump(); // used this to verify the x and y location
            }
            break;
        case 'left':
            if (this.x <= 5) {
                this.x;
                playThud(); // calls the createjs sound api to play a sound if player cannot move
            } else {
                this.x = this.x - 100;
                console.log(this.x, this.y);
                playJump();
            }
            break;
        case 'up':
            if (this.y <= -25) {
                this.y;
                playThud();
            } else {
                this.y = this.y - 85;
                console.log(this.x, this.y);
                playJump();
            }
            break;
        case 'down':
            if (this.y >= 400) {
                this.y;
                playThud();
            } else {
                this.y = this.y + 85;
                console.log(this.x, this.y);
                playJump();
            }
            break;
        default:
            this.x = this.x;
            this.y = this.y;
    }
};




// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var topEnemy = new Enemy(-100, 60, 1);
var middleEnemy = new Enemy(-100, 145, 2);
var bottomEnemy = new Enemy(-100, 225, 3);
var allEnemies = [];



allEnemies.push(topEnemy, middleEnemy, bottomEnemy);
console.log("allEnemies instantiated");

// Place the player object in a variable called player

var player = new Player(205, 400);
console.log("Player instantiated");


Player.prototype.reset = function() {

    this.x = 205;
    this.y = 400;


};


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(direction) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[direction.keyCode]);
});