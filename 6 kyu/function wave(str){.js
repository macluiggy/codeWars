/*function wave(str){
  // Code here
  let a = str.split('')
  let a2 = a.map((l,i) => {
    let ta = str.split('');
    ta[i] = ta[i].toUpperCase()
    return ta.join('')
  })
  console.log(a2)
  let a3 = a2.filter(w => w !== w.toLowerCase())
  console.log(a3)
  return a3
}*/
function wave(str){
  // Code here
  let a = [...str]
  return a2 = a.map((l,i) => {
    let ta = [...str]
    ta[i] = ta[i].toUpperCase()
    return ta.join('')
  }).filter(w => w !== w.toLowerCase())
}

console.log(wave("two words"))

let s ='hola dd'.split('')
s[1] = s[1].toUpperCase()
console.log(s.join(''))

/*
['Two words', 'tWo words', 'twO words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS']
['Two words', 'tWo words', 'twO words', 'two words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS']
*/

console.log(/([a-z])+/g.test('ddRd'))

console.log('hola'.slice(1, 10**10))