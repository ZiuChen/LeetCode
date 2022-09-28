/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
// 前一半后一半数字对比
// function isPalindrome(x: number): boolean {
//   if (x < 0 || (x % 10 === 0 && x !== 0)) return false
//   let revNumber = 0
//   while (x > revNumber) {
//     revNumber = revNumber * 10 + (x % 10)
//     x = Math.floor(x / 10)
//   }
//   return x === revNumber || x === Math.floor(revNumber / 10)
// }
// 转字符串
function isPalindrome(x: number): boolean {
  const string = String(x)
  let r = ''
  for (let i = string.length - 1; i >= 0; i--) {
    r += string[i]
  }
  return r === string
}
// @lc code=end
