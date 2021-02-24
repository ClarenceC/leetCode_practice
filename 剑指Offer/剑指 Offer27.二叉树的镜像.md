## 剑指 Offer 27.二叉树的镜像

请完成一个函数，输入一个二叉树，该函数输出它的镜像。

例如输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
镜像输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1

 

示例 1：

输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
 

限制：

0 <= 节点个数 <= 1000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

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
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
  const dfs = (node) => {
    if (!node) { return }
    let left = node.left ? dfs(node.left) : null
    let right = node.right ? dfs(node.right) : null
    node.left = right
    node.right = left
    return node
  }
  dfs(root)
  return root
}
```

优化
```js
var mirrorTree = function(root) {
  if (!root) return null
  [root.left, root.right] = [mirrorTree(root.right), mirrorTree(root.left)]
  return root
}
```

BFS
```js
var mirrorTree = function(root) {
  if (!root) return root
  let queue = [root]
  while (queue.length) {
    const stack = []
    for (let node of queue) {
      [node.left, node.right] = [node.right, node.left] // 先交换
      node.left && stack.push(node.left) // 再入栈
      node.right && stack.push(node.right)
    }
    queue = stack
  }
  return root
}
```