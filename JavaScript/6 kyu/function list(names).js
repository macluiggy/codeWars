function list(names){
  //your code here
  if (names.length === 0) {
    return ''
  }
  if (names.length ===1) {
    return names[0].name
  }
  let r = names.reduce((acum, current, i, arr) => {
    if (i === arr.length-1) {
      return acum + `& ${current.name}`
    }
    if (i === arr.length -2 ) {
      return acum + `${current.name} `
    }
    return acum+ `${current.name}, `
  }, '')
  return r
}

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))