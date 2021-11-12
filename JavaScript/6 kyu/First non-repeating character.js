/*function firstNonRepeatingLetter(s) {
  // Add your code here
  console.log(s)
  let arr1 = [...new Set(s.split(''))]
  let arr2 = arr1.filter(l => {
    if (l === '?') {
      return !(s.match(/\?/gi).length > 1)
    }
    return !(s.match(new RegExp(`${l}`, 'gi')).length > 1)
  })
  return arr2[0] || ''
}*/
function firstNonRepeatingLetter(s) {
  return [...new Set(s.split(''))].filter(l => {
    if (l === '?') {
      return !(s.match(/\?/gi).length > 1)
    }
    return !(s.match(new RegExp(`${l}`, 'gi')).length > 1)
  })[0] || ''
}
console.log(firstNonRepeatingLetter('hello world, eh?'))
console.log('log message'.match(/s{2,}/gi))
console.log('ﬁ' == 'ﬂ')