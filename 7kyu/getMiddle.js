
let getMiddle = s => s.length % 2 === 0 ?
    s[s.length / 2 - 1] + s[s.length / 2] :
    s[s.length / 2 - 0.5];

console.log(getMiddle("test"))
console.log(getMiddle("testing"))