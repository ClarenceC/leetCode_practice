## 剑指 Offer 06.从尾到头打印链表

输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

 

示例 1：

输入：head = [1,3,2]
输出：[2,3,1]
 

限制：

0 <= 链表长度 <= 10000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
  let result = []
  if (!head) { return [] }
  if (!head.next) { return [head.val] }
  const dfs = (node) => {
      if (node == null) { return }
      dfs(node.next)
      result.push(node.val)
  }
  dfs(head)
  return result
}
```

reverser 解法
```js
var reversePrint = function(head) {
  if (head == null) return []
  const res = []
  while (head) {
    res.push(head.val)
    head = head.next
  }
  return res.reverse() // 反转数组
}
```

递归反转链表
```js
// 反转链表后再遍历打印
var reverseLink = function(head) {
  if (head == null || head.next == null) return head
  const p = reverseLink(head.next)
  head.next.next = head
  head.next = null
  return p
}
```

压栈
```js
var reversePrint = function(head) {
  const stack = []
  let node = head
  while (node) {
    stack.push(node.val)
    node = node.next
  }

  const reverse = []
  // 出栈
  while (stack.length) {
    reverse.push(stack.pop())
  }
  return reverse
}
```