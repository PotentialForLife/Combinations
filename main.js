var ctx = document.querySelector("canvas").getContext("2d");
var c = document.getElementById("canvas");
var screenManager = [];
screenManager[0] = new mainMenu();
var screenType = "main";
var loaded = false;

//Canvas stuff
var canvas = $("#canvas")[0];
var ctx = canvas.getContext("2d");
var w = $("#canvas").width();
var h = $("#canvas").height();
var cw = 20;

//global declarations
var RIGHT_KEY = 68;
var LEFT_KEY = 65;
var UP_KEY = 87;
var DOWN_KEY = 83;
var X_FLAG = -1;
var Y_FLAG = -1;
var map = new Array();
var player = new Player();
X_FLAG = Math.floor(player.x/cw/3);
Y_FLAG = Math.floor(player.y/cw);

//cam stuff
var CAM_HEIGHT = 600;
var CAM_WIDTH = 600;
var TOP;
var LEFT;
var CAM_X_OFFSET;
var CAM_Y_OFFSET;

//keyboard
var keyspressed = {};
keyspressed[RIGHT_KEY] = false;
keyspressed[LEFT_KEY] = false;
keyspressed[UP_KEY] = false;
keyspressed[DOWN_KEY] = false;
	
//tile colors
var TILE_COLORS = [ '#CC5200', '#E65C00', '#FF6600', '#FF7519', '#FF8533', '#FF9900', '#80FFFF', '#FFC299', '#FF0000'];

var plant;
var growTiles = [];
var growSourceTile;
var control;
var ui;

document.addEventListener('keydown',keyDown,false);
document.addEventListener('keyup',keyUp,false);

c.onmousedown = function(e){
	screenManager[screenManager.length - 1].buttonPress(e);
};

function redraw(){
	screenManager[screenManager.length - 1].update();
};

setInterval(redraw, 1000/30);