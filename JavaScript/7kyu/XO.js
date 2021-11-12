let XO = str => {
	let array = str.match(/x|o/gi)
	if (array == null) {
		// statement 
		return true;
	}
    let arrayX = [];
    let arrayY = [];
    for (let i = 0, length1 = array.length; i < length1; i++) {
        const letter = array[i];
        if (letter == 'x' || letter == 'X') {
            // statement
            arrayX.push(letter);
        }
        if (letter == 'o' || letter == 'O') {
            // statement
            arrayY.push(letter);
        }
    }
    return arrayY.length == arrayX.length;
}

console.log(XO("oooxxX"))
let array = 'xxxOo'.match(/x|o/g)
console.log(array)
