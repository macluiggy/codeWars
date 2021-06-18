function OnceNamedOne(first, last) {
// -- SHOULD be changed --
    this.firstName = first;
    this.lastName = last;
    this.fullName = this.firstName + ' ' + this.lastName;
    Object.freeze(this)
}


var n = new OnceNamedOne('John', 'Doe');
console.log(n)
n.firstName = 'jjj'
console.log(n)