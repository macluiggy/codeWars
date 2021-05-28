function lastSurvivor(letters, coords) {
	let arr = letters.split('');
	let str;
	while (coords.length > 0) {
		let el = coords.shift()
		arr.splice(el, 1)
		str = arr.join('')
	}
	return str
}

console.log(lastSurvivor('zbk', [2, 1]))
let a = 'xyz';
let b = a.split('')
b.splice(1,1)
let c = b.join('')
console.log(c)