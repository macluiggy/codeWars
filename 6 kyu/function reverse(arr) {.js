function reverse(arr) {
   return arr.reverse()
}

Array.prototype.reverse = function () {
   let arr2 = [];
   let arr = this
   for (let i = arr.length - 1; i >= 0; i--) {
      arr2.push(arr[i])
   }
   console.log(arr)
   arr = arr2
   console.log(arr)
   return this
}

let arr2 = ['hello','world','how','are','you','?']



console.log(reverse(arr2))