var img = document.createElement("img");

function stationMenu(){
	img.src = "station_menu copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
}

stationMenu.prototype.type = "station";

stationMenu.prototype.buttonPress = function(e){
	var x = e.clientX;
	var y = e.clientY;
	x -= c.offsetLeft;
	y -= c.offsetTop;
	
	if ((x >= 509) && (x <= 551) && (y >= 54) && (y <= 88)){ //back
		screenManager.splice((screenManager.length - 1), 1);
	}
	if ((x >= 150) && (x <= 382) && (y >= 268) && (y <= 336)){ //refine
		screenManager[screenManager.length] = new refineMenu();
	}
	if ((x >= 150) && (x <= 382) && (y >= 412) && (y <= 480)){ //cultivate
		screenManager[screenManager.length] = new cultivateMenu();
	}
};

stationMenu.prototype.update = function(){
	img.src = "station_menu copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
};
