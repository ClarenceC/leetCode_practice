59. 滑动窗口的最大值

给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

示例:

输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
解释: 

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
 

提示：

你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

```js
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
```

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k = 0) {
  let queue = []
  let result = []
  let max = nums[0]
  // 入队列
  for (let i = 0; i < k; i++) {
      queue.push(nums[i])
      if (nums[i] > max) {
      max = nums[i]
      }
  }
  if (queue.length == 0) { return result }
  result.push(max)
  for (let i = k; i < nums.length; i++) {
      queue.shift()
      queue.push(nums[i])
      result.push(Math.max(...queue))
  }
  return result
}
```

暴力解法

```js
var maxSlidingWindow = function(nums, k) {
  if (k <= 1) return nums
  const res = []
  for (let i = 0; i < nums.length - k + 1; i++) {
    res.push(Math.max(...nums.slice(i, i + k)))
  }
  return res
}
```

DP

```js
var maxSLidingWindow = function(nums, k) {
  if (k == 1) return nums
  const length = nums.length
  if (!length) return []

  const left = new Array(length)
  const right = new Array(length)

  left[0] = nums[0] // 头部开始
  right[length - 1] = nums[length - 1] // 尾部开始

  for (let i = 1; i < length; i++) {
    if (i % k) {
      left[i] = Math.max(nums[i], left[i - 1])
    } else {
      left[i] = nums[i]
    }

    let j = length - i - 1
    if((j + 1) % k) {
      right[j] = Math.max(nums[j], right[j + 1])
    } else {
      right[j] = nums[j]
    }
  }

  const res = []
  for (let i = 0; i < length - k + 1; i++) {
    res.push(Math.max(right[i], left[i + k - 1]))
  }
  return res
}
```