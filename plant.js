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

function Plant(){
	
};

//Plant.prototype.stem = new PlantNode(placeHolder, plantEnum.SEEDLING); //replace placeHolder with center tile (or whatever origin tile is desired) 
Plant.prototype.lvl = 0;
Plant.prototype.exp = 0;
Plant.prototype.expMax = new Array(); //could make it multiplicative depending on level instead of being array
Plant.prototype.growthPoints = 0;

function PlantNode(nodeTile, nodeType){
	this.tile = nodeTile;//hex
	this.type = nodeType;
	this.tile.type = "plant";
	this.tile.color = "green";
	this.tile.atmosphere = true;
};

PlantNode.prototype.tile = null;
PlantNode.prototype.type = plantEnum.ROOT;
PlantNode.prototype.children = new Array(); //could reference neighboring tiles instead of just children (change name if so)


/**
 * Grow plant in particular direction
 * 
 * @param {Object} parent: branch or root to be grown; if branch, root is created; if root, turns to branch and root is created
 * @param {Object} tile: tile on which new root is created
 */

Plant.prototype.grow = function(parent, tile){
	if(parent == plantEnum.ROOT){
		//light up only surrounding tiles with no resources or PlantNodes attached
		//ask for mouse click on lit up tile
		--growthPoints;
		parent.type = plantEnum.TREE;
		//newRoot = new PlantNode(clickedTile);
		//add new root to parent's children
		//attach node to tile in some way
	}
	else if(parent.type == plantEnum.TREE){
		//light up only surrounding tiles with no resources or PlantNodes attached
		//ask for mouse click on lit up tile
		--growthPoints;
		//reduce amount of enzyme remaining
		//newRoot = new PlantNode(clickedTile);
		//add new root to parent's children
		//attach node to tile in some way
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
