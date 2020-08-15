// 1.两数之和

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 var twoSum = function(nums, target) {
   var first, second
   for (var i = 0;  i < nums.length; i++) {
     for (var j = i + 1; j < nums.length; j++) {
        second = j
        break
     }
     if (nums[i] + nums[j] == target) {
       first = i
       second = j
       break
     }
   }
   return [first, second]
 }

 // Run

 var nums = [2, 7, 11, 15], target = 9

 twoSum(nums, target) //  [0, 1]