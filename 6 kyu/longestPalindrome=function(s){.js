longestPalindrome=function(s){
  //your code here
  let arr = s.split('').map(l => s.slice(s.indexOf(l), s.lastIndexOf(l) + 1));
  let arr2 = [...new Set(arr)]
  let maxArr = arr2.map(el => el.length)
  let max = Math.max(...maxArr)
  return max
}
console.log(longestPalindrome("baablkj12345432133d"));
let str = 'baablkj12345432133d';
let right = str.split('').map(l => str.slice(str.indexOf(l), str.lastIndexOf(l) + 1))
let arr = [...new Set(right)]
//console.log(right, arr)

let maxArr = arr.map(el => el.length)
let max = Math.max(...maxArr)
console.log(max)