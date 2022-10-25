/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  // 须从1开始 这样i-1才不会越界
  for (let i = 1; i < nums.length; i++) {
    // 直接用原数组存储到当前位置的最大子数组和
    // 关键: 比较(已遍历的子数组之和)加上(当前元素值)与(当前元素值)大小之比
    // 如果前者更大 说明前者是>0的 加上自己后值会变得更大
    // 如果后者更大 如果前者是<0的 加上后会拖累当前元素 直接用自己
    nums[i] = Math.max(nums[i] + nums[i - 1], nums[i])
  }
  return Math.max(...nums)
}
// @lc code=end
