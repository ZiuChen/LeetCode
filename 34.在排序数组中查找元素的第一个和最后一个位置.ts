/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function binarySearch(nums: number[], target: number, lower: boolean) {
  let left = 0
  let right = nums.length - 1
  let ans = -1 // 如果从未找到 则直接fallback -1

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] === target) {
      // 找到了target 更新ans
      ans = mid

      if (lower) {
        // lower == true 查找第一个大于等于 target 的下标 向左找
        right = mid - 1
      } else {
        // lower == false 查找第一个大于 target 的下标 向右找
        left = mid + 1
      }
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return ans
}
function searchRange(nums: number[], target: number): number[] {
  const leftIndex = binarySearch(nums, target, true)
  const rightIndex = binarySearch(nums, target, false)

  // 检查合法性 & 数组中是否包含target
  if (
    leftIndex <= rightIndex &&
    rightIndex < nums.length &&
    nums[leftIndex] === target &&
    nums[rightIndex] === target
  ) {
    return [leftIndex, rightIndex]
  }
  return [-1, -1]
}
// @lc code=end

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
console.log(searchRange([5, 7, 7, 8, 8, 10], 6))
console.log(searchRange([], 0))
