## 剑指 Offer 50.第一个只出现一次的字符

在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

示例:

s = "abaccdeff"
返回 "b"

s = "" 
返回 " "
 

限制：

0 <= s 的长度 <= 50000



来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

```js
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  if (s == "") { return ' ' }
  let hash = {}
  for (let i = 0; i < s.length; i++) {
      if (hash[s[i]]) {
          hash[s[i]]++
      } else {
          hash[s[i]] = 1
      }
  }
  for (let char in hash) {
      if (hash[char] == 1) {
          return char
      }
  }
  return ' '
}
```

暴力解法
```js
var firstUniqChar = function(s) {
  for (let x of s) {
    if(s.indexOf(x) == s.lastIndexOf(x)) return x
  }
  return ' '
}
```

正则 + Set
```js
var firstUniqChar = function(s) {
  for (let char of new Set(s)) {
    if (s.match(new RegExp(char, 'g')).length == 1) {
      return char
    }
  }
  return ' '
}
```

Map
```js
var firstUniqChar = function(s) {
  if (!s) return ' '
  let map = new Map()
  for(let c of s) {
    if (map.has(c)) {
      map.set(c, map.get(c) + 1)
    } else {
      map.set(c, 1)
    }
  }
  for (let c of map.keys()) {
    if (map.get(c) == 1) {
      return c
    }
  }
  return ' '
}
```