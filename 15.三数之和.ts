/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return []
  nums.sort((a, b) => a - b) // [-4,-1,-1,0,1,2]

  const len = nums.length
  const res: number[][] = []

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) return res
    // 如果两次遍历元素重复 则只计算前一次的 后一次跳过
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const tmp = nums[i] + nums[left] + nums[right]
      if (tmp === 0) {
        // 获得一次解 添加进结果数组
        let list: number[] = []
        list.push(nums[i], nums[left], nums[right])
        res.push(list)
        // 去重: 将左右指针移动到非重复元素上
        // 如果移动后left/right取到的值与上一次相同 则继续移动
        while (left < right && nums[left + 1] === nums[left]) left++
        while (left < right && nums[right - 1] === nums[right]) right--
        // 经过去重 指针指向了最后一个非重复元素 仍然需要移动一次 开始下一次检查
        left++
        right--
      } else if (tmp < 0) {
        // 结果小于零 nums[left]太小 指针右移
        left++
      } else {
        // 结果大于零 nums[right]太大 指针左移
        right--
      }
    }
  }
  return res
}
// @lc code=end
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([0, 1, 1]))
console.log(threeSum([0, 0, 0]))
