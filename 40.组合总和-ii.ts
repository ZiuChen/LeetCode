/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
  const res: number[][] = []
  const combine: number[] = []
  const used: boolean[] = new Array(candidates.length).fill(false)

  // 与39.组合总数不同的是 同一个位置的数不允许被重复选取
  // 故需要维护一个used数组 记录哪些位置的数字被使用过了
  const backTracking = (
    candidates: number[],
    target: number,
    sum: number,
    startIndex: number,
    used: boolean[]
  ) => {
    if (sum > target) return
    // 满足条件 保存结果 函数返回
    if (sum === target) {
      res.push([...combine])
      return
    }

    for (let i = startIndex; i < candidates.length && sum + candidates[i] <= target; i++) {
      // 同一树层 使用过的元素则跳过
      // 当前取的candidate[i] 是由candidate[i-1]回溯而来 如果二者相同则跳过
      // used[i-1] == true: 同一树枝 candidate[i]使用过
      // used[i-1] == false: 同一树层 candidate[i]使用过
      if (i > startIndex && candidates[i] === candidates[i - 1] && used[i - 1] === false) {
        continue
      }
      // 更新当前状态到sum与combine与used
      sum += candidates[i]
      combine.push(candidates[i])
      used[i] = true
      // 递归调用回溯函数
      // 注意: 与39.组合总数的区别 此处传入的是i+1而不是i
      // 因为每个数字在每个组合中只能使用一次
      backTracking(candidates, target, sum, i + 1, used)
      // 回溯
      used[i] = false
      sum -= candidates[i]
      combine.pop()
    }
  }

  // 必要: 给candidates排序 让相同值的元素排在一起
  candidates.sort((a, b) => a - b)

  backTracking(candidates, target, 0, 0, used)

  return res
}
// @lc code=end

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
console.log(combinationSum2([2, 5, 2, 1, 2], 5))
