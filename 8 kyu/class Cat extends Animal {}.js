class Animal {
	constructor(name) {
		this.name = name;
	}
}

class Cat extends Animal {
	speak() {
		return this.name + ' meows.';
	}
}

let gato = new Cat('mishu');
console.log(gato.speak());