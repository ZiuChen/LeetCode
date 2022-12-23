/*
 * @lc app=leetcode.cn id=977 lang=typescript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
  const len = nums.length
  const res = new Array(len).fill(0)

  // 双指针
  let i = 0 // 左指针
  let j = len - 1 // 右指针
  let k = len - 1 // 新数组末尾指针

  while (i <= j) {
    const leftVal = Math.pow(nums[i], 2)
    const rightVal = Math.pow(nums[j], 2)

    if (leftVal > rightVal) {
      // 左边值更大
      res[k--] = leftVal
      i++ // 左指针右移
    } else {
      res[k--] = rightVal
      j-- // 右指针左移
    }
  }

  return res
}
// @lc code=end

console.log(sortedSquares([-4, -1, 0, 3, 10]))
console.log(sortedSquares([-7, -3, 2, 3, 11]))
