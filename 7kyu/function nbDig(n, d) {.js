/*function nbDig(n, d) {
    // your code
    let arr = []
    for (let i = 0; i <= n; i++) {
        arr.push(i**2);
    }
    let string = arr.join('');
    //console.log(string);
    let regex = new RegExp(d, 'g')
    let arr2 = string.match(regex)
    console.log(arr2.length)
    return arr2.length
}*/

function nbDig(n, d) {
    // your code
    let arr = []
    for (let i = 0; i <= n; i++) {
        arr.push(i**2);
    }
    return arr.join('').match(new RegExp(d, 'g')).length
}
console.log(nbDig(11549, 1))
console.log('122211 223 2 1'.match(/1/g))
let a = '123112435'.split('1').length - 1
console.log(a)