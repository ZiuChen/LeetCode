/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  if (n <= 1) return n
  // dp初始化: 爬1层有1种方法 爬2层有2种方法
  const dp: number[] = [0, 1, 2]

  for (let i = 3; i <= n; i++) {
    // 优化空间复杂度: 实际只用到了两个位置
    const sum = dp[1] + dp[2]
    dp[1] = dp[2]
    dp[2] = sum
  }

  return dp[2]
}
// @lc code=end
