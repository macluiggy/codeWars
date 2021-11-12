function digPow(n, p){
  // ...
  let arr = n.toString().split('')
  let n2 = arr.reduce((sum, c, i) => sum + c**(p+i), 0)
  k = 0;
  let r;
  while (n*k !== n2 && n*k < n2) {
    k++
    if (n*k === n2) {
      r = k
    } else {
      r = -1
    }  
  }
  return r
}

console.log(digPow(46288, 3))