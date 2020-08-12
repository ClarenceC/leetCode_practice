// 703-数据流中的第K大元素

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.queue = nums
  this.range = k
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  this.queue.push(val)
  var sortArr = [...this.queue]
  sortArr.sort((a, b) => a - b)
  return this.queue[this.sortArr.length - this.range]
}

// Run
var k = 3
var arr = [4, 5, 8, 2]

var kthLargest = new KthLargest(k, arr)
kthLargest.add(3) // 4
kthLargest.add(5) // 5
kthLargest.add(10) // 5
kthLargest.add(9) // 8
kthLargest.add(4) // 8


