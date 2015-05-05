function Radio(ownerName, signalType) {
	this.ownerName = ownerName;
	this.signalType = signalType || "FM";
	this.station;
	
}

Radio.prototype.setStation = function(station) {
	if (this.signalType === "AM") {
		if (station >= 535 && station <= 1705) {
			this.station = station;
			return station;
		} else {console.log("Pick a valid AM station.")}
	} else if (station >= 88 && station <= 108) {
		this.station = station;
		return station;
	} else {console.log("Pick a valid FM station.")}
}

Radio.prototype.listen = function() {
	if (this.signalType === "AM") {
		return "distorted music";
	} else {return "clear music";}
}

var carRadio = new Radio("Joe");


