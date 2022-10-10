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
  const cMap: TMap = {}
  let maxSize = 0
  let p1 = 0 // 头指针
  let p2 = 0 // 尾指针
  while (p2 < s.length) {
    const char = s[p2]
    if (Object.keys(cMap).includes(char)) {
      // 表中找到了char 重置头指针
      p1 = Math.max(cMap[char], p1)
    }
    // 保存到哈希表中: [p1,p2+1]字符串不存在重复字符
    cMap[char] = p2 + 1
    // 若当前子串更长 则更新maxSize
    maxSize = Math.max(maxSize, p2 - p1 + 1)
    // 尾指针始终向后移动
    p2++
  }
  return maxSize
}
// @lc code=end
