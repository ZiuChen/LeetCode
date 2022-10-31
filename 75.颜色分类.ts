/*
 * @lc app=leetcode.cn id=75 lang=typescript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  // 直接升序排序
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        const tmp = nums[i]
        nums[i] = nums[j]
        nums[j] = tmp
      }
    }
  }
  // console.log(nums)
}
// @lc code=end

sortColors([2, 0, 2, 1, 1, 0])
sortColors([2, 0, 1])
