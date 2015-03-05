var t1 = document.createElement("img");
t1.src = "tutorial1 copy.png";
var t2 = document.createElement("img");
t2.src = "tutorial2 copy.png";
var t3 = document.createElement("img");
t3.src = "tutorial3 copy.png";
var t4 = document.createElement("img");
t4.src = "tutorial4 copy.png";
var t5 = document.createElement("img");
t5.src = "tutorial5 copy.png";
var t6 = document.createElement("img");
t6.src = "tutorial6 copy.png";
var t7 = document.createElement("img");
t7.src = "tutorial7 copy.png";
var t8 = document.createElement("img");
t8.src = "tutorial8 copy.png";
var t9 = document.createElement("img");
t9.src = "tutorial9 copy.png";
var t10 = document.createElement("img");
t10.src = "tutorial10 copy.png";
var t11 = document.createElement("img");
t11.src = "tutorial11 copy.png";
var t12 = document.createElement("img");
t12.src = "tutorial12 copy.png";

function tutorial(){
	ctx.drawImage(t1, 0, 0);
	this.imgNum = 1;
};

tutorial.prototype.type = "tutorial";

tutorial.prototype.buttonPress = function(e){
	var x = e.clientX;
	var y = e.clientY;
	x -= c.offsetLeft;
	y -= c.offsetTop;
	
	if ((x >= 125) && (x <= 475) && (y >= 440) && (y <= 530)){ //continue button
		this.imgNum++;
		//screenManager.splice((screenManager.length - 1), 1);
	}
	if ((x >= 509) && (x <= 551) && (y >= 54) && (y <= 88)){ //back
		screenManager.splice((screenManager.length - 1), 1);
	}
};

tutorial.prototype.update = function(){
	screenManager[screenManager.length - 2].update();
	switch(this.imgNum){
		case 1:
			ctx.drawImage(t1, 0, 0);
			break;
		case 2:
			ctx.drawImage(t2, 0, 0);
			break;
		case 3:
			ctx.drawImage(t3, 0, 0);
			break;
		case 4:
			ctx.drawImage(t4, 0, 0);
			break;
		case 5:
			ctx.drawImage(t5, 0, 0);
			break;
		case 6:
			ctx.drawImage(t6, 0, 0);
			break;
		case 7:
			ctx.drawImage(t7, 0, 0);
			break;
		case 8:
			ctx.drawImage(t8, 0, 0);
			break;
		case 9:
			ctx.drawImage(t9, 0, 0);
			break;
		case 10:
			ctx.drawImage(t10, 0, 0);
			break;
		case 11:
			ctx.drawImage(t11, 0, 0);
			break;
		case 12:
			ctx.drawImage(t12, 0, 0);
			break;
		case 13:
			screenManager.splice((screenManager.length - 1), 1);
			break;
		default:
			break;
	}
};