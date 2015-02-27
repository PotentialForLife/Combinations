function Station(hex){
	hex.type = "control";
	hex.color = "grey";
	hex.realcolor = "grey";
};
Station.prototype.Water =  500;
Station.prototype.Minerals = 500;
Station.prototype.Enzyme = 0;
Station.prototype.EnzymeBuildUp;
Station.prototype.EnzymeBuildRate;
Station.prototype.WaterUsageRate = 1; //per increment, like 20 seconds
Station.prototype.WaterGainRate = 0;
Station.prototype.MineralGainRate = 0;
Station.prototype.MineralUsageRate = 1; //see above
Station.prototype.PlantNum = 1;
Station.prototype.PlayerEnergy = 100;
Station.prototype.PlayerEnergyLossRate = 1;
Station.prototype.AtmosphereTiles = 1;
Station.prototype.Growing = false;
Station.prototype.HoldingGrow = false;
Station.prototype.fertilizer = 0;
Station.prototype.nitrates = 0;