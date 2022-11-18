/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  if (!nums.length) return 0
  if (!nums.includes(val)) return nums.length

  // 定义快指针与慢指针
  // 快指针 -> 寻找新数组的下一个元素
  // 慢指针 -> 指向新数组的栈顶
  let slowIndex = 0

  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    if (val !== nums[fastIndex]) {
      nums[slowIndex++] = nums[fastIndex]
    }
  }

  return slowIndex
}
// @lc code=end
