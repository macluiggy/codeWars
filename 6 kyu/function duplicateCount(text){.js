function duplicateCount(text){
  //...
  let count = 0;
  let arr = text.toLowerCase().split('').sort();
  arr = [...new Set(arr)]
  console.log(arr)
  arr.forEach(l => {
    let rgx = new RegExp(l, 'gi');
    if(text.match(rgx).length > 1) count ++
  })
  return count
}

console.log(duplicateCount("Indivisibility"))