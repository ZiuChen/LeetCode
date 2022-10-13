/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  const length = height.length
  if (length === 2) return Math.sqrt(Math.min(height[0], height[1]))

  let maxCapacity = 0 // 记录有过的最大水量
  let p1 = 0
  let p2 = length - 1

  while (p1 < p2) {
    // 短板向内移动 才有可能让水量增加
    maxCapacity =
      height[p1] < height[p2]
        ? Math.max(maxCapacity, (p2 - p1) * height[p1++])
        : Math.max(maxCapacity, (p2 - p1) * height[p2--])
  }

  return maxCapacity
}
// @lc code=end
