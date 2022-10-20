/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  // 此解不符合题意: 时间复杂度O(n) 没有利用到数组升序排列的条件
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    // 左右边界都与target相等 则左右边界已确定
    if (nums[left] === target && nums[right] === target) {
      return [left, right]
    }
    // nums[left]比target小
    // 左边界不符合条件 向右移动
    if (nums[left] < target) {
      left++
    }
    // nums[right]比target大
    // 右边界不符合条件 向左移动
    if (nums[right] > target) {
      right--
    }
  }
  return [-1, -1]
}
// @lc code=end

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
console.log(searchRange([5, 7, 7, 8, 8, 10], 6))
console.log(searchRange([], 0))
