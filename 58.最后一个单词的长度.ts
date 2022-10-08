/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  let end = s.length - 1
  while (end >= 0 && s[end] === ' ') end-- // 移出空格区域 确定最末单词的结束索引值
  let start = end // 从结束索引值开始向前遍历 找到首个空格索引
  while (start >= 0 && s[start] !== ' ') start--
  return end - start
}
// @lc code=end
