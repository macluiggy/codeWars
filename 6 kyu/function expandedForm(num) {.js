/*function expandedForm(num) {
    // Your code here
    let arr = num.toString().split('')
    let l = arr.length - 1;
    let exp = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) exp.push(arr[i] + '0'.repeat(l))
        l--
    }
    return exp.join(' + ')
}*/
function expandedForm(num) {
    // Your code here
    let arr = num.toString().split('')
    let l = arr.length - 1;
    let exp = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) exp.push(arr[i] + '0'.repeat(l-i))
    }
    return exp.join(' + ')
}
console.log(expandedForm(703043438809))


/*let n = 123;
let arr = n.toString().split('')
let l = arr.length - 1
let exp = []
for (let i = 0; i < arr.length; i++) {
    exp.push(arr[i] + '0'.repeat(l))
    l--
}
console.log(exp)
console.log(exp.join(' + '))*/