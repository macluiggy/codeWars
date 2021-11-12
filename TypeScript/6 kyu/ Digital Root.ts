/*
1. convertimos el numro a un string
2. creamos un array que contenga cada digito del numero
3. sumamos cada digito del numero
4. al resultado de esa suma le hacemos los pasos 1 y 2
5. si el length de ese array es mayor a uno volvemos al paso 1. con la suma del actual numero
6. si no retornamos la suma del numero
*/

export const digitalRoot1 = (n:number): number => {
    // your code here
    let digits = `${n}`.split('') //paso 1 y dos
    let sumOfDigits = digits.reduce((sum, num) => +num + sum, 0) //paso 3
    //  console.log(sumOfDigits);
    let digitsOfSumOfDigits = `${sumOfDigits}`.split('') // paso 4
    if (digitsOfSumOfDigits.length >= 2) {
        return digitalRoot(sumOfDigits)
    }
    return sumOfDigits
};


export const digitalRoot = (n:number): number => {
    let digits = `${n}`.split('')
    let sumOfDigits = digits.reduce((sum, num) => +num + sum, 0)
    let digitsOfSumOfDigits = `${sumOfDigits}`.split('') 
    if (digitsOfSumOfDigits.length >= 2) {
        return digitalRoot(sumOfDigits)
    }
    return sumOfDigits as number
};

  console.log(digitalRoot(942));
  