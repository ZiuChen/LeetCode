/*
 * @lc app=leetcode.cn id=746 lang=typescript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
function minCostClimbingStairs(cost: number[]): number {
  const dp: number[] = [0, 0] // 默认第一步是不花费体力的

  // 从i=2开始遍历 至最后一级楼梯 且包括最后一级楼梯
  for (let i = 2; i <= cost.length; i++) {
    // 第i级楼梯至少需要花费的是前面一级或前面第二级至少需要花费的体力 + 其对应级数自身需要花费的体力
    // 取最小值 获得第i级楼梯的最小花费
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  }

  return dp[cost.length]
}
// @lc code=end
