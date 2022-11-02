/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  // 定义全局变量 存储结果
  const res: number[][] = []
  const combine: number[] = []

  /**
   * 回溯函数
   * @param n 树的宽度
   * @param k 树的深度
   * @param startIndex 下一次递归时的开始索引 因为需要无重复选取
   */
  const backTracing = (n: number, k: number, startIndex: number) => {
    // 回溯中止条件: 当前组合已满足个数要求k
    if (combine.length === k) {
      res.push([...combine]) // 解构深拷贝
      return
    }
    // 如果起始位置之后的元素个数已经不满足k 则不必搜索
    for (let i = startIndex; i <= n - (k - combine.length) + 1; i++) {
      // 将值加入到当前组合中
      combine.push(i)
      // 递归调用回溯函数
      backTracing(n, k, i + 1)
      // 递归返回 撤销当前处理的节点 回到上一层
      combine.pop()
    }
  }
  // 开始回溯
  backTracing(n, k, 1)

  return res
}
// @lc code=end

console.log(combine(4, 2))
