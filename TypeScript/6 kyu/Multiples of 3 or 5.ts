export class Challenge1 {
    static solution(number: number) {
        if (number <= 0) return 0
        let arr = []
        for (let i = 0; i < number; i++) {
            arr.push(i)
            
        }
        let arr2 = arr.filter((num) => num%3 === 0 || num %5 === 0)
        let arr3 = arr2.reduce((acum, current) => acum + current)
      return arr
                .filter((num: number): boolean => num % 3 === 0 || num %5 === 0)
                .reduce((acum: number, current: number): number => current + acum)
    }
}
export class Challenge {
    static solution(number: number) {
        if (number <= 0) return 0
        let arr: number[] = []
        for (let i = 0; i < number; i++) {
            arr.push(i)
        }
      return arr
                .filter((num: number): boolean => num % 3 === 0 || num %5 === 0)
                .reduce((acum: number, current: number): number => current + acum)
    }
}
console.log(Challenge.solution(10));

console.log(1%3);
console.log([...Array(10)].map((_, i) => i));

