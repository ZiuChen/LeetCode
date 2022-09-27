/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  if (nums.length < 2) return []
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const diff = target - num
    if (map.has(diff)) {
      // 如果找到了与diff相等的num 则返回
      return [map.get(diff), i]
    }
    map.set(num, i) // 未找到 则将num设为键 索引设为值
  }
  return []
}
// @lc code=end
