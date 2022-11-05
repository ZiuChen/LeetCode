/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = []

  /**
   * 回溯函数
   * @description 剪枝的关键: 每次递归遍历的是同一个candidates 那么startIndex可以在同一个数组内指定 不断向后移动
   * @param combinate 当前组合
   * @param sumVal 当前组合的和值
   * @param startIndex 起始检索位置(动态指定以剪枝)
   * @returns
   */
  const backTracking = (combinate: number[], sumVal: number, startIndex: number) => {
    // 满足跳出递归条件
    if (sumVal === target) {
      // 将当前组合加入到结果中
      res.push([...combinate])
      return
    }

    // 从上次遍历结束的位置开始 遍历整个candidates
    for (let i = startIndex; i < candidates.length; i++) {
      if (sumVal + candidates[i] <= target) {
        // 当前值相加后 仍未得到目标结果 将当前数更新到组合中
        combinate.push(candidates[i])
        // 重点: 传入递归的backTracing函数的 i不必+1了 表示可以重复选取当前值加入到组合中
        backTracking(combinate, sumVal + candidates[i], i) // 继续递归调用 直至找到目标结果返回
        combinate.pop() // 找到目标结果 递归调用返回时 将组合顶部的元素弹出 即: 回溯到上一步
      }
    }
  }

  backTracking([], 0, 0)

  return res
}
// @lc code=end

// console.log(combinationSum([2, 3, 6, 7], 7))
// console.log(combinationSum([2, 3, 5], 8))
// console.log(combinationSum([2], 1))
