function repeatStr (n, s) {
  return '';
}

repeatStr = (n, s) => {
	let palabra = '';
	for(let i = 0; i < n; i++){
		palabra += s;
	}
	return palabra;
}
console.log(repeatStr(3, "*"))