/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  const res: number[][] = []
  const combine: number[] = []

  // 与组合总和问题不同 子集问题需要收集所有节点
  const backTracing = (nums: number[], startIndex: number) => {
    // 收集节点 要放在终止条件之上 否则会漏掉自身
    res.push([...combine])
    // 递归终止条件 当startIndex到达最末一个元素
    if (startIndex >= nums.length) {
      return
    }

    // 求子集 就是遍历整棵树 不需要剪枝操作
    for (let i = startIndex; i < nums.length; i++) {
      combine.push(nums[i])
      backTracing(nums, i + 1) // 注意从i+1开始 元素不重复选取
      combine.pop()
    }
  }

  backTracing(nums, 0)

  return res
}
// @lc code=end

console.log(subsets([1, 2, 3]))
console.log(subsets([0]))
