function squareDigits(num){
  //may the code be with you
  return parseInt(num.toString().split('').map(num => num**2).join(''))
}
console.log(squareDigits(3212))

let nums = 123
console.log(nums.toString().split(''))

console.log(typeof +'12')