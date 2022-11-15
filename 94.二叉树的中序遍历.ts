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
  const stack: TreeNode[] = []

  // 显式地维护一个栈
  while (root || stack.length) {
    // 当前root有值 则向左递归 将所有左节点入栈
    while (root) {
      stack.push(root)
      root = root.left
    }

    // 左节点全部入栈完毕
    // 回退状态 栈顶元素出栈 因为此时root==null,  root.left一定为null
    // 执行下一次外层while 根出栈 此时root.right可能存在
    root = stack.pop()!

    // 将栈顶元素存入res
    res.push(root.val)

    // 赋值为右节点 继续查找
    root = root.right
  }
  return res
}
// @lc code=end
