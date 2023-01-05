/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  let checkStr = ''
  let revStr = ''
  // 遍历原字符串
  // 1.将原串转为仅剩数字与小写字母 2.生成反转串
  for (let i = 0; i < s.length; i++) {
    if (isAlnum(s[i])) {
      checkStr += s[i].toLocaleLowerCase()
      revStr = s[i].toLocaleLowerCase() + revStr
    }
  }
  return checkStr === revStr
}

/**
 * 检查字符串是否仅由数字与小写字母组成
 * @param s 待检查字符串
 */
function isAlnum(s: string): boolean {
  return /^[a-z0-9]+$/i.test(s)
}
// @lc code=end

console.log(isPalindrome('A man, a plan, a canal: Panama')) // true
console.log(isPalindrome('race a car')) // false
console.log(isPalindrome(' ')) // true
