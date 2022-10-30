/*
 * @lc app=leetcode.cn id=62 lang=typescript
 *
 * [62] 不同路径
 */

// @lc code=start
function uniquePaths(m: number, n: number): number {
  // 数论解法:
  // 机器人必然走(m+n-2)步 从这些步中选(m-1)步向下走即可

  let fenzi = 1
  let fenmu = 1

  let count = m - 1
  let t = m + n - 2

  while (count--) fenzi *= t-- // 计算分子 有溢出风险
  for (let i = 1; i <= m - 1; i++) fenmu *= i // 计算分母

  return fenzi / fenmu
}
// @lc code=end

console.log(uniquePaths(3, 7))
console.log(uniquePaths(7, 3))
console.log(uniquePaths(3, 3))
