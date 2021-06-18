function cmp(section1, section2) {
  console.log(section1)
  console.log(section2)
    let left = section1.split('.')
    let right = section2.split('.')
    if (left.length < right.length) left.push(...'0'.repeat(right.length - left.length))
    if (left.length > right.length) right.push(...'0'.repeat(left.length - right.length))
    if (left.join('') === right.join('')) {
      return 0
    }
    for(let i = 0; i < left.length; i++) {
      let s1 = left[i];
      let s2 = right[i]
      if(s1 < s2){
        return -1
      } else if (s1 > s2) {
        return 1
      }
    }
    console.log(left, right)
}

console.log(cmp("33.87.72.75.38", "33.87.72.75.38"))
let n = 0
console.log(...'n'.repeat(2).split(''))
console.log('3' > '4')