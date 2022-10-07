/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  if (nums.length === 0) return 0
  if (nums.indexOf(val) === -1) return nums.length
  let len = nums.length
  for (let i = 0; i < nums.length; i++) {
    if (val === nums[i]) {
      nums.splice(i, 1)
      i--
      len--
    }
  }
  return len
}
// @lc code=end
