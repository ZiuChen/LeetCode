/*
 * @lc app=leetcode.cn id=216 lang=typescript
 *
 * [216] 组合总和 III
 */

// @lc code=start
function combinationSum3(k: number, n: number): number[][] {
  // 初始化全局变量
  const res: number[][] = []
  const combine: number[] = []

  /**
   * 回溯函数
   * @param totalCount 遍历深度 combine总数为k
   * @param targetSum 目标和 combine元素和为n
   * @param sum 当前combine元素之和
   * @param startIndex 下一层for循环起始位置
   */
  const backTracing = (totalCount: number, targetSum: number, sum: number, startIndex: number) => {
    // 剪枝: 如果当前和已经大于目标和 就不必继续遍历了
    if (sum > targetSum) return
    // 回溯中止条件: 组合中元素数量已满足targetCount
    if (combine.length === totalCount) {
      // 当前组合求和符合条件 加入到结果中
      if (sum === targetSum) {
        // 深拷贝
        res.push([...combine])
      }
      return
    }
    // 剪枝: 如果起始位置之后的元素个数已经不满足k 则不必搜索
    for (let i = startIndex; i <= 9 - (totalCount - combine.length) + 1; i++) {
      // 将当前数字加入到状态中
      sum += i
      combine.push(i)
      // 递归调用回溯函数
      backTracing(totalCount, targetSum, sum, i + 1)
      // 递归返回 撤销当前处理的节点 回到上一层
      sum -= i
      combine.pop()
    }
  }

  // 注意入参含义
  backTracing(k, n, 0, 1)

  return res
}
// @lc code=end

console.log(combinationSum3(3, 7))
