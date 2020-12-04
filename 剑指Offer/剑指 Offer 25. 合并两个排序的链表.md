## 剑指 Offer 25. 合并两个排序的链表

输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

示例1：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
限制：

0 <= 链表长度 <= 1000



来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
  let l1Point = l1
  let l2Point = l2
  let dummy = new ListNode()
  let current = dummy

  while (l1Point && l2Point) {
    let l1Next = l1Point.next
    let l2Next = l2Point.next
    
    if (l1Point.val > l2Point.val) {
      current.next = l2Point
      current = l2Point
      l2Point = l2Next
    } else {
      current.next = l1Point
      current = l1Point
      l1Point = l1Next
    }
  }
  if (l1Point) {
      current.next = l1Point
  }
  if (l2Point) {
      current.next = l2Point
  }
  return dummy.next
}
```

优化

```js
var mergeTwoLists = function(l1, l2) {
  let current = new ListNode()
  const dummy = current

  while (l1 || l2) {
    if (!l1) {
      current.next = l2
      break
    } else if (!l2){
      current.next = l1
      break
    }

    if (l1.val <= l2.val) {
      current.next = l1
      l1 = l1.next
    } else {
      current.next = l2
      l2 = l2.next
    }

    current = current.next
  }

  return dummy.next
}
```

递归

```js
var mergeTwoLists = function(l1, l2) {
  if (l1 === null) return l2
  if (l2 === null) return l1
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2) // 递归接后面的排序
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next) // 递归接后面的排序
    return l2
  }
}
```