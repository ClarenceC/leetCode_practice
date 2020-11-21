小扣在秋日市集选择了一家早餐摊位，一维整型数组 staple 中记录了每种主食的价格，一维整型数组 drinks 中记录了每种饮料的价格。小扣的计划选择一份主食和一款饮料，且花费不超过 x 元。请返回小扣共有多少种购买方案。

注意：答案需要以 1e9 + 7 (1000000007) 为底取模，如：计算初始结果为：1000000008，请返回 1

示例 1：

输入：staple = [10,20,5], drinks = [5,5,2], x = 15

输出：6

解释：小扣有 6 种购买方案，所选主食与所选饮料在数组中对应的下标分别是：
第 1 种方案：staple[0] + drinks[0] = 10 + 5 = 15；
第 2 种方案：staple[0] + drinks[1] = 10 + 5 = 15；
第 3 种方案：staple[0] + drinks[2] = 10 + 2 = 12；
第 4 种方案：staple[2] + drinks[0] = 5 + 5 = 10；
第 5 种方案：staple[2] + drinks[1] = 5 + 5 = 10；
第 6 种方案：staple[2] + drinks[2] = 5 + 2 = 7。

示例 2：

输入：staple = [2,1,1], drinks = [8,9,5,1], x = 9

输出：8

解释：小扣有 8 种购买方案，所选主食与所选饮料在数组中对应的下标分别是：
第 1 种方案：staple[0] + drinks[2] = 2 + 5 = 7；
第 2 种方案：staple[0] + drinks[3] = 2 + 1 = 3；
第 3 种方案：staple[1] + drinks[0] = 1 + 8 = 9；
第 4 种方案：staple[1] + drinks[2] = 1 + 5 = 6；
第 5 种方案：staple[1] + drinks[3] = 1 + 1 = 2；
第 6 种方案：staple[2] + drinks[0] = 1 + 8 = 9；
第 7 种方案：staple[2] + drinks[2] = 1 + 5 = 6；
第 8 种方案：staple[2] + drinks[3] = 1 + 1 = 2；

提示：

1 <= staple.length <= 10^5
1 <= drinks.length <= 10^5
1 <= staple[i],drinks[i] <= 10^5
1 <= x <= 2*10^5

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/2vYnGI
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

```js
/**
 * @param {number[]} staple
 * @param {number[]} drinks
 * @param {number} x
 * @return {number}
 */
var breakfastNumber = function(staple, drinks, x) {
    let result = []
    for (let i = 0; i < staple.length; i++) {
        for (let j = 0; j < drinks.length; j++) {
            if (staple[i] + drinks[j] <= x) {
                result.push([i, j])
            }
        }
    }
    console.log(result)
    return result.length % (1e9 + 7)
};

```
上面结果是没问题，结果速度太慢了，过不子单元测试

贪心 + 双指针

```js
var breakfastNumber = function(staple, drinks, x) {
  function cmp (v1, v2) { // 比较函数
    if (v1 > v2) {
      return 1
    } else if (v1 < v2) {
      return -1
    } else {
      return 0
    }
  }

  let ans = 0
  let last = drinks.length - 1
  // 先对两数组排序
  staple.sort(cmp)
  drinks.sort(cmp)

  for (var food of staple) {
    if (food > x) break
    // 如果 food + drink 就加入结果
    if (food + drinks[last] <= x) {
      ans += (last + 1)
    } else {
      // 如果超过就遍历每个 drinks
      while (last > 0) {
        last--
        if (food + drinks[last] <= x) {
          ans += (last + 1)
          break
        }
      }
    }
    if (last < 0) break
  }
  return ans % (1e9 + 7)
}
```