/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return []

  const res: string[] = []
  let str = ''
  const charMap = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

  /**
   * 回溯算法
   * @param digits 原始数字字符串
   * @param index 当前遍历的数字字符串索引值
   * @returns void
   */
  const backTracing = (digits: string, index: number) => {
    // 递归中止条件
    if (index === digits.length) {
      res.push(str)
      return
    }

    // 将字符串转为整型
    const digist = parseInt(digits[index])
    // 获得该数字对应的字母集
    const letters = charMap[digist]
    // for循环遍历 处理字母集中每个字母
    for (let i = 0; i < letters.length; i++) {
      // 将当前数字对应的字母加入到组合中
      str += letters[i]
      // 递归调用 将index后移 处理后一个数字
      backTracing(digits, index + 1)
      // 递归调用返回 回溯
      str = str.slice(0, str.length - 1)
    }
  }

  backTracing(digits, 0)
  return res
}
// @lc code=end

console.log(letterCombinations('23'))
console.log(letterCombinations(''))
console.log(letterCombinations('2'))
