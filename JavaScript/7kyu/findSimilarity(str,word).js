function findSimilarity(str,word){
  //coding here
  word = word.toLowerCase()
  let msg = '';
  let count = 0;
  let arr = str.split(' ');
  let filteredArr = [];
  for(let i = 0, length1 = arr.length; i < length1; i++){
  	let el = arr[i];
  	let regex = new RegExp(`^${word[0]}.${word[word.length - 1]}$`, "gi")
  	if (regex.test(el.toLowerCase())) {
  		// statement
  		filteredArr.push(el)
  	}
  }
  let arrComplete = [...new Set(filteredArr)];
  msg = arrComplete.join(' ')
  return msg
}

console.log(findSimilarity("vRllN QRo cUz gdI SImLC fyQhN Gzi PWzja SxTdC VlQ SdmKC ImF","SWyfC"))
