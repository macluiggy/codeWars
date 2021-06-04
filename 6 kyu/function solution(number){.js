/*function solution(number){
  let arr = Array.from(Array(number).keys())
  //console.log(arr)
  let arr2 = arr.filter(i => {
  	return i%3 === 0 || i%5 === 0
  })
  //console.log(arr2)
  let arr3 = arr2.reduce((a, b) => a+b)
  console.log(arr3)
  return arr3
}
*/
function solution(number){
  return Array.from(Array(number).keys()).filter(i => {
  	return i%3 === 0 || i%5 === 0
  }).reduce((a, b) => a+b)
}

console.log(solution(10))
//console.log(Array.from(Array(7).keys()))

if (!0) console.log('divisible')