/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
  if (n === 1) return ['()']
  const res = new Set<string>() // 用Set去重
  const sArray = generateParenthesis(n - 1) // 在更小n的基础上添加更高n的特征
  for (const char of sArray) {
    // 遍历更小n的每个结果 在其上添加多一个n的特征
    for (let i = 0; i < char.length; i++) {
      // 从每个括号组合的每个字符串 创建一个新的括号组合
      // 以`()`为最小单位 插入到原来的每个括号组合中
      res.add(char.substring(0, i) + '()' + char.substring(i, char.length))
    }
  }
  return [...res]
}
// @lc code=end
