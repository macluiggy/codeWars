/*function spinWords(string){
  //TODO Have fun :)
  let arr = string.split(' ').map(word => {
    return word.length >= 5
    ? word.split('').reverse().join('')
    : word
  })
  console.log(arr)
  return arr.join(' ')
}*/
function spinWords(string){
  //TODO Have fun :)
  return string.split(' ').map(word => {
    return word.length >= 5
    ? word.split('').reverse().join('')
    : word
  }).join(' ')
}

console.log(spinWords("Hey fellow warriors"))