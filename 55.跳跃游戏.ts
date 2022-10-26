/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  let furthest = 0
  for (let i = 0; i < nums.length; i++) {
    // 从i=0开始 尝试每种可能 记录能跳到的最远距离
    if (i > furthest) return false
    // 不断更新当前索引值能跳到的最远距离
    furthest = Math.max(furthest, i + nums[i])
  }
  return true
}
// @lc code=end
