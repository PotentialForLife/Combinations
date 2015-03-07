var img = document.createElement("img");

function refineMenu(){
	img.src = "refine_menu copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
}

refineMenu.prototype.type = "refine";

refineMenu.prototype.buttonPress = function(e){
	var x = e.clientX;
	var y = e.clientY;
	x -= c.offsetLeft;
	y -= c.offsetTop;
	
	if ((x >= 509) && (x <= 551) && (y >= 54) && (y <= 88)){ //back
		shutDown.play();
		screenManager.splice((screenManager.length - 1), 1);
		screenManager.splice((screenManager.length - 1), 1);
	}
	if ((x >= 153) && (x <= 389) && (y >= 193) && (y <= 264)){ //minerals->fertilizer
		if(control.Minerals != 0){
			button.play();
			control.fertilizer += 1;
			control.Minerals -= 10;
		}
		else
			badButton.play();
		console.log("fertilizer");
		//do something
	}
	if ((x >= 153) && (x <= 389) && (y >= 334) && (y <= 407)){ //minerals->nitrates
		if(control.Minerals != 0){
			button.play();
			control.nitrates += 1;
			control.Minerals -= 10;
		}
		else
			badButton.play();
		console.log("nitrates");
		//do something
	}
};

refineMenu.prototype.update = function(){
	img.src = "refine_menu copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
	hud.draw();
};
