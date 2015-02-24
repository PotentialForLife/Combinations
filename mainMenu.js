var quit = "Quit Button Pressed.";
var img = document.createElement("img");

function mainMenu(){
	img.src = "main_menu copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
}

mainMenu.prototype.type = "main";

mainMenu.prototype.buttonPress = function(e){
	var x = e.clientX;
	var y = e.clientY;
	x -= c.offsetLeft;
	y -= c.offsetTop;
	
	if ((x >= 189) && (x <= 416) && (y >= 247) && (y <= 280)){
		screenManager[screenManager.length] = new loadingScreen();
		loaded = true;
		//var theGame = new game();
		//screenManager[screenManager.length - 1] = theGame;
	}
	if ((x >= 189) && (x <= 416) && (y >= 323) && (y <= 356)){
		screenManager[screenManager.length] = new controlsMenu();
	}
	if ((x >= 189) && (x <= 416) && (y >= 401) && (y <= 433)){
		screenManager[screenManager.length] = new creditsMenu();
	}
	if ((x >= 189) && (x <= 416) && (y >= 473) && (y <= 505)){
		console.log(quit);
	}
};

mainMenu.prototype.update = function(){
	img.src = "main_menu copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
};