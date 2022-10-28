/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
function fib(n: number): number {
  // 记忆已经求结果的n值
  const memo: { [key: number]: number } = {}

  const _res = (x: number): number => {
    // 找到了已求解过的值 直接返回
    if (memo[x]) return memo[x]
    if (x === 0) return 0
    if (x === 1) return 1

    memo[x] = _res(x - 1) + _res(x - 2)
    return memo[x]
  }

  return _res(n)
}
// @lc code=end

console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
