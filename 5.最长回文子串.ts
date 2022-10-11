/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  const len = s.length
  if (len < 2) return s

  let maxLength = 1
  let begin = 0

  for (let i = 0; i < len - 1; i++) {
    // 头指针 从0遍历到len-1
    for (let j = i + 1; j < len; j++) {
      // 尾指针 从1遍历到len
      if (j - i + 1 > maxLength && validPalindrome(s, i, j)) {
        // 子串更长 且为回文字符串
        maxLength = j - i + 1 // 更新长度
        begin = i // 更新头指针位置
      }
    }
  }

  return s.substring(begin, begin + maxLength)

  function validPalindrome(str: string, begin: number, end: number) {
    while (begin < end) {
      if (str[begin] !== str[end]) return false
      begin++
      end--
    }
    return true
  }
}
// @lc code=end
console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome('ac'))
console.log(longestPalindrome('abcba'))
