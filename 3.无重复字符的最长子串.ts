/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 *
 * 思路: 暴力解法时间复杂度高 用哈希表降低时间复杂度
 * 哈希表帮助代码记住前方已经检查过的子串最尾元素的索引+1
 */

// @lc code=start
type TMap = {
  [key: string]: number
}
function lengthOfLongestSubstring(s: string): number {
  // 初始化last数组 记录字符上一次出现的位置
  // 初始化为-1: 默认该字符未出现过
  const last: number[] = new Array(128).fill(-1)
  const n = s.length

  let res = 0
  let start = 0
  for (let i = 0; i < n; i++) {
    const index: number = s.charCodeAt(i) // 字符串 => ASCII
    start = Math.max(last[index] + 1, start) // start移动到上一次该字符出现的位置的下一个位置
    res = Math.max(i - start + 1, res)
    last[index] = i // 记录字符最后出现的位置
  }

  return res
}
// @lc code=end

console.log(lengthOfLongestSubstring('abcabcbb'))
