/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  if (intervals.length <= 1) return intervals

  // 按左端点值排序 保证可合并区间是连续的
  intervals.sort((a, b) => a[0] - b[0])

  const res: number[][] = [intervals[0]] // 直接将排序后的第一个区间加入结果

  for (let i = 1; i < intervals.length; i++) {
    const end = res[res.length - 1]
    // 符合合并条件 修改最末区间执行合并
    // 当前区间左端点 在最末区间范围内
    if (intervals[i][0] >= end[0] && intervals[i][0] <= end[1]) {
      // 取完整区间: 左端点取最小的 右端点取最大的
      const t = [Math.min(end[0], intervals[i][0]), Math.max(end[1], intervals[i][1])]
      res[res.length - 1] = t
      continue // 跳出此次循环
    }
    // 不能合并 直接添加
    res.push(intervals[i])
  }

  return res
}
// @lc code=end

console.log(
  merge([
    [1, 4],
    [0, 2],
    [3, 5]
  ])
)
