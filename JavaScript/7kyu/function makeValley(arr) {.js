function makeValley(arr) {
    // Your code
    let arr2 = []
    arr.sort((a, b) => a - b);
    console.log(arr)
    arr.forEach((num, i) => {
        // statements
        if (arr.length % 2 === 0) {
            // statement
            if (i % 2 === 0) {
                // statements
                arr2.push(num);
            } else {
                // statement
                arr2.unshift(num)
            }
        } else {
            // statement
            if (i % 2 === 0) {
                // statements
                arr2.unshift(num);
            } else {
                // statement
                arr2.push(num)
            }
        }
    });
    console.log(arr2)
    return arr2
}

makeValley([20, 7, 6, 2])