function evenLast(numbers) {
  // Good luck
  let total = 0;
  numbers.forEach( (number, i) => {
  	// statements
  	if (i%2 === 0) total += number;
  });
  total = total*numbers[numbers.length -1]
  if (total === NaN) {
  	// statemen
  	return 0
  } else {
  	// statement
  	return total
  }
  return 
}

console.log(evenLast([2, 3, 4, 5]))