function generateName()
{
  let s = 'qazwsxedcrfvtgbyhnujmikolpñ'
  s = s + s.toUpperCase()
  s = s.split('')
  let str = '';
  while (str.length < 6) {
    let n = Math.floor(Math.random()*55);
    str += s[n];
  }
  return str
}

console.log(generateName());