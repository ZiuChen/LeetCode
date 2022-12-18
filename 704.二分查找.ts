/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      // target在左侧
      right = mid - 1 // mid自身肯定可以排除掉
    } else {
      // target在右侧
      left = mid + 1
    }
  }
  return -1
}
// @lc code=end

console.log(search([-1, 0, 3, 5, 9, 12], 9)) // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)) // 2
