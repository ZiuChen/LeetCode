/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 1) return strs[0] // 仅有一个字符串 则公共前缀为其本身
  if (strs.filter((s) => s.length === 0).length !== 0) return '' // 存在空字符串 则不存在公共前缀

  let currentPrefix = ''
  for (const s of strs) {
    // 遍历每个字符串
    for (const w of s) {
      // 遍历每个字符
      currentPrefix += w
      const not = strs.filter((ts) => ts !== s).filter((ts) => ts.indexOf(currentPrefix) !== 0)
      if (not.length !== 0) {
        // 存在前缀不匹配的字符串
        currentPrefix = currentPrefix.substring(0, currentPrefix.length - 1) // 移除不匹配的字符
        return currentPrefix // 将当前结果返回
      } else {
        continue
      }
    }
    // 当前字符串的每个字符都遍历完了 前缀都匹配
    return s
  }
  return ''
}
// @lc code=end
