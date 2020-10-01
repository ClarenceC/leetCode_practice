## LCP 19. 秋叶收藏集

小扣出去秋游，途中收集了一些红叶和黄叶，他利用这些叶子初步整理了一份秋叶收藏集 leaves， 字符串 leaves 仅包含小写字符 r 和 y， 其中字符 r 表示一片红叶，字符 y 表示一片黄叶。
出于美观整齐的考虑，小扣想要将收藏集中树叶的排列调整成「红、黄、红」三部分。每部分树叶数量可以不相等，但均需大于等于 1。每次调整操作，小扣可以将一片红叶替换成黄叶或者将一片黄叶替换成红叶。请问小扣最少需要多少次调整操作才能将秋叶收藏集调整完毕。


示例 1：

输入：leaves = "rrryyyrryyyrr"

输出：2

解释：调整两次，将中间的两片红叶替换成黄叶，得到 "rrryyyyyyyyrr"

示例 2：

输入：leaves = "ryr"

输出：0

解释：已符合要求，不需要额外操作

提示：

3 <= leaves.length <= 10^5
leaves 中只包含字符 'r' 和字符 'y'

```js
/**
 * @param {string} leaves
 * @return {number}
 */

var minimumOperations = function(leaves) {
    if (leaves.length === 0) { return 0 }
    let count = 0
    let yStart = leaves.indexOf('y')
    let yEnd = leaves.lastIndexOf('y')
    if ((yStart == -1 || yEnd == -1) && leaves.length > 2) { return 1 }
    let yList = leaves.slice(yStart, yEnd + 1)
    for (let i = 0; i < yList.length; i++) {
        if (yList[i] === 'r') {
            count++
        }
    }
    if ((yStart == 0 || yEnd == leaves.length - 1) && count == 0) {
        if (yList.length > 1) {
            return 1
        }
        return 2
    } else {
        
    }
    console.log(yStart, yEnd, yList)
    return count
};
```
题解
```js
/**
 * @param {string} leaves
 * @return {number}
 */

var minimumOperations = function (leaves) {
  var len = leaves.length
  var dp = [leaves[0] === 'r' ? 0 : 1, Infinity, Infinity]

  for (var i = 1; i < len; i++) {
    var isRed = leaves[i] === 'r'
    dp = [
      dp[0] + (isRed ? 0 : 1),
      Math.min(dp[0], dp[1]) + (isRed ? 1 : 0),
      Math.min(dp[1], dp[2]) + (isRed ? 0 : 1)
    ]
  }
  return dp[2]
}
```

```js
/**
 * @param {string} leaves
 * @return {number}
 */

var minimumOperations = function (leaves) {
  const len = leaves.length
  let dp_arr = new Array(3)
  for (let i = 0; i < 3; i++) {
    dp_arr = new Array(len)
  }
  //  第一种状态(红叶子)可以从 i = 0 开始
  dp_arr[0][0] = leaves[0] ==  'r' ? 0 : 1
  for(let i = 1; i < len; i++) {
    dp_arr[0][i] = leaves[i] == 'r' ? dp_arr[0][i - 1] : dp_arr[0][i - 1] + 1
  }

  dp_arr[1][1] = leaves[1] == 'y' ? dp_arr[0][0] : dp_arr[0][0] + 1
  for(let i = 2; i < len; i++) {
    dp_arr[1][i] == leaves[i] == 'y'
      ? Math.min(dp_arr[1][i - 1], dp_arr[0][i - 1])
      : Math.min(dp_arr[1][i - 1], dp_arr[0][i - 1]) + 1
  }
  dp_arr[2][2] = leaves[2] == 'r' ? dp_arr[1][1] : dp_arr[1][1] + 1
  for(let i = 3; i < len; i++) {
    dp_arr[2][i] = leaves[i] == 'r'
      ? Math.min(dp_arr[2][i - 1], dp_arr[1][i - 1])
      : Math.min(dp_arr[2][i - 1], dp_arr[1][i - 1]) + 1
  }
  return dp_arr[2][len - 1]
}
```