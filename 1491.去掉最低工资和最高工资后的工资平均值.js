/**
 * @param {number[]} salary
 * @return {number}
 */

 function countingSort(array) {
   if (array.length < 2) {
     return array
   }
   const maxValue = Math.max(...array)
   const counts = new Array(maxValue + 1)
   array.forEach(element => {
     if(!counts[element]) {
       counts[element] = 0
     }
     counts[element]++
   })
   let sortedIndex = 0
   counts.forEach((count, index) => {
     while(count > 0) {
       array[sortedIndex++] = index
       count--
     }
   })
   return array
 }

 var average = function(salary) {
   const sortedArr = countingSort(salary)
   let total = 0
   sortedArr.pop()
   sortedArr.shift()
   for (let i = 0; i < sortedArr.length; i++) {
     total += sortedArr[i]
   }
   return total/sortedArr.length
 }
var arr = [4000,3000,1000,2000]
average(arr) // 2500.00