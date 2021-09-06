var db;
var game, form, player;
var gameState = 0;
var playerCount; 
var bgImage;
function preload() {
    bgImage = loadImage("assets/background.png");
}
function setup(){
    createCanvas(windowWidth,windowHeight-30);
    db = firebase.database();
    
    game = new Game();
    game.start();
}

function draw(){
    background("white");
    
}