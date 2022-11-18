/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  return nums.reduce((a, b) => {
    // console.log(a, b, a ^ b)
    return a ^ b
  })
}
// @lc code=end

singleNumber([4, 1, 2, 1, 2])
singleNumber([1])
