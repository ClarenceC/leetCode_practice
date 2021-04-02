## 剑指 Offer 28.对称的二叉树

请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3

 

示例 1：

输入：root = [1,2,2,3,4,4,3]
输出：true
示例 2：

输入：root = [1,2,2,null,3,null,3]
输出：false
 

限制：

0 <= 节点个数 <= 1000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


DFS
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true
  const check = (left, right) => {
    if (!left && !right) return true
    if (!left || !right) return false
    if (left.val !== right.val) return false

    return check(left.left, right.right) && check(left.right, right.left)
  }
  return check(root.left, root.right)
}
```

BFS
```js
var isSymmetric = function(root) {
  if (root == null) return true
  const queue = []
  queue.push(root.left, root.right)

  while (queue.length) {
      const levelSize = queue.length
      for (let i = 0; i < levelSize; i += 2) {
          const left = queue.shift()
          const right = queue.shift()
          if ((left && right == null ) || (left == null) && right) {
              return false
          }
          if (left && right) {
              if (left.val != right.val) {
                  return false
              }
              queue.push(left.left, right.right)
              queue.push(left.right, right.left)
          }
      }
  }
  return true
};
```