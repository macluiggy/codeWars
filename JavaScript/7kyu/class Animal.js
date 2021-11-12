class Animal {
    constructor(name, age, legs, species, status) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Get Coding :)

class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, 'shark', status);
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, 'cat', status);
    }
    introduce() {
        return `${super.introduce()}  Meow meow!`;
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, 4, 'dog', status);
        this.master = master;
    }
    greetMaster(){
      return `Hello ${this.master}`;
    }
}


var billy = new Shark("Billy", 3, "Alive and well");
console.log(`${billy.name}
${billy.age}
${billy.status}
${billy.species}
${billy.introduce()}
${billy.legs} `)
var charles = new Shark("Charles", 8, "Finding a mate");
console.log(`${charles.name}
${charles.age}
${charles.status}
${charles.species}
${charles.introduce()} 
${charles.legs}`)

var cathy = new Cat("Cathy", 7, "Playing with a ball of yarn");
console.log(`${cathy.name}
${cathy.age}
${cathy.status}
${cathy.species}
${cathy.introduce()} 
${cathy.legs}`)

var doug = new Dog("Doug", 12, "Serving his master", "Eliza");
console.log(`${doug.name}
${doug.age}
${doug.status}
${doug.species}
${doug.introduce()} 
${doug.legs}
${doug.greetMaster()}`)