## 剑指 Offer 38.字符串的排列


输入一个字符串，打印出该字符串中字符的所有排列。

 
你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。


示例:

输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
 
```js
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    const res = new Set() //
    const visit = {} // 字符字典
    function dfs(path) { // 深度遍历
      if (path.length === s.length) return res.add(path)
      for (let i = 0; i < s.length; i++) {
        if (visit[i]) continue
        visit[i] = true // 已添加的时候
        dfs(path + s[i]) // 开启深度递归
        visit[i] = false
      }
    }
    dfs('')
    return [...res]
};
```