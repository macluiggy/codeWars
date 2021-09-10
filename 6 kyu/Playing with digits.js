function digPow(n, p){
  // ...
  let arr = n.toString().split('')
  let arr2 = arr.reduce((sum, c, i) => sum + c**(p+i), 0)
  return arr2
}

console.log(digPow(89, 1))