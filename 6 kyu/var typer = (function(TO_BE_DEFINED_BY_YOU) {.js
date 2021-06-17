var typer = (function(TO_BE_DEFINED_BY_YOU) {
  
  return {
    isNumber:    x => typeof x != "undefined" && typeof x.valueOf() == "number" && !isNaN(x.valueOf()),
    isString: v => typeof v !== undefined && typeof v.valueOf() === 'string',
    isArray: v => Array.isArray(v),
    isFunction: v => typeof v === 'function' ? true : false,
    isDate: v => v instanceof Date,
    isRegExp: v =>  v instanceof RegExp,
    isBoolean: v => typeof v !== undefined && typeof v.valueOf() === 'boolean',
    isError: v => v instanceof Error,
    isNull: v => v === null,
    isUndefined: v => v === undefined
  };
}(null));
console.log(typeof null)
console.log(typer.isNumber(999))
console.log(typer.isString(''))
console.log(typer.isArray(['that\'s a string']))
console.log(typer.isFunction(() => 'hello'))
console.log(typer.isDate(new Date))
console.log(typer.isBoolean(false))
console.log(typer.isError())
console.log(typer.isNull(null))
console.log(typer.isUndefined(undefined))

/*let assert = {
  equal: (a, b) => a === b
}*/
let assert = (function(){
  return {
    equal: (a, b) => a === b
  }
}())
console.log(assert.equal(typer.isNumber(5), true));