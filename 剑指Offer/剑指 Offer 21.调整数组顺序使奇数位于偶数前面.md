## 剑指 Offer 21.调整数顺序使奇数位于偶数前面

输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。

 

示例：

输入：nums = [1,2,3,4]
输出：[1,3,2,4] 
注：[3,1,2,4] 也是正确的答案之一。
 

提示：

1 <= nums.length <= 50000
1 <= nums[i] <= 10000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
  let result1 = []
  let result2 = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      result2.push(nums[i])
    } else {
      result1.push(nums[i])
    }
  }
  return result1.concat(result2)
}
```

双指针
```js
var exchange = function(nums) {
  while (nums[i] % 2 !== 0 && i < len) {
      i++
  }
  while (nums[j] % 2 === 0 && j > 0) {
      j--
  }
  if (i >= j || i >= len || j < 0) { break }
  let temp = nums[j]
  nums[j] = nums[i]
  nums[i] = temp
  j--
  i++
}
```