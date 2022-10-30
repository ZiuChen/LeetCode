/*
 * @lc app=leetcode.cn id=62 lang=typescript
 *
 * [62] 不同路径
 */

// @lc code=start
function uniquePaths(m: number, n: number): number {
  const dp: number[] = []

  // 优化空间复杂度: 用滚动的一维数组 保存到达当前行不同列的总路径数
  // 初始化一维数组 模拟第一行(dp[i][0])全为1
  for (let i = 0; i < n; i++) dp[i] = 1

  for (let j = 1; j < m; j++) {
    for (let i = 1; i < n; i++) {
      dp[i] += dp[i - 1]
    }
  }

  // 返回当前一维数组最末一个元素 即为到达右下角的路径数
  return dp[n - 1]
}
// @lc code=end

console.log(uniquePaths(3, 7))
console.log(uniquePaths(7, 3))
console.log(uniquePaths(3, 3))
