function NamedOne(first, last) {
// -- SHOULD be changed --
    let regex = new RegExp(first + ' ' + last, 'g')
    console.log(regex)
    this.firstName = first;
    this.lastName = last;
    this.fullName = first + ' ' + last
    let r = regex.test(this.fullName)
    console.log(r)
}

var n = new NamedOne('juan', 'andres');
console.log(n)
n.fullName = 'jajj'
console.log(n)
