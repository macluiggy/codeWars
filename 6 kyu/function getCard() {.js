let noRepeatNumber = []
function getCard() {
    // Start your coding here...
    let arr = []
    let BINGO = 'BINGO'.split('')
    let i = 0, j = 0;
    while (i < 6) {
        let tempArr = []
        while(j<6) {
            if(i = 0) {
                let randomNumber = getNumber(15*i-14,15*i);
                tempArr.push(BINGO[i] + randomNumber)
                j++
            }
            let randomNumber = getNumber(15*i-14,15*i);
            if(tempArr.indexOf(randomNumber) === -1) {
                tempArr.push(BINGO[i] + randomNumber)
                j++
            }
        }
        arr.push(...tempArr);
        i++
        j=0
    }
    console.log(arr)
}
getCard()

function getNumber(min, max) {
    let n = Math.floor(Math.random()*(max - min)+min)
    noRepeatNumber.push(n)
    return n
}

let arr = [1,2]
arr = arr.map(el => el*2)
console.log(arr)