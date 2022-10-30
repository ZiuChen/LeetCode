/*
 * @lc app=leetcode.cn id=62 lang=typescript
 *
 * [62] 不同路径
 */

// @lc code=start
function uniquePaths(m: number, n: number): number {
  const dp: number[][] = []

  // 初始化dp[i][0] = dp[0][j] = 1
  for (let i = 0; i < m; i++) dp.push(new Array(n).fill(0))
  for (let i = 0; i < m; i++) dp[i][0] = 1
  for (let j = 0; j < n; j++) dp[0][j] = 1

  // 按照递推公式与遍历顺序 填入dp
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  // 返回右下角的dp值 即为结果
  return dp[m - 1][n - 1]
}
// @lc code=end

console.log(uniquePaths(3, 7))
console.log(uniquePaths(7, 3))
console.log(uniquePaths(3, 3))
