function getSum( a,b )
{
   //Good luck!
   let max = 0;
   let min = 0;
   if (a > b) {
   	max = a;
   	min = b;
   } else {
   	max = b;
   	min = a;
   }
   let total = 0;
   for(let i = min, length1 = max; i <= length1; i++){
   	total += i;
   }
   return total
}

console.log(getSum(-1,3))