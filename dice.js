function Dice(numberOfSides) {
	this.numberOfSides = numberOfSides;
}

Dice.prototype.roll = function() {
		this.lastRoll = Math.floor(Math.random() * (this.numberOfSides) + 1);
		//console.log("running from the prototype");
        return this.lastRoll;
} 

var sixSided = new Dice(6);