/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  // 回溯算法(不剪枝)
  // 1.一条路扎到底 2.回退一步 3.另寻他路
  // 从大数开始 由大到小减扣输入的其他数
  const res: number[][] = []
  // 递归函数
  const dfs = (target: number, combine: number[], index: number) => {
    // console.log(target, combine, index)
    if (index === candidates.length) {
      return
    }
    // 要找的目标值为0 直接返回空组合
    if (target === 0) {
      res.push(combine)
      return
    }
    // 一头扎到底 index一直加到length
    dfs(target, combine, index + 1)
    // 目标值还有可以减扣的余地
    if (target - candidates[index] >= 0) {
      // 传入更新后的目标值与组合 重新调用
      dfs(target - candidates[index], [...combine, candidates[index]], index)
    }
  }

  dfs(target, [], 0)

  return res
}
// @lc code=end

console.log(combinationSum([2, 3, 6, 7], 7))
// console.log(combinationSum([2, 3, 5], 8))
// console.log(combinationSum([2], 1))
