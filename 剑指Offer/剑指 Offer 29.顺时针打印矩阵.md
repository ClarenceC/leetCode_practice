## 剑指 Offer 29.顺时针打印矩阵

输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

 

示例 1：

输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
示例 2：

输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

```js
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) return []
  const res = []

  let top = 0
  let bottom = matrix.length - 1
  let left = 0
  let right = matrix[0].length - 1

  while (top < bottom && left < right) {
    for (let i = left; i < right; i++) res.push(matrix[top][i]) // 上层
    for (let i = top; i < bottom; i++) res.push(matrix[i][right]) // 右层
    for (let i = right; i > left; i--) res.push(matrix[bottom][i]) // 下层
    for (let i = bottom; i > top; i--) res.push(matrix[i][left])

    right--
    top++
    bottom--
    left++
  }
  if (left == right && top != bottom) {
    for (let i = top; i <= bottom; ++i) {
      res.push(matrix[i][left])
    }
  } else if (top == bottom && left != right) {
    for (let i = left; i <= right; ++i) {
      res.push(matrix[top][i])
    }
  } else if (top == bottom && left == right) {
    res.push(matrix[left][top])
  }
  return arr
}
```

```js
const spiralOrder = (matrix) => {
  if (matrix.length == 0) return []
  const res = []
  const size = matrix.length * matrix[0].length // 长度*高度

  let top = 0
  let bottom = matrix.length - 1
  let left = 0
  let right = matrix[0].length - 1

  while (res.length !== size) {
    for (let i = left; i < right; i++) {
      res.push(matrix[top][i])
    }
    top++
    for (let i = top; i < bottom; i++) {
      res.push(matrix[i][right])
    }
    right--
    if (res.length === size) break
    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i])
    }
    bottom--
    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left])
    }
    left++
  }
  return res
}
```