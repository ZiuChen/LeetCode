/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const res: number[][] = []
  const len = nums.length
  const used: boolean[] = new Array(len).fill(false)

  const backTrace = (used: boolean[], index: number, combinate: number[]) => {
    // 跳出递归的条件 遍历到底
    if (index === len) {
      // 递归完成 将当前组合加入结果
      res.push(Array.of(...combinate))
      return
    }
    for (let i = 0; i < len; i++) {
      if (!used[i]) {
        // 未使用过该数字 添加进组合中
        combinate.push(nums[i])
        used[i] = true // 在used数组中将该数字标记为已使用
        // 注意: 此处不应当使用index++ 会改变当前作用域下index的值
        // 使递归返回的回溯过程中的index偏移
        backTrace(used, index + 1, combinate)
        // 递归返回 回溯
        combinate.pop() // 回溯上一级
        used[i] = false // 重置该数字为未使用
      }
    }
  }

  backTrace(used, 0, [])

  return res
}
// @lc code=end

// console.log(permute([1, 2, 3]))
// console.log(permute([0, 1]))
// console.log(permute([1]))
