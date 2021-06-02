let nums = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  'u': 5,
}
const letrs = {
  1: 'a',
  2: 'e',
  3: 'i',
  4: 'o',
  5: 'u',
}
function encode(string) {
  let rgx = /[aeiouu]/gi
  let str2 = string.split('').map(l => {
    if (rgx.test(l)) return nums[l]
    if (l === 'u') return 5
      return l
  })
  return str2.join('').trim()
}
console.log(encode('How are you today?'))
function decode(string) {
  let rgx = /[12345]/gi
  let str2 = string.split('').map(l => {
    if (rgx.test(l)) return letrs[l]
      return l
    if (l === '3') return 'i'
  })
  return str2.join('').trim()
}
console.log(decode('tcxxz333wth43zplkbpc'))


console.log(/[aeiuo]/g.test('u'))

console.log([...'H4w 1r2 y4u t4d1y?'])

console.log(!!'')