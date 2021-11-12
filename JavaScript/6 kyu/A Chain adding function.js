function add(n){
  // Let the currying begin!
  return n2 => n3 => n+n2+n3
}

console.log(add(1)(2)(3))

let point = {
x: 3,
y: 4,
valueOf: function() { return Math.hypot(this.x, this.y);
}
};
console.log(Number(point)) // => 5: valueOf() is used for conversions to numbers
point > 4
// => true
point > 5
// => false
point < 6