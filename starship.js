function Starship(model, ownerName) {
	this.model = model;
	this.ownerName = ownerName;
	this.topSpeed = 3;
	this.currentSpeed = 0;

	//this.setTopSpeed = setTopSpeed;
	//this.getTopSpeed = getTopSpeed;
}

Starship.prototype.setTopSpeed = function(newTopSpeed) {
	this.topSpeed = newTopSpeed;
	//console.log(this.topSpeed);
	return "New top speed is: " + this.topSpeed;

};

Starship.prototype.getTopSpeed = function() {
	speedLimit = this.topSpeed;
	return "This crafts top speed is: " + speedLimit;
};

Starship.prototype.accelerateTo = function(newSpeed) {
	newSpeed < this.topSpeed ? this.currentSpeed = newSpeed : console.log("I'm giving her all she's got Cap'in.");
	return "This crafts new speed is: " + this.currentSpeed;
};

var xWing = new Starship("X-Wing fighter", "Terry");

// xWing.setTopSpeed(100);

// newSpeed < this.topSpeed ? this.currentSpeed = newSpeed : console.log("I'm giving her all she's got Cap'in.")