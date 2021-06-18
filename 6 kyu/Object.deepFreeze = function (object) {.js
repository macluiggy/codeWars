Object.deepFreeze = function (object) {
  Object.freeze(object);
  //...
  for(let prop in object) {
    //console.log(typeof object[prop])
    if(typeof object[prop] === 'object') subObjFreeze(object[prop])
  }
}

function subObjFreeze(subObj) {
  Object.freeze(subObj)
  for(let subProp in subObj) {
    console.log(typeof subObj[subProp])
    if(typeof subObj[subProp] === 'object') subObjFreeze(subObj[subProp]);
  }
}


obj = {
  hola: 'hello',
  obj2: {
    hola2: 'hello2',
    obj3: {
      hola3: 'hello3'
    }
  }
}
Object.freeze(obj)
Object.deepFreeze(obj)
obj.hola = 'jaja'
console.log(typeof obj.obj2)
obj.obj2.hola2 = 'jdjdj'
obj.obj2.obj3.hola3 = 'dd'
console.log(obj)