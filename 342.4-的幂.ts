/*
 * @lc app=leetcode.cn id=342 lang=typescript
 *
 * [342] 4的幂
 */

// @lc code=start
function isPowerOfFour(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0 && n % 3 === 1
}
// @lc code=end

console.log(isPowerOfFour(16))
console.log(isPowerOfFour(5))
console.log(isPowerOfFour(1))
