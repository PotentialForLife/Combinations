/**
 * @author Joseph
 */

/**
 * @class: A tree structure of nodes, each with properties denoting location, type, and children
 * @property: {PlantNode} stem: "root" node of the tree
 * @property: {number} lvl: current level reached by the plant; increases on 'exp' reaching 'expLimit'
 * @property: {number} exp: amount of experience acquired for current level; initially returns to 0 on increase in 'lvl'
 * @property: {number} expMax: amount of 'exp' required to increase 'lvl' by 1; increases upon increase in 'lvl'
 * @property: {number} growthPoints: how many times player may "grow" plant by stretching Plant by its roots
 */

/* Plant control
 * Grow: If you have a growth point, allow growth
 * Split: if you have enzyme, allow split
 * Take in water: Input number
 * Take in minerals: Input number
 * Upgrade: With enough resources, upgrade
 * Level: With enough EXP, level
 * Sell: Get back water, not minerals
 * Player Control
 * Picking up things: space
 * Dropping things off: space
 * General interaction: space
 * Basically,bring up a menu and interact that way
 */
var plantEnum = {SEEDLING: "seedling", SAPLING: "sapling", TREE: "tree", ROOT: "root"};

function Plant(startingTile){
	//this.stem = new PlantNode(startingTile, plantEnum.SEEDLING);
	this.stem = new PlantNode(startingTile, plantEnum.TREE);
};

Plant.prototype.stem;
Plant.prototype.lvl = 0;
Plant.prototype.exp = 0;
Plant.prototype.expMax = []; //could make it multiplicative depending on level instead of being array
Plant.prototype.growthPoints = 3;

function PlantNode(nodeTile, nodeType){
	console.log("making PlantNode");
	this.tile = nodeTile;//hex
	this.type = nodeType;
	this.tile.plant = this;
	this.tile.type = "plant";
	this.tile.color = "green";
	this.tile.atmosphere = true;
};

PlantNode.prototype.tile = null;
PlantNode.prototype.type = plantEnum.ROOT;
PlantNode.prototype.parent = null;
PlantNode.prototype.children = new Array(); //could reference neighboring tiles instead of just children (change name if so)


/**
 * Grow plant in particular direction
 * 
 * @param {Object} parent: branch or root to be grown; if branch, root is created; if root, turns to branch and root is created
 * @param {Object} tile: tile on which new root is created
 */
Plant.prototype.grow = function(parentNode, tile){
	if(parentNode.type == plantEnum.ROOT){
		--this.growthPoints;
		parentNode.type = plantEnum.TREE;
		newRoot = new PlantNode(tile, plantEnum.ROOT);
		newRoot.parent = parentNode;
		parentNode.children.push(newRoot);
		tile.plant = newRoot;
	}
	else if(parentNode.type == plantEnum.TREE){
		--this.growthPoints;
		//reduce amount of enzyme remaining
		newRoot = new PlantNode(tile, plantEnum.ROOT);
		newRoot.parent = parentNode;
		parentNode.children.push(newRoot);
		tile.plant = newRoot;
	}
};

/**
 * Increases 'lvl' by 1, increases 'expMax,' and wraps extra 'exp' around
 */
Plant.prototype.lvlUp = function(){
	switch(stem.type){
		case plantEnum.SEEDLING:
			stem.type = plantEnum.SAPLING;
			break;
		case plantEnum.SAPLING:
			stem.type = plantEnum.TREE;
		default:
			++growthPoints;
	}
	
	var extraExp = exp - expMax;
	expMax *= 1.5;
	exp = extraExp;
	++lvl;
};

/**
 * calls 'lvlUp' if 'expMax' has been reached
 */
Plant.prototype.update = function(){
	if(exp > expMax){
		this.lvlUp();
	}	
};

/**
* Check whether a given tile can contain a new plantNode
* 
* @param {hex} tile: hex tile checked for ability to contain new plantNode
*/
function checkTileGrowable(tile){
	if(TILE_COLORS.indexOf(tile.color) > -1){
		tile.color = 'green';
		growTiles.push(tile);
	}
}
	
/**
* Grows a new plantNode and separates the corresponding tile from the array of non-chosen tiles
*/
function growPlant(){
	plant.grow(growSourceTile.plant, map[X_FLAG][Y_FLAG]);
	for(var numTile = 0; numTile < growTiles.length; ++numTile){
		if(map[X_FLAG][Y_FLAG].x == growTiles[numTile].x && map[X_FLAG][Y_FLAG].y == growTiles[numTile].y)
			growTiles.splice(numTile, 1);
	}
}