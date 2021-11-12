/*function songDecoder(song){
  // ...
  console.log(song)
  let s = song.replace(/(WUB)+/g, ' ').trim()
  console.log(s)
  return s
}*/
function songDecoder(song){
  // ...
  return song.replace(/(WUB)+/g, ' ').trim()
}
console.log(songDecoder("WUBJKDWUBWUBWBIRAQKFWUBWUBYEWUBWUBWUBWVWUBWUB"))
console.log('WUBJKDWUBWUBWBIRAQKFWUBWUBYEWUBWUBWUBWVWUBWUB'.match(/(WUB)+/g))

console.log('WUBJKDWUBWUBWBIRAQKFWUBWUBYEWUBWUBWUBWVWUBWUB'.split('WUB').filter(Boolean).join(' '))