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
  // 只遍历一次 双指针
  let n = nums.length
  // 用p0交换0 用p1交换1
  // p0始终指向最后一个0后面的元素
  // p1始终指向最后一个1后面的元素
  let p0 = 0,
    p1 = 0
  for (let i = 0; i < n; ++i) {
    if (nums[i] == 1) {
      // 交换1
      // 交换nums[i]与nums[p1]
      let temp = nums[i]
      nums[i] = nums[p1]
      nums[p1] = temp
      ++p1 // 用来交换0的指针p1后移
    } else if (nums[i] == 0) {
      // 交换0
      // 交换nums[i]与nums[p0]
      let temp = nums[i]
      nums[i] = nums[p0]
      nums[p0] = temp

      // 交换0时 可能会将1交换出去
      // 在交换后 把这个换出去的元素放到0序列的后面
      if (p0 < p1) {
        // 交换nums[i]与nums[p1]
        temp = nums[i]
        nums[i] = nums[p1]
        nums[p1] = temp
      }
      // p0和p1都要向后移动
      ++p0
      ++p1
    }
  }
}
// @lc code=end

sortColors([2, 0, 2, 1, 1, 0])
sortColors([2, 0, 1])
