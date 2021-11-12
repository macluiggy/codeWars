Array.prototype.square = function () {
	return this.map(n => n*n)
}

let arr = [1,2,3]

console.log(arr.square())
console.log()

let returnTarget = Object.assign(Array.prototype, {
  squares() {return this.map(val => val ** 3);},
  cube() {return this.map(val => val ** 3);},
  average() {return this.sum() / this.length;},
  sum() {return this.reduce((pre, val) => pre + val, 0);},
  even() {return this.filter(val => !(val % 2));},
  odd() {return this.filter(val => val % 2);}
});
console.log(arr.square())
console.log(returnTarget)
console.log(Array.prototype)