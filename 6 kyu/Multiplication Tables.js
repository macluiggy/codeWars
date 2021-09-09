/*function multiplicationTable(row,col){
  //your code here
  let arr1 = makeAnArray(row)
  let arr2 = makeAnArray(col)
  let arr3 = arr1.map(num => arr2.map(num2 => num*num2))
  return arr3
}*/
function multiplicationTable(row,col){
  return makeAnArray(row).map(num => makeAnArray(col).map(num2 => num*num2))
}
const makeAnArray = n => {
  let arr = []
  for (var i = 1; i <= n; i++) {
    arr.push(i)
  }
  return arr
}

console.log(multiplicationTable(2,2))