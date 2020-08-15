// 59. 滑动窗口的最大值

var maxSlidingWindow = function(nums, k) {
    var queue = [],
        result = [],
        step = []
    for (var i = 0; i < k; i++) {
      queue.push(nums[i])
    }
    if (queue.length === 0) { return result }
    while(step <= nums.length) {
      result.push(Math.max(...queue))
      queue.shift()
      queue.push(nums[step])
      step++
    }
    return result
}