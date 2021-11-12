/*function findOdd(A) {
  //happy coding!
  let arr = [];
  A.sort()
  console.log(A)
  A.forEach(n => {
    let left = A.indexOf(n);
    let right = A.lastIndexOf(n)
    let tempArr = A.slice(left, right+1)
    if (tempArr.length % 2 !== 0) arr = tempArr;
  })
  console.log(arr)
  return arr[0];
}*/
function findOdd(A) {
  //happy coding!
  let arr = [];
  A.sort()
  console.log(A)
  A.forEach(n => {
    let left = A.indexOf(n);
    let right = A.lastIndexOf(n)
    let tempArr = A.slice(left, right+1)
    if (tempArr.length % 2 !== 0) arr = tempArr;
  })
  return arr[0];
}

console.log(findOdd([ 1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5 ]))

let arr = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];
console.log(arr.length%2)
arr.sort()
//console.log(arr)
let left = arr.indexOf(5)
//console.log(left)
let right = arr.lastIndexOf(5)
//console.log(right)
let arr2 = arr.slice(left, right+1)
//console.log(arr2)

let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(accumulator, currentValue) {
    let a = accumulator.concat(currentValue);
    console.log(a)
    return a
  },
  []
)
// flattened is [0, 1, 2, 3, 4, 5]

let array = ['hola', 'mundo']

let value = array.reduce((a, b) => a + ' ' + b,'todo bien,')
console.log(value)