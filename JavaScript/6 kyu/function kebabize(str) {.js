/*function kebabize(str) {
  // return
  let rgx = /[A-Z]/g
  let str2 = str.replace(rgx, X => `-${X.toLowerCase()}`)
  let str3 = str2.replace(/\d/g, '')
  let str4 = str3.replace(/^-/g, '')
  console.log(str3)
  return str4
}*/
function kebabize(str) {
  // return
  return str.replace(/[A-Z]/g, L =>`-${L.toLowerCase()}`).replace(/\d/g, '').replace(/^-/, '')
}

console.log(kebabize('46Uhc'))

console.log('-er3'.replace(/(^-)(\d)/, ''))