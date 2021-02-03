## 剑指 Offer 57 - II. 和为 s 的连续正数序列

输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

 

示例 1：

输入：target = 9
输出：[[2,3,4],[4,5]]
示例 2：

输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]
 

限制：

1 <= target <= 10^5

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

滑动窗口 + 暴力
```js
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
  let mid = target % 2 === 0 ? (target / 2) : (target / 2 | 0) + 1
  let res = []
  let temp = []
  let sum = 0
  for (let i = 1; i <= mid; i++) {
    temp.push(i)
    sum = sum + i
    // 如果 sum 大于 target，则退出前置 temp 数
    while (sum > target) {
      sum -= temp[0]
      temp.shift()
    }
    // 如果 sum 等于 target 加入 result
    if (sum === target && temp.length >= 2) {
      res.push([...temp])
    }
  }
  return res
}
```

动态规划
```js
var findContinuousSequence = function(target) {
  let res = []
  let sum = 0
  let end = (target + 1) / 2
  for (let i = 1; i < end; i++) {
    sum = 0
    for (let j = i; j < end; j++) {
      sum += j
      if (sum >= target) {
        if (sum >= target) {
          let sub = new Array(j - i + 1)
          for (let k = i; k < j; k++) {
            sub[k - i] = k
          }
          res.add(sub)
        }
        break
      }
    }
  }
  return res
}
```