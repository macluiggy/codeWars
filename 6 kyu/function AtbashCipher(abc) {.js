function AtbashCipher(abc) {
  console.log(abc)
  var zyx = abc
  abc = abc.split('')
  zyx = zyx.split('').reverse()
  this.encode = function (str) {
    //...
    let rts = str.split('').map(l => zyx[abc.indexOf(l.toLowerCase())]).join('')
    let rg = new RegExp(str, 'g')
    return rg.test(str) ? rts.toUpperCase(): rts
  };
  this.decode = function (str) {
    //...
    let rts = str.split('').map(l => abc[zyx.indexOf(l.toLowerCase())]).join('');
    let rg = new RegExp(str, 'g')
    return rg.test(str) ? rts.toUpperCase(): rts
  };
}
var abc = 'abcdefghijklmnopqrstuvwxyz';
var c = new AtbashCipher(abc);
console.log(c.encode('abc'))
console.log(c.encode('codewars'))