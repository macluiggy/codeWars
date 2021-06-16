
function getCard() {
    // Start your coding here...
    let arr = []
    let BINGO = 'BINGO'.split('')
    let a = 0;
    let s = '';
    BINGO.map((l, i) => {
        let k = i == 2 ? 1 : 0
            for(let j = k; j < 5;) {
                let random = getNumber(15*(i+1)-14,15*(i+1));
                if (arr.indexOf(random) === -1) {
                    s+= BINGO[i] + random + ' '
                    arr.push(random)
                    j++
                }
            }
        })
    s = s.trim().split(' ')
    console.log(s)
    return s
}
getCard()

function getNumber(min, max) {
    let n = Math.floor(Math.random()*(max - min)+min)
    return n
}

let arr = [1,2]
arr = arr.map(el => el*2)
console.log(arr)