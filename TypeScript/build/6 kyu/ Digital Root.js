"use strict";
/*
1. convertimos el numro a un string
2. creamos un array que contenga cada digito del numero
3. sumamos cada digito del numero
4. al resultado de esa suma le hacemos los pasos 1 y 2
5. si el length de ese array es mayor a uno volvemos al paso 1. con la suma del actual numero
6. si no retornamos la suma del numero
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.digitalRoot = exports.digitalRoot1 = void 0;
var digitalRoot1 = function (n) {
    // your code here
    var digits = ("" + n).split(''); //paso 1 y dos
    var sumOfDigits = digits.reduce(function (sum, num) { return +num + sum; }, 0); //paso 3
    //  console.log(sumOfDigits);
    var digitsOfSumOfDigits = ("" + sumOfDigits).split(''); // paso 4
    if (digitsOfSumOfDigits.length >= 2) {
        return (0, exports.digitalRoot)(sumOfDigits);
    }
    return sumOfDigits;
};
exports.digitalRoot1 = digitalRoot1;
var digitalRoot = function (n) {
    var digits = ("" + n).split('');
    var sumOfDigits = digits.reduce(function (sum, num) { return +num + sum; }, 0);
    var digitsOfSumOfDigits = ("" + sumOfDigits).split('');
    if (digitsOfSumOfDigits.length >= 2) {
        return (0, exports.digitalRoot)(sumOfDigits);
    }
    return sumOfDigits;
};
exports.digitalRoot = digitalRoot;
console.log((0, exports.digitalRoot)(942));
