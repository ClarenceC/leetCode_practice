// 349.两个数组的交集

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  var set1 = new Set([...nums1])
  var result = new Set()
  for (var i = 0; i < nums2.length; i++) {
    if ( set1.has(nums2[i]) ) {
      result.add(nums2[i])
    }
  }
  return Array.from(result)
};

// Run

var num1 = [1, 2, 2, 1]
var num2 = [2, 2]

intersection(nums, num2) // [2]

var nums1 = [4,9,5], nums2 = [9,4,9,8,4]

intersection(nums, num2) // [9, 4]