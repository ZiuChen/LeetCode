/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  // 1.排序数组 2.无重复元素 3.Ologn 考虑使用二分法
  const len = nums.length

  let left = 0
  let right = len - 1

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2) // 防止溢出

    if (target === nums[mid]) {
      // 找到目标值
      return mid
    } else if (target > nums[mid]) {
      // 在右侧
      left = mid + 1
    } else {
      // 在左侧
      right = mid - 1
    }
  }

  // 未找到目标值
  return left
}
// @lc code=end
console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
