var countBits = function(n) {
  // Program Me
  return n > 0 ? n.toString(2).match(/1/g).length : 0
};

console.log(countBits(0))
let n = 7
console.log(n&1)
console.log(n.toString(2).match(/1/g))