/*function sumDigPow(a, b) {
  // Your code here
  let arr = [];
  for (let i = a; i <=b; i++) {
    arr.push(i);
  }
  //console.log(arr)
  let arr2 = arr.filter(num => {
    return num === parseInt(num.toString().split('').map((d, i) => d**(i+1)).reduce((a, b) => a + b, 0))
  })
  console.log(arr2)
  return arr2
}*/

function sumDigPow(a, b) {
  // Your code here
  let arr = [];
  for (let i = a; i <=b; i++) {
    arr.push(i);
  }
  let arr2 = arr.filter(num => {
    return num === parseInt(num.toString().split('').map((d, i) => d**(i+1)).reduce((a, b) => a + b, 0))
  })
  return arr2
}
console.log(sumDigPow(10, 100))
let num = 123
console.log(typeof parseInt(num.toString().split('').map(n => n*2).join('')))

let n = 89

let arr = n.toString().split('').map((d, i) => d**(i+1)).reduce((a, b) => a + b, 0)
console.log(arr)