function SeriesSum(n)
{
  // Happy Coding ^_^
  let total = 0
  for(let j = 0, length2 = n; j < length2; j++){
  	total += 1/(1 + 3*j)
  }
  //return total.toString().match(/\d+.\d\d/g)[0]
  return total.toFixed(2)
}

console.log(SeriesSum(4))