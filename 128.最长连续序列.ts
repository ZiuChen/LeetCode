/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  if (!nums.length) return 0

  const numSet: Set<number> = new Set()

  // 将数组元素添加到Set中去重
  for (const n of nums) {
    numSet.add(n)
  }

  let res = 0

  for (const num of nums) {
    // 只有未被遍历过的值需要继续向后遍历
    // 如果num没有前驱值num-1 则不需要遍历
    if (!numSet.has(num - 1)) {
      let cNum = num // 当前遍历的头部数字
      let cRes = 1 // 当前遍历的子数字串最大长度

      // 向后遍历 检查num+1, num+2, num+3···是否存在
      while (numSet.has(cNum + 1)) {
        cNum++
        cRes++
      }

      // 遍历结束 更新res
      res = Math.max(cRes, res)
    }
  }

  return res
}
// @lc code=end

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
console.log(longestConsecutive([]))
console.log(longestConsecutive([1]))

console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]))
