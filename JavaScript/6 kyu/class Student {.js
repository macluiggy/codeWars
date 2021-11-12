class Student {
    constructor(name, fives, tens, twenties) {
        this.name = name;
        this.fives = fives;
        this.tens = tens;
        this.twenties = twenties;
    }
}
const andy = new Student("Andy", 1, 0, 2);
const stephen = new Student("Stephen", 0, 2, 0);

function mostMoney(students) {
    // your code here
    if(students.length === 1) return students[0].name
    let maxValue = 0;
    let personWithTheMaxValue;
    let arr = []
    students.forEach((student, i) => {
      let currentValue = student.fives*5 + student.tens*10 + student.twenties*20
      console.log(currentValue)
      arr.push(currentValue)
      if(currentValue > maxValue) {
        maxValue = currentValue;
        personWithTheMaxValue = student.name;
      }
    })
    console.log(arr)
    return arr.every(el => el === arr[0])
    ? 'all'
    : personWithTheMaxValue
}
console.log(mostMoney([stephen]));

var array = new Uint32Array(10);
console.log(Math.floor(0.9))