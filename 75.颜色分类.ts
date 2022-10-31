/*
 * @lc app=leetcode.cn id=75 lang=typescript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let ptr = 0 // 指向 头部 的范围

  // 将所有的0交换到数组头部
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      // 交换nums[i]与nums[ptr]
      const tmp = nums[ptr]
      nums[ptr] = nums[i]
      nums[i] = tmp
      // 指针后移
      ptr++
    }
  }

  // 将所有的1交换到0之后
  for (let i = ptr; i < nums.length; ++i) {
    if (nums[i] == 1) {
      const tmp = nums[ptr]
      nums[ptr] = nums[i]
      nums[i] = tmp
      ptr++
    }
  }

  // 如此操作 剩余的2自然被移动到了数组末
  // 时间复杂度O(n)

  // console.log(nums)
}
// @lc code=end

sortColors([2, 0, 2, 1, 1, 0])
sortColors([2, 0, 1])
