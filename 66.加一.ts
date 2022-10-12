/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  const length = digits.length
  for (let i = length - 1; i >= 0; i--) {
    // 当前位++
    digits[i]++
    // 清理当前位的值
    digits[i] = digits[i] % 10
    // 如果非0 则无进位 直接返回
    if (digits[i] !== 0) {
      return digits
    }
  }
  // 所有位都+1后都没能返回 故全为9 在最前插入1
  digits.unshift(1)
  return digits
}
// @lc code=end

console.log(plusOne([8, 9, 9, 9]))
console.log(plusOne([9]))
console.log(plusOne([9, 9]))
