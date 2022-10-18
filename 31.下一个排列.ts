/*
 * @lc app=leetcode.cn id=31 lang=typescript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  if (nums.length <= 1) return
  let i = nums.length - 2 // 从倒数第二个元素开始遍历
  // 后一个数更小 即使交换也无法使字典序变大 向前找
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--
  }
  // 后一个数比前一个数更大 此时nums[i]即是需要替换的最高位(其他情况下的任一排列交换 只会让字典序变得更小 而不是更大)
  if (i >= 0) {
    // 在nums[i]~nums[-1]范围内 找到一个比nums[i]大 但是最接近nums[i]的数 替换掉nums[i]
    let j = nums.length - 1
    while (j >= 0 && nums[j] <= nums[i]) {
      // 从后向前找 找到第一个比nums[i]更大的数字即为最接近nums[i]的数
      // 因为能进入此循环 证明排列已经是逆序排列了
      j--
    }
    // 交换nums[i]和nums[j]
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
  // 左指针指向nums[i] 右指针指向nums[-1]
  // 交换两个指针指向的元素 执行reverse操作
  let left = i + 1
  let right = nums.length - 1
  while (left < right) {
    let temp = nums[left]
    nums[left] = nums[right]
    nums[right] = temp
    left++
    right--
  }
  console.log(nums)
}
// @lc code=end
nextPermutation([1, 2, 3])
nextPermutation([3, 2, 1])
nextPermutation([1, 1, 5])
