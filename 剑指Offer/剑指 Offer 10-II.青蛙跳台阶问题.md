## 剑指 Offer 10-II.青蛙跳台阶问题

一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

示例 1：

输入：n = 2
输出：2
示例 2：

输入：n = 7
输出：21
示例 3：

输入：n = 0
输出：1
提示：

0 <= n <= 100

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


动态规划
```js
/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
  const arr = new Array(n + 1).fill(0)
  arr[0] = 1
  arr[1] = 1
  arr[2] = 2
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1000000007
  }
  return arr[n]
}
```

```js
var numWays = function(n) {
  let dp = []
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <=n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
  }
  return dp[n]
}
```

递归 + 备忘录

```js
var numWays = function(n) {
  let map = new Map()
  function f(n) {
    if (n < 1) { map.set(n, 1) }
    if (n === 1) { map.set(n, 1) }
    if (n === 2) { map.set(n, 2) }
    if (!map.has(n)) {
      let result = (f(n - 1) + f(n - 2)) % 1000000007
      map.set(n, result)
    }
    return map.get(n)
  }
  return f(n)
}
```