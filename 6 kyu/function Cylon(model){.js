/*function Cylon(model){
  this.model = model;
}
Cylon.prototype = {
	attack: function() {return "Destroy all humans!"}
}

function HumanSkin(model){
	this.model = model;
}
HumanSkin.prototype = {
	infiltrate: function () {return "Infiltrate the colonies"}
}
let caprica = new HumanSkin(6);
console.log(caprica.infiltrate())*/

function Cylon(model){
  this.model = model;
}
Cylon.prototype = {
	constructor: Cylon,
	attack: function() {return "Destroy all humans!"}
}

function HumanSkin(model){
	this.model = model;
	
}

HumanSkin.prototype = Object.create(Cylon.prototype)
console.log(HumanSkin.prototype.constructor)
HumanSkin.prototype.infiltrate = function () {return "Infiltrate the colonies"}
let caprica = new HumanSkin(6);
console.log(caprica.attack(), caprica.infiltrate())