/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  let slowIndex = 0 // 慢指针 代表新数组的长度

  // 快指针 向后搜索不包含val的目标数组
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    if (nums[fastIndex] !== val) {
      slowIndex++
    }
  }

  return slowIndex
}
// @lc code=end

console.log(removeElement([3, 2, 2, 3], 3)) // 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)) // 5
