var img = document.createElement("img");
var myimg = document.getElementById('img');

function UI(){}

UI.prototype.draw = function(){
	img.src = "energy_bar_0 copy.png";
	myimg.style.height = "50px";
	myimg.style.width = "50px";
	ctx.drawImage(myimg, 0, 0);
	ctx.fillStyle = "white";
	ctx.font = "20px Georgia";
	ctx.fillText("Water : " + control.Water, 10,25);
	ctx.fillText("Minerals : " + control.Minerals, 10,45);
	ctx.fillText("Enzymes : " + control.Enzyme, 10,65);
};
