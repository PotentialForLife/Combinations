/*Main Menu Class
 * Coded by Lauren Cunningham
 * This is the class for the main menu screen of the game
 */

//screen graphic
var quit = "Quit Button Pressed.";
var img = document.createElement("img");

//creates a main menu object. These are put into the screen manager declared in "main.js"
function mainMenu(){
	img.src = "main_menu copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
}

mainMenu.prototype.type = "main";

//handles the buttons on the main menu graphic (handles mouse clicks)
mainMenu.prototype.buttonPress = function(e){
	var x = e.clientX;
	var y = e.clientY;
	x -= c.offsetLeft;
	y -= c.offsetTop;
	
	if ((x >= 189) && (x <= 416) && (y >= 247) && (y <= 280)){ //newgame
		button.play();
		screenManager[screenManager.length] = new loadingScreen();
		loaded = true;
	}
	if ((x >= 189) && (x <= 416) && (y >= 323) && (y <= 356)){ //controls 
		button.play();
		screenManager[screenManager.length] = new controlsMenu();
	}
	if ((x >= 189) && (x <= 416) && (y >= 401) && (y <= 433)){ //credits
		button.play();
		screenManager[screenManager.length] = new creditsMenu();
	}
	if ((x >= 189) && (x <= 416) && (y >= 473) && (y <= 505)){ //quit
		button.play();
		screenManager.splice((screenManager.length - 1), 1);
		ctx.clearRect(0, 0, 600, 600);
	}
};

//updates the main menu screen
mainMenu.prototype.update = function(){
	img.src = "main_menu copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
};