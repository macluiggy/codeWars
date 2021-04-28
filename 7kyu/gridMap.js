function gridMap(fn, a) {
    let resultArray = [];
    for (let i = 0, length1 = a.length; i < length1; i++) {
        const subArray = a[i];
        let subResultArray = [];
        for (let j = 0, length1 = subArray.length; j < length1; j++) {
            const el = subArray[j];
            subResultArray.push(fn(el));
        }
        resultArray.push(subResultArray);
    }
    console.log(resultArray)
    return resultArray;
}
const numberGrid = [
    [1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [0, 2, 4]
];
console.log(gridMap(x => x + 1, numberGrid))


/*
let fn1 = x => x + 1;
let resultArray = [];

for (let i = 0, length1 = numberGrid.length; i < length1; i++) {
    const subArray = numberGrid[i];
    let subResultArray = [];
    for (let j = 0, length1 = subArray.length; j < length1; j++) {
        const el = subArray[j];
        subResultArray.push(fn1(el));
    }
    resultArray.push(subResultArray);
}
console.log(resultArray)
*/