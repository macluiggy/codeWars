/*function duplicateEncode(word) {
    // ...
    let arr = word.split('');
    let str = ''
    let word2 = word

    for (let i = 0; i < word.split('').length; i++) {
        let regex = new RegExp(word.split('')[i], 'gi');
        //console.log(regex)
        let match = word.match(regex)
        //console.log(match)
        if (match.length > 1) {
            word2 = word2.replace(regex, ')')
        } else {
            word2 = word2.replace(regex, '(')
        }
    }
    return word2
}*/
function duplicateEncode(word) {
    // ...
    return word.
    toLowerCase()
    .split('')
    .map((el, i, word) => word.indexOf(el) === word.lastIndexOf(el) ? '(' : ')')
    .join('')
}

console.log(duplicateEncode("(()))(@@((("))

arr = 'aeioueia'.split('').sort().join('').match(/\w+/g)
console.log(arr)
