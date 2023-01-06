/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
  // 滑动窗口 O(n^2) => O(n)
  let res = Infinity // 最终结果
  let i = 0 // 滑动窗口起始位置
  let sum = 0 // 当前子序列之和
  let subLen = 0 // 当前子序列长度

  // 只遍历一次
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j]
    // 当满足条件时
    while (sum >= target) {
      subLen = j - i + 1 // 求当前子序列长度
      res = res < subLen ? res : subLen // 比较并更新较短的子序列长度
      sum -= nums[i++] // 滑动窗口起始位置向后移动 同时减掉前一个位置的数: (sum-=nums[i]; i++;)
    }
  }

  return res === Infinity ? 0 : res
}
// @lc code=end

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
console.log(minSubArrayLen(4, [1, 4, 4]))
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]))
