/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  if (intervals.length <= 1) return intervals

  let i = 0 // 指向当前正在处理的区间

  // 按左端点值排序 保证可合并区间是连续的
  intervals.sort((a, b) => a[0] - b[0])

  while (intervals[i + 1]) {
    // 如果i与i+1区间有同值或交叉 则合并两区间
    if (intervals[i][1] >= intervals[i + 1][0]) {
      // 更新i+1的左右区间值 左区间取最小 右区间取最大
      intervals[i + 1][0] = Math.min(intervals[i][0], intervals[i + 1][0])
      intervals[i + 1][1] = Math.max(intervals[i][1], intervals[i + 1][1])

      intervals.splice(i, 1) // 移除i
      i-- // 移除后相当于整体前移了
    }
    i++
  }

  return intervals
}
// @lc code=end

console.log(
  merge([
    [1, 4],
    [0, 2],
    [3, 5]
  ])
)
