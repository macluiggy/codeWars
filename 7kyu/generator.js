function* generator(a) {
    let b = 1;
    yield `${a} x ${b++} = ${a * (b-1)}`;
    yield `${a} x ${b++} = ${a * (b-1)}`;
    yield `${a} x ${b++} = ${a * (b-1)}`;
    yield `${a} x ${b++} = ${a * (b-1)}`;
    yield `${a} x ${b++} = ${a * (b-1)}`;
    yield `${a} x ${b++} = ${a * (b-1)}`;
    yield `${a} x ${b++} = ${a * (b-1)}`;
    yield `${a} x ${b++} = ${a * (b-1)}`;
    yield `${a} x ${b++} = ${a * (b-1)}`;
    yield `${a} x ${b++} = ${a * (b-1)}`;
}

var gen = generator(445);
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(Math.PI)
console.log('141592653589793'.length)