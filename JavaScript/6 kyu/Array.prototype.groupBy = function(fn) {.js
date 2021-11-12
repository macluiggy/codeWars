/*Array.prototype.groupBy = function(fn) {
	let obj = {};
	this.forEach(x => {
		let key = fn ? fn(x) : x;
		if(!obj.hasOwnProperty(key)) obj[key] = [];
		obj[key].push(x)
	})
	return obj
}*/
Array.prototype.groupBy = function(fn) {
	let obj = {};
	this.map(x => {
		let key = fn ? fn(x) : x;
		obj[key] ? obj[key].push(x) : obj[key] = [x]
	})
	return obj
}


let a = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
let r = a.groupBy(x => x.length)
console.log(r)

obj = {}

obj['hello'] = obj['hello'] ||[]
obj['hello'] = obj['hello'] ||[]
obj.hello.push('hello')
console.log(obj)