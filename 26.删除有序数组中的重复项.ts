/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let index = 0 // 浮动的“新数组”栈顶索引
  let len = 1 // 长度 包含初始头元素故为1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[index]) {
      // 由于升序排列 故只有 = 或 > 两种情况
      index++ // 栈顶索引++
      nums[index] = nums[i] // 将更大的新值放到“新数组”的栈顶
      len++
    }
  }
  return len
}
// @lc code=end
