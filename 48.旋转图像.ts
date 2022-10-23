/*
 * @lc app=leetcode.cn id=48 lang=typescript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const n = matrix.length
  // 反向转置 列变行 逆时针90度
  for (let i = 0; i < n; i++) {
    // i: 0, 1, 2, 3
    for (let j = 0; j < i; j++) {
      // j: -1, 0, 0 1, 0 1 2
      const temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
  // 行反转
  for (let i = 0; i < n; i++) {
    matrix[i].reverse()
  }
}
// @lc code=end
