//consts
var canvas =document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var w = 400;
var h = 400;
var playeridleleftimg = document.createElement("img");
playeridleleftimg.src = "robot_idle_left copy.png";
var playeridlerightimg = document.createElement("img");
playeridlerightimg.src = "robot_idle_left copy.png";
var playermoveleftimg = document.createElement("img");
playermoveleftimg.src = "robot_idle_left copy.png";
var playermoverightimg = document.createElement("img");
playermoverightimg.src = "robot_idle_left copy.png";
var playeridleleftimg = document.createElement("img");
playeridleleftimg.src = "robot_idle_left copy.png";
var playeridleleftimg = document.createElement("img");
playeridleleftimg.src = "robot_idle_left copy.png";
function Player(){	
}

Player.prototype.x = 10000;		//xpos
Player.prototype.y = 10000;		//ypos
Player.prototype.dir = "right";	//player direction
Player.prototype.move = false;	//movinig for idle animation
Player.prototype.capacityMax = 100;		
Player.prototype.capacity = 0;	
Player.prototype.energy = 100;	
Player.prototype.speed = 10;	
Player.prototype.height = -1;	
Player.prototype.up = false;	
Player.prototype.right = false;	
Player.prototype.down = false;	
Player.prototype.left = false;	
Player.prototype.onPlant = false;
Player.prototype.inControl = false;
Player.prototype.onWater = false;
Player.prototype.onMinerals = false;
Player.prototype.hasMinerals = 0;
Player.prototype.hasWater = 0;
Player.prototype.image = 

Player.prototype.draw = function(x,y){
	var dx = x - 2;
	var dy = y - 2;
	ctx.beginPath();
	ctx.fillStyle = "white";
	ctx.fillRect(dx,dy,4,4);
	ctx.strokeStyle = "black";
	ctx.strokeRect(dx,dy,4,4);
};

Player.prototype.move = function(){
	if (keyspressed[RIGHT_KEY] == true)this.x += this.speed;
	if (keyspressed[LEFT_KEY] == true)this.x -= this.speed;
	if (keyspressed[UP_KEY] == true)this.y -= this.speed;
	if (keyspressed[DOWN_KEY] == true)this.y += this.speed;
};




















