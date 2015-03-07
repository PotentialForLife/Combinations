/*Credits Menu Class
 * Coded by Lauren Cunningham
 * This is the class for the credits menu screen of the game
 */

//screen graphic
var img = document.createElement("img");

//creates a credits menu object. These are put into the screen manager declared in "main.js"
function creditsMenu(){
	img.src = "credits_menu copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
}

creditsMenu.prototype.type = "credits";

//handles the button on the credits menu graphic (handles mouse clicks)
creditsMenu.prototype.buttonPress = function(e){
	var x = e.clientX;
	var y = e.clientY;
	x -= c.offsetLeft;
	y -= c.offsetTop;
	
	if ((x >= 189) && (x <= 416) && (y >= 473) && (y <= 504)){ //back button
		screenManager.splice((screenManager.length - 1), 1);
	}
};

//updates the credits menu screen
creditsMenu.prototype.update = function(){
	img.src = "credits_menu copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
};
