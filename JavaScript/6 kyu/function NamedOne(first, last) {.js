function NamedOne(first, last) {
    // -- SHOULD be changed --
    this.firstName = first;
    this.lastName = last;
    this.fullName = this.firstName+' '+this.lastName
}
NamedOne.prototype = {
    constructor: NamedOne,
    get fullName() {
        return this.firstName+' '+this.lastName
    },
    set fullName(value) {
        value = value.split(' ')
        if(value.length === 2) {
            this.firstName = value[0];
            this.lastName = value[1]
        }
    }
}

var n = new NamedOne('juan', 'andres');
console.log(n)
n.fullName = 'hola a'
console.log(n)