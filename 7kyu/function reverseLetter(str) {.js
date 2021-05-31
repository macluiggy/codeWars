/*function reverseLetter(str) {
    //coding and coding..
    let rts = str.match(/[a-z]/g).reverse().join('')
    console.log(rts)
    return rts

}*/

function reverseLetter(str) {
    return str.match(/[a-z]/g).reverse().join('')
}
console.log(reverseLetter("krishan"))


console.log('(hola)'.match(/\(/g))