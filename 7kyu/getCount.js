

let getCount = str => str.match(/[aeiou]/g) == null ? 0 : str.match(/[aeiou]/g).length;
console.log(getCount('my pyx'))
console.log('algoritms'.match(/[aeiou]/g).length)