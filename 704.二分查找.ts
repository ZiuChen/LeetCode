/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
  // condition of using Binary search:
  // 1. sorted array
  // 2. no repeat element
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    // avoid case of left+right overflow
    let mid = left + ((right - left) >> 1)
    if (nums[mid] > target) {
      // target in left area
      right = mid - 1
    } else if (nums[mid] < target) {
      // target in right area
      left = mid + 1
    } else {
      // nums[mid] === target
      return mid
    }
  }
  return -1
}
// @lc code=end

console.log(search([-1, 0, 3, 5, 9, 12], 9))
console.log(search([-1, 0, 3, 5, 9, 12], 2))
