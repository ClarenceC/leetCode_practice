// 104.二叉树最大深度

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function(root) {
  function getDepth(root, leftSubtreeDepth, rightSubtreeDepth) {
    if (root != null) {
      leftSubtreeDepth = getDepth(root.left)
      rightSubtreeDepth = getDepth(root.right)
      return Math.max(leftSubtreeDepth, rightSubtreeDepth) + 1
    } else {
      return 0
    }
  }
  return getDepth(root)
}

// 通过递归查找最左节点层数和最右节点层数，选最大一层返回
// 比较左右最深子节点，并返回最大值

// 优化

var maxDepth = function(root) {
  if(!root) return 0
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

// Run
maxDepth([3,9,20,null,null,15,7]) // 3

