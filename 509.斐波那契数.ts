/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
function fib(n: number): number {
  if (n === 0) return 0
  if (n === 1) return 1

  return fib(--n) + fib(--n)
}
// @lc code=end

// console.log(fib(2))
// console.log(fib(3))
// console.log(fib(4))
