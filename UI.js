var hud = document.getElementById('hud');
var ctxh = hud.getContext('2d');

var energyimg0 = document.createElement("img");
energyimg0.src = "energy_bar_0 copy.png";

var energyimg10 = document.createElement("img");
energyimg10.src = "energy_bar_10 copy.png";

var energyimg20 = document.createElement("img");
energyimg20.src = "energy_bar_20 copy.png";

var energyimg30 = document.createElement("img");
energyimg30.src = "energy_bar_30 copy.png";

var energyimg40 = document.createElement("img");
energyimg40.src = "energy_bar_40 copy.png";

var energyimg50 = document.createElement("img");
energyimg50.src = "energy_bar_50 copy.png";

var energyimg60 = document.createElement("img");
energyimg60.src = "energy_bar_60 copy.png";

var energyimg70 = document.createElement("img");
energyimg70.src = "energy_bar_70 copy.png";

var energyimg80 = document.createElement("img");
energyimg80.src = "energy_bar_80 copy.png";

var energyimg90 = document.createElement("img");
energyimg90.src = "energy_bar_90 copy.png";

var energyimg100 = document.createElement("img");
energyimg100.src = "energy_bar_100 copy.png";

var waterimg = document.createElement("img");
waterimg.src = "water_UI copy.png";

var iceimg = document.createElement("img");
iceimg.src = "ice_crystal_UI copy.png";

var mineralsimg = document.createElement("img");
mineralsimg.src = "mineral_UI copy.png";

var fertilizerimg = document.createElement("img");
fertilizerimg.src = "fertilizer_UI copy.png";

var nitratesimg = document.createElement("img");
nitratesimg.src = "nitrates_UI copy.png";

var enzymesimg = document.createElement("img");
enzymesimg.src = "enzyme_UI copy.png";

var hudLoaded = false;
var energyStatus = 100;

function UI(){}

UI.prototype.draw = function(){
		ctxh.clearRect(0,0,600,100);
		
		//displays energy bar and its text
		if(control.PlayerEnergy <= 0){
			ctxh.drawImage(energyimg0, -16, 2, 75, 75);
			if(energyStatus == 10){
				energyStatus = 0;
				control.EnergyDown = true;
			}
		}
		if(control.PlayerEnergy <= 10 && control.PlayerEnergy > 0){
			ctxh.drawImage(energyimg10, -16, 2, 75, 75);
			if(energyStatus == 20){
				energyStatus = 10;
				control.EnergyDown = true;
			}
		}
		if(control.PlayerEnergy <= 20 && control.PlayerEnergy > 10){
			ctxh.drawImage(energyimg20, -16, 2, 75, 75);
			if(energyStatus == 30){
				energyStatus = 20;
				control.EnergyDown = true;
			}
		}
		if(control.PlayerEnergy <= 30 && control.PlayerEnergy > 20){
			ctxh.drawImage(energyimg30, -16, 2, 75, 75);
			if(energyStatus == 40){
				energyStatus = 30;
				control.EnergyDown = true;
			}
		}
		if(control.PlayerEnergy <= 40 && control.PlayerEnergy > 30){
			ctxh.drawImage(energyimg40, -16, 2, 75, 75);
			if(energyStatus == 50){
				energyStatus = 40;
				control.EnergyDown = true;
			}
		}
		if(control.PlayerEnergy <= 50 && control.PlayerEnergy > 40){
			ctxh.drawImage(energyimg50, -16, 2, 75, 75);
			if(energyStatus == 60){
				energyStatus = 50;
				control.EnergyDown = true;
			}
		}
		if(control.PlayerEnergy <= 60 && control.PlayerEnergy > 50){
			ctxh.drawImage(energyimg60, -16, 2, 75, 75);
			if(energyStatus == 70){
				energyStatus = 60;
			}
		}
		if(control.PlayerEnergy <= 70 && control.PlayerEnergy > 60){
			ctxh.drawImage(energyimg70, -16, 2, 75, 75);
			if(energyStatus == 80){
				energyStatus = 70;
			}
		}
		if(control.PlayerEnergy <= 80 && control.PlayerEnergy > 70){
			ctxh.drawImage(energyimg80, -16, 2, 75, 75);
			if(energyStatus == 90){
				energyStatus = 80;
			}
		}
		if(control.PlayerEnergy <= 90 && control.PlayerEnergy > 80){
			ctxh.drawImage(energyimg90, -16, 2, 75, 75);
			if(energyStatus == 100){
				energyStatus = 90;
			}
		}
		if(control.PlayerEnergy <= 100 && control.PlayerEnergy > 90){
			ctxh.drawImage(energyimg100, -16, 2, 75, 75);
			if(energyStatus != 100)
				energyStatus = 100;
		}
		
		ctxh.fillStyle = "white";
		ctxh.font = "20px Georgia";
		ctxh.fillText(control.PlayerEnergy + "%", 2, 94);
		
		ctxh.fillText(player.hasWater, 190, 94);
		ctxh.fillText(player.hasMinerals, 250, 94);
		ctxh.fillText(control.Water, 310, 94);
		ctxh.fillText(control.Minerals, 370, 94);
		ctxh.fillText(control.fertilizer, 430, 94);
		ctxh.fillText(control.nitrates, 490, 94);
		ctxh.fillText(control.Enzyme, 550, 94);
		
		ctxh.font = "16px Georgia";
		//displays exp
		ctxh.fillText("exp : " + plant.exp + " / " + plant.expMax, 50, 30);	
		//displays growth points
		ctxh.fillText("Growth Points : " + plant.growthPoints, 50, 92);
		
		//draws held water /minerals images and "held" text
		ctxh.drawImage(iceimg, 170, 2, 75, 75);
		ctxh.drawImage(mineralsimg, 230, 2, 75, 75);
		ctxh.fillStyle = "red";
		ctxh.font = "30px Georgia";
		ctxh.fillText("HELD", 195, 50);
			
		//draws images for other inventory elements
		ctxh.drawImage(waterimg, 290, 2, 75, 75);
		ctxh.drawImage(mineralsimg, 350, 2, 75, 75);
		ctxh.drawImage(fertilizerimg, 410, 2, 75, 75);
		ctxh.drawImage(nitratesimg, 470, 2, 75, 75);
		ctxh.drawImage(enzymesimg, 530, 2, 75, 75);
			
		hudLoaded = true;

};
