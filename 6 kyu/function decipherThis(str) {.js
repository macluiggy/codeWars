function decipherThis(str) {
//have fun!
}; 
decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')

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