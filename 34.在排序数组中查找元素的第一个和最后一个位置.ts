/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
// lower==true:  第一个>=target的下标
// lower==false: 第一个>target的下标
const binarySearch = (nums: number[], target: number, lower: boolean) => {
  let left = 0
  let right = nums.length - 1
  let ans = nums.length
  // 二分法找target附近下标
  while (left <= right) {
    const mid = Math.floor((right + left) / 2)
    // lower==true时 找>=的 否则找>的
    if (nums[mid] > target || (lower && nums[mid] >= target)) {
      // target在左半边 右指针左移
      right = mid - 1
      ans = mid
    } else {
      // target在右半边 左指针右移
      left = mid + 1
    }
  }
  return ans
}
function searchRange(nums: number[], target: number): number[] {
  // 利用数组升序排列的条件 二分法来加速查找
  // 找到: 1.第一个等于target的位置 & 2.第一个大于target的位置-1
  let ans = [-1, -1]
  const leftIndex = binarySearch(nums, target, true) // 找target下标
  const rightIndex = binarySearch(nums, target, false) - 1 // 找大于target的下标 然后-1
  // target可能不存在于数组中: 检查左右下标是否合法
  if (
    leftIndex <= rightIndex &&
    rightIndex < nums.length &&
    nums[leftIndex] === target &&
    nums[rightIndex] === target
  ) {
    // 合法则正常返回 否则返回[-1, -1]
    ans = [leftIndex, rightIndex]
  }
  return ans
}
// @lc code=end
