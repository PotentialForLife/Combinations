var img = document.createElement("img");

function cultivateMenu(){
	img.src = "cultivate_menu copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
}

cultivateMenu.prototype.type = "cultivate";

cultivateMenu.prototype.buttonPress = function(e){
	var x = e.clientX;
	var y = e.clientY;
	x -= c.offsetLeft;
	y -= c.offsetTop;
	
	if ((x >= 509) && (x <= 551) && (y >= 54) && (y <= 88)){ //back
		screenManager.splice((screenManager.length - 1), 1);
		screenManager.splice((screenManager.length - 1), 1);
	}
	if ((x >= 150) && (x <= 382) && (y >= 268) && (y <= 336)){ //cultivate
		//do something
	}
};

cultivateMenu.prototype.update = function(){
	img.src = "cultivate_menu copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
};
