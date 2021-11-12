function capitalize(str) {
	// body...
	return str.slice(0,1).toUpperCase() + str.slice(1)
}

function generateHashtag (str) {
	let str2 = str
				.split(/\s+/gi)
				.map(word => capitalize(word))
				.join('')
	if (str2.length >= 140) {
		return false
	}
	if (!str2) {
		return false
	}
	return '#' + str2
}

console.log(generateHashtag('#Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'))


let s = 'log message'
console.log(capitalize(s))
