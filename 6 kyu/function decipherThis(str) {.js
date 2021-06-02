/*function decipherThis(str) {
//have fun!
let rgx = /\d+/gi
let arr = str.split(' ').map(w => {
	let m = w.match(rgx);
	let char = m.join('');
	let res = w.replace(rgx, String.fromCharCode(char));
	let w2 = res.split('');
	w2[1] = res[res.length - 1];
	w2[w2.length - 1] = res[1];
	return w2.join('')
}).join(' ')
console.log(arr)
return arr
}; */
function decipherThis(str) {
//have fun!
let rgx = /\d+/gi
let arr = str.split(' ').map(w => {
	let m = w.match(rgx);
	let char = m.join('');
	let res = w.replace(rgx, String.fromCharCode(char));
	let w2 = res.split('');
	w2[1] = res[res.length - 1];
	w2[w2.length - 1] = res[1];
	return w2.join('')
})
return arr.join(' ')
}; 
console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'))

let w = 'hola'
let w2 = w.split('');
w2[1] = w[w.length - 1]
w2[w.length-1] = w[1] 
//console.log(w2)

let p = '72eva';
let regex = /\d+/gi
let m = p.match(regex)
let n = m.join('')
console.log(regex)
let res = p.replace(regex, String.fromCharCode(n))
console.log(res)
let w3 = res.split('')
w3[1] = res[res.length - 1]
w3[w3.length - 1] = res[1]
console.log(w3)