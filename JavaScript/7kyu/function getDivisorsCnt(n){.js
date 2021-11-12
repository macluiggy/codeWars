function getDivisorsCnt(n){
    // todo
    let arr = []
    for(let i = 1, length1 = n; i <= length1; i++){
    	if (n % i === 0) {
    		// statement
    		arr.push(i)
    	}
    }
    console.log(arr)
    return arr.length
}

getDivisorsCnt(10)