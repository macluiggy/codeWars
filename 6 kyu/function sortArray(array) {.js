/*function sortArray(array) {
  // Return a sorted array.
  console.log(array)
  let i = 0;
  let a = array.filter(n => n%2 !== 0).sort((a,b) => a-b)
  let a2 = array.map(n => {
    if (n%2 !== 0) {
      n = a[i];
      i++
      return n
    }
    return n
  })
  console.log(a)
  console.log(a2)
  return a2
}*/
function sortArray(array) {
  // Return a sorted array.
  let i = 0;
  let a = array.filter(n => n%2 !== 0).sort((a,b) => a-b)
  let a2 = array.map(n => {
    if (n%2 !== 0) {
      n = a[i];
      i++
      return n
    }
    return n
  })
  return a2
}
sortArray([ 1, 3, 2, 8, 5, 4, 11 ])