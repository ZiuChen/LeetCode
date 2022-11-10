/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
 */

//  Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

// @lc code=start

function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []

  // 递归 中序遍历
  const inorder = (root: TreeNode | null) => {
    // root值为null 证明已经递归到叶节点 函数返回
    if (!root) {
      return
    }

    // root有值 传入左节点 向左递归
    inorder(root.left)

    // 递归返回 将当前节点值加入到结果中
    res.push(root.val)

    // 保存完当前节点 向右递归
    inorder(root.right)
  }

  inorder(root)
  return res
}
// @lc code=end
