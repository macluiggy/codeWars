class SmallestIntegerFinder {
  findSmallestInt(args) {
  	let smallestInt = args[0]
    args.forEach( (arg) => {
    	if (smallestInt > arg) {
    		smallestInt = arg;
    	}
    });
    return smallestInt
  }
}
console.log(findSmallestInt([78,56,232,12,8]));