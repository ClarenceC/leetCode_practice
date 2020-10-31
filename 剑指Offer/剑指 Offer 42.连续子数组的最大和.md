## 剑指 Offer 42.连续子数组的最大和

输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

要求时间复杂度为O(n)。

 

示例1:

输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 

提示：

1 <= arr.length <= 10^5
-100 <= arr[i] <= 100

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

动态规则 DP

```js
/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
  const dp = []
  let res = nums[0], // 初始化 res 值
      dp[0] = nums[0]
  for (let i = 1;  i < nums.length; ++i) {
    dp[i] = nums[i] // 初始化 dp 索引 i 的值
    if (dp[i - 1] > 0) {
      dp[i] += dp[i - 1] // 加上一个的和
    }
    res = Math.max(res, dp[i]) // 比较结果和上一个 dp 的集合的和比较
  }
  return res
};
```

原地进行动态规则
```js
var maxSubArray = function(nums) {
  let res = nums[0]
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i - 1]> 0) {
      nums[i] += nums[i - 1]
    }
    res = Math.max(nums[i], res)
  }
  return res
}
```

贪心算法

```js
var maxSubArray = function(nums) {
  let maxSum = nums[0],
      sum = nums[0]
  for (let i = 1; i < nums.length; ++i) {
    sum = Math.max(nums[i], sum + nums[i]) // 保存和之前最大值到 sum
    maxSum = Math.max(maxSum, sum) // 比较 maxSum 和 sum 最大值
  }
  return maxSum
}
```

分治法

```js
function crossSum(nums, left, right, mid) {
  if (left === right) {
    return nums[left]
  }
  let leftMaxSum = Number.MIN_SAFE_INTEGER
  let leftSum = 0
  for (let i = mid; i >= left; --i) {
    leftSum += nums[i]
    leftMaxSum = Math.max(leftMaxSum, leftSum)
  }
  let rightMaxSum = Number.MIN_SAFE_INTEGER
  let rightSum = 0
  for (let i = mid + 1; i <=  right; ++i) {
    rightSum += nums[i]
    rightMaxSum = Math.max(rightMaxSum, rightSum)
  }
  return leftMaxSum + rightMaxSum
}

function __maxSubArray(nums, left, right) {
  if (left === right) {
    return nums[left]
  }
  const mid = Math.floor((left + right) / 2)
  const lsum = __maxSubArray(nums, left, mid) // 计算左边
  const rsum = __maxSubArray(nums, mid + 1, right) // 计算右边
  const cross = crossSum(nums, left, right, mid) // 计算中间

  return Math.max(lsum, rsum, cross) // 返回最大值
}

var maxSubArray = function(nums) {
  return __maxSubArray(nums, 0, nums.length - 1)
}
```