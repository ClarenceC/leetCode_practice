## 剑指 Offer 55-I.二叉树的深度

输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。

例如：

给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。

 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof
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
 * @return {number}
 */
var maxDepth = function(root) {
  let max = 0
  if (!root) { max }
  const dfs = (node, depth) => {
      if (node) {
          depth += 1
          node.left && dfs(node.left, depth)
          node.right && dfs(node.right, depth)
          if (!node.left && !node.right) {
              max = Math.max(depth, max)
          }
      }
  }
  dfs(root, 0)
  return max
}
```

BFS 栈
```js
var maxDepth = function(root) {
  if (!root) return 0
  let max = 0
  const stack = [[root, 0]]
  while (stack.length) {
    const [node, p] = stack.pop()

    max = Math.max(max, p + 1)
    node.left && stack.push([node.left, p + 1])
    node.right && stack.push([node.right, p + 1])
  }
  return max
}
```