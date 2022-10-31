/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
  // dp[i][j]的意义: 走至第(i,j) 需要花费的路径和
  // 推导公式: dp[i][j] = grid[i][j] + Math.min(dp[i-1][j], dp[i][j-1])
  // 初始化: dp[0][i] = dp[0][i-1] + grid[0][i]; dp[j][0] = dp[j-1][0] + grid[j][0]
  // 遍历顺序: 从左至右 从上到下

  const row = grid.length // 总行数
  const col = grid[0].length // 总列数

  const dp: number[][] = []

  for (let i = 0; i < row; i++) dp.push(new Array(col).fill(0))

  // 初始化(0,0)
  dp[0][0] = grid[0][0]
  // 初始化第一行
  for (let i = 1; i < col; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i]
  }
  // 初始化第一列
  for (let j = 1; j < row; j++) {
    dp[j][0] = dp[j - 1][0] + grid[j][0]
  }

  // 按照遍历顺序与递推公式 动态规划
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1])
    }
  }

  // 返回到达右下角的dp值
  return dp[row - 1][col - 1]
}
// @lc code=end

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
  ])
)
