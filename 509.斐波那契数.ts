/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
function fib(n: number): number {
  if (n <= 1) return n

  const dp: number[] = [0, 1]

  for (let i = 2; i <= n; i++) {
    const sum = dp[0] + dp[1]
    dp[0] = dp[1]
    dp[1] = sum
  }

  return dp[1]
}
// @lc code=end

console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
