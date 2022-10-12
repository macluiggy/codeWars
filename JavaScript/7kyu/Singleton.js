class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }
}

let obj1 = new Singleton();
let obj2 = new Singleton();
console.log(obj1 === obj2);