/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  if (nums[0] > target) {
    // 最小值大于目标值
    return 0
  } else if (nums[nums.length - 1] < target) {
    // 最大值小于目标值
    return nums.length
  }
  let start = 0 // 前指针
  let end = nums.length - 1 // 后指针
  while (start <= end) {
    // 前后指针之间索引
    const mid = Math.round((start + end) / 2)
    if (nums[mid] === target) {
      // 目标值存在于原数组中 直接返回索引
      return mid
    } else if (nums[mid] < target) {
      start = mid + 1 // 中间索引值更小 前指针后移
    } else {
      end = mid - 1 // 中间索引值更大 后指针前移
    }
  }
  return start
}
// @lc code=end
