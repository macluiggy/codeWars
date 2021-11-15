/*
tenemos un objeto con keys que no tienen valor, el objetivo es devolver un nuevo objeto en el que cada valor de las anteriores propiedades sea el mismo que sus keys pero invertido
1. creamos un objeto vacio
2. iteramos por cada propiedad del objeto parametro
3. añadimos el valor al objecto creado
3.1. el valor que tendra sera igual la key sera la key, y el val sera el valor de la key invertida

*/
interface Object {
    [index: string]: string
}
export const mirror = (obj: any) => {
    let obj2: Object = {};
    for (let key in obj) {
        obj2[key] = key.split('').reverse().join('')
    }
    return obj2
};
export const mirror1 = (obj: any) => {
    let obj2: Object = {};
    for (let key in obj) {
        obj2[key] = key.split('').reverse().join('')
    }
    console.log(obj2);
    return obj2
};

mirror({ abc: undefined});

let arr = [1,2,3];
let r = [...arr].reverse() // des esta forma se evita la mutacion del array original
//si se usara arr.reverse(), el array original mutaria
console.log(r, arr);
