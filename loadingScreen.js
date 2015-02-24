var img = document.createElement("img");

function loadingScreen(){
	img.src = "load_screen0 copy.png";
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	};
	this.imgNum = 0;
	this.cycle = 0;
}

loadingScreen.prototype.type = "load";

loadingScreen.prototype.update = function(){
	switch(this.imgNum){
		case 0:
			img.src = "load_screen0.5 copy.png";
			this.imgNum = 0.5;
			break;
		case 0.5:
			img.src = "load_screen1 copy.png";
			this.imgNum = 1;
			break;
		case 1:
			img.src = "load_screen1.5 copy.png";
			this.imgNum = 1.5;
			break;
		case 1.5:
			img.src = "load_screen2 copy.png";
			this.imgNum = 2;
			break;
		case 2:
			img.src = "load_screen2.5 copy.png";
			this.imgNum = 2.5;
			break;
		case 2.5:
			img.src = "load_screen3 copy.png";
			this.imgNum = 3;
			break;
		case 3:
			img.src = "load_screen3.5 copy.png";
			this.imgNum = 3.5;
			break;
		case 3.5:
			img.src = "load_screen4 copy.png";
			this.imgNum = 4;
			break;
		case 4:
			img.src = "load_screen4.25 copy.png";
			this.imgNum = 4.25;
			break;
		case 4.25:
			img.src = "load_screen4.5 copy.png";
			this.imgNum = 4.5;
			break;
		case 4.5:
			img.src = "load_screen5 copy.png";
			this.imgNum = 5;
			break;
		case 5:
			img.src = "load_screen5.5 copy.png";
			this.imgNum = 5.5;
			break;
		case 5.5:
			img.src = "load_screen6 copy.png";
			this.imgNum = 6;
			break;
		case 6:
			img.src = "load_screen6.5 copy.png";
			this.imgNum = 6.5;
			break;
		case 6.5:
			img.src = "load_screen7 copy.png";
			this.imgNum = 7;
			break;
		case 7:
			img.src = "load_screen0 copy.png";
			this.imgNum = 0;
			this.cycle++;
			break;
	}
	if (this.cycle != 2){
		img.onload = function(){
			ctx.drawImage(img, 0, 0);
		};
	}
	else{
		screenManager[screenManager.length] = new game();
	}
};
