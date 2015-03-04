var img = document.createElement("img");

function pauseMenu(){
	img.src = "pause_menu copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
	ctxh.clearRect(0,0,600,100);
	hudLoaded = false;
}

pauseMenu.prototype.type = "pause";

pauseMenu.prototype.buttonPress = function(e){
	var x = e.clientX;
	var y = e.clientY;
	x -= c.offsetLeft;
	y -= c.offsetTop;
	
	if ((x >= 189) && (x <= 416) && (y >= 241) && (y <= 273)){
		while (screenManager.length > 0)
			screenManager.splice((screenManager.length - 1), 1);
		screenManager[screenManager.length] = new mainMenu();
	}
	if ((x >= 189) && (x <= 416) && (y >= 336) && (y <= 369)){
		screenManager[screenManager.length] = new controlsMenu();
	}
	if ((x >= 189) && (x <= 416) && (y >= 432) && (y <= 466)){ //back button
		screenManager.splice((screenManager.length - 1), 1);
		noHud = false;
	}
};

pauseMenu.prototype.update = function(){
	img.src = "pause_menu copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
};
